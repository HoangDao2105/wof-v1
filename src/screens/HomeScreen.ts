import { BlurFilter, ColorMatrixFilter, Container, Graphics, Sprite, TextStyle, Texture } from "pixi.js";
import { Manager, ScreenContainer } from "../Manager";
import { PrimaryButton } from "../components/shared/PrimaryButton";
import { Label } from "../components/shared/Label";
import { GameScreen } from "./GameScreen";
import { LeaderboardScreen } from "./LeaderboardScreen";
import { PieceGift } from "../Piece";
import { Dialog } from "./popup/Dialog";
import gsap from "gsap";
import { HistoryScreen } from "./HistoryScreen";
import { ConfigData, HistoryItemData } from "../services/Schema";
import { DataService } from "../services/DataService";
import { sfx } from "../services/Audio";
import { CLIENT_EVENTS, pixiEmitter } from "../services/EventEmitter";
import {  DefaultConfig } from "../services/const";
import { addSprite, addSpriteFillScreen, loadFont, loadImage } from "../ultils";


/** screen show up after loading */
export class HomeScreen extends Container implements ScreenContainer {

    private dataGift : {color: string, text: string, backColor: string, image: string}[]=[];
    private totalPieces = this.dataGift.length;
    private radius = 160;

    private mainContent = new Container();
    private wheelContainer = new Container();

    private isSpin: boolean = false;
    private speed: number = 10;
    private pieces: PieceGift[] = [];
    private targetAngles: number[] = [];
    private threshold: number = 1;
    private targetAngle: number = 0;
    private targetIndex: number = -1;

    private arrow = new Sprite();
    private lastStep = -1;

    private buttonGroup = new Container();

    private isBlock = false;
    private coinValue: Label = new Label();
    private lights: Graphics[] = [];
    private tl: any;

    private configData: ConfigData = DefaultConfig;
    private currencySprite : Texture = new Texture();
    constructor() {
        super();
        this.renderBackground();
        // add header bar: name, coin, settings
        this.mainContent.position.set(Manager.width / 2, Manager.height / 2);
        this.addChild(this.mainContent);
        this.addChild(this.buttonGroup);

        this.renderHeader();

        // add game logo
        this.setDataGifts();

        pixiEmitter.on(CLIENT_EVENTS.UPDATE_WHEEL, this.setDataGifts, this);
        this.renderDecor();
    }

    update(deltaTime: number): void {
        if (this.isSpin) {
            this.wheelContainer.rotation += 0.05 * deltaTime * this.speed;
            let radians = this.wheelContainer.rotation;
            let degrees = radians * (180 / Math.PI);

            if (this.wheelContainer.rotation > Math.PI * 2) {
                this.wheelContainer.rotation -= Math.PI * 2;
            } else if (this.wheelContainer.rotation < 0) {
                this.wheelContainer.rotation += Math.PI * 2;
            }

            const pieceAngle = (360 / this.totalPieces);
            const currentStep = Math.floor(degrees / pieceAngle);

            if (currentStep !== this.lastStep) {
                this.lastStep = currentStep;

                gsap.fromTo(this.arrow,
                    { rotation: -0.5 },
                    { rotation: 0, duration: 0.2, yoyo: true, repeat: 1, ease: "sine.inOut" }
                );
            }

            if (this.speed > 0.5) {
                this.speed -= 0.05 * deltaTime;
                if (this.speed < 6) {
                    this.activeBlur(false);
                }
            }
            else {
                this.speed = 0.5;
                const tolerance = this.threshold;
                const distance = Math.abs(degrees - this.targetAngle);
                if (distance < tolerance) {
                    this.isSpin = false;
                    this.showResult();
                    this.arrow.rotation = 0;
                    gsap.to(this.arrow,
                        { rotation: 0, duration: 0.08, ease: "sine.inOut" }
                    );
                }

            }
        }
    }

    onDestroy(): void {
        pixiEmitter.off(CLIENT_EVENTS.UPDATE_WHEEL, this.setDataGifts, this);
    }

    resize(): void {
    }

    blur() {
        this.filters = [new BlurFilter()]
    }

    focus() {
        this.filters = []
    }

    renderBackground() {
        const ss = new Graphics().roundRect(0, -25, Manager.width, 100, 15).fill("#FFFFFF");
        const shadow = new Graphics().roundRect(-2, -20, Manager.width + 5, 100, 15).fill("#000000");
        shadow.alpha = 0.8;
        shadow.filters = [new BlurFilter()];
        this.addChild(shadow);
        this.addChild(ss);
        
    }

    renderHeader() {
        // add user name
        let name = "Lovely Guest";
        //@ts-ignore
        const pData = globalThis.eventData;
        if (pData && pData.data && pData.data.data) {
            name = `Hi, ${pData.data.data.name}`;
        }

        const userName = new Label(name);
        userName.position.set(10, 30);
        userName.anchor.set(0);
        this.addChild(userName);

        // add coin section
        const coinSection = new Container();
        if(this.configData?.values.currencyImage){
            if(this.configData.values.currencyImage.source==='cdn'){
                loadImage(this.configData.values.currencyImage?.cdnLink||'').then((spr)=>{
                    this.currencySprite =  spr.texture;
                    addSprite(spr,30,30, coinSection);
                    this.renderButtonGroup();
                }).catch(()=>{
                    this.currencySprite =Texture.from("coin_icon")
                    addSprite(Sprite.from(this.currencySprite),30,30, coinSection);
                    this.renderButtonGroup();
                })
            }else{
                const coinIcon = Sprite.from(this.configData.values.currencyImage?.base64||"coin_icon");
                addSprite(coinIcon,30,30, coinSection);
                this.renderButtonGroup();
            }
        }else{
            const coinIcon = Sprite.from("coin_icon");
            addSprite(coinIcon,30,30, coinSection);
        }

        this.coinValue = new Label(`${DataService.Score}`);
        this.coinValue.anchor.set(0);
        this.coinValue.position.set(35, 5);

        coinSection.addChild(this.coinValue);
        coinSection.position.set(Manager.width - 150, 25)
        this.addChild(coinSection);

        // add setting section
        const settingBtn = new PrimaryButton({
            texture: "circle",
            icon: 'setting_icon',
            iconSize: 25,
            iconColor: 'grey',
            width: 48,
            onClick: () => { this.onOpenSetting(); }
        });
        settingBtn.width = 32;
        settingBtn.height = 32;
        settingBtn.position.set(Manager.width - 25, 40)
        this.addChild(settingBtn);

        const historyBtn = new PrimaryButton({
            texture: "blue_btn",
            icon: 'history',
            iconSize: 34,
            width: 46,
            onClick: () => { this.openHistory(); }
        });
        historyBtn.position.set(Manager.width- 35, Manager.height/2 - 170)
        this.addChild(historyBtn);


        // const configBtn = new PrimaryButton({
        //     texture: "blue_btn",
        //     icon: 'wheel',
        //     iconSize: 32,
        //     width: 42,
        //     onClick: () => { this.onOpenConfigSetting(); }
        // });
        // configBtn.position.set( 85, Manager.height/2-170)
        // this.addChild(configBtn);
    }

    animIdle() {
        this.tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
        this.lights.forEach((dot, index) => {
            this.tl.to(dot, {
                duration: 0.5,
                onStart: () => {
                    dot.clear()
                        .circle(0, 0, 5)
                        .fill(0xffffff)
                        .stroke({ width: 2, color: '#444444', alpha: 1, alignment: 0 })
                },
                onComplete: () => {
                    dot.clear()
                        .circle(0, 0, 5)
                        .fill(0x666666)
                        .stroke({ width: 2, color: '#444444', alpha: 1, alignment: 0 })
                }
            }, index * 0.05);
        });
    }

    stopIdle() {
        sfx.play('lucky_wheel')
        if (this.tl)
            this.tl.kill();
        this.lights.forEach((dot) => {
            dot.clear()
                .circle(0, 0, 5)
                .fill(0xffffff)
                .stroke({ width: 2, color: '#444444', alpha: 1, alignment: 0 })
        })
    }

    animHit() {
        this.lights.forEach((dot, i) => {
            gsap.to(dot, {
                duration: 0.2,
                delay: i * 0.05,
                onUpdate: () => {
                    dot.clear().circle(0, 0, 5).fill(0xffcc00).stroke({ width: 2, color: '#444444', alpha: 1, alignment: 0 });
                },
                onComplete: () => {
                    dot.clear().circle(0, 0, 5).fill(0xffcc00).stroke({ width: 2, color: '#444444', alpha: 1, alignment: 0 });
                }
            });
        });

        setTimeout(() => {
            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                    this.lights.forEach((dot) => {
                        let color = i % 2 == 0 ? 0xffcc00 : 0xffffff
                        gsap.to(dot, {
                            duration: 0.2,
                            onUpdate: () => {
                                dot.clear().circle(0, 0, 5).fill(color).stroke({ width: 2, color: '#444444', alpha: 1, alignment: 0 });
                            },
                            onComplete: () => {
                                dot.clear().circle(0, 0, 5).fill(color).stroke({ width: 2, color: '#444444', alpha: 1, alignment: 0 });
                            }
                        });
                    });
                }, (i + 1) * 250)
            }
        }, 1000)

    }

    setDataGifts() {
        const gifts = this.configData?.values.wheel;
        this.dataGift = [];
        if(gifts){
            this.totalPieces = gifts.segmentCount;
            for (let i = 0; i < this.totalPieces; i++) {
                const data = {
                    color :gifts.segmentColors[i],
                    text:gifts.segmentTexts[i],
                    backColor:gifts.segmentColors[i],
                    image:gifts.segmentImages[i]
                }
                this.dataGift.push(data);
            }
            this.renderWheel();
        }else{
            const content = new Label('Không có dữ liệu', new TextStyle({
                fill: '#ffffff',
                fontSize: 22,
                fontFamily: 'Archia Medium',
                wordWrap:true,
                wordWrapWidth:500,
                fontWeight:'bold',
                align:'center'
            }));
            content.position.set(Manager.width/2, Manager.height/2);
            content.anchor.set(0.5, 0.5);
            this.addChild(content);
        }
    }

    renderWheel() {
        this.wheelContainer.removeChildren().forEach(child => child.destroy());

        this.targetAngles = [];
        this.lights = [];
        this.mainContent.rotation = -Math.PI / 2 - ((1 / this.totalPieces) * (Math.PI * 2) / 2);
        this.mainContent.addChild(this.wheelContainer);

        const wheelBorder = new Graphics().circle(0, 0, this.radius).fill(0xdedede).stroke({ width: 20, color: '#008080', alpha: 1, alignment: 0 });
        wheelBorder.rotation += 0.625
        this.wheelContainer.addChild(wheelBorder);

        const smallCircleCount = 20;
        const smallCircleRadius = 5;
        const circleDistance = this.radius - smallCircleRadius + 15;

        for (let i = 0; i < smallCircleCount; i++) {
            const angle = (i / smallCircleCount) * Math.PI * 2;

            const x = Math.cos(angle) * circleDistance;
            const y = Math.sin(angle) * circleDistance;

            const dot = new Graphics()
                .circle(0, 0, smallCircleRadius)
                .fill(0x666666)
                .stroke({ width: 3, color: '#444444', alpha: 1, alignment: 0 })

            dot.position.set(x, y);
            wheelBorder.addChild(dot);
            this.lights.push(dot);
        }
        this.animIdle();

        for (let i = 0; i < this.totalPieces; i++) {

            const startAngle = (180 * 2) - (i / this.totalPieces) * (180 * 2);
            this.targetAngles.push(startAngle);

            const piece = new PieceGift(i, this.totalPieces, this.radius, this.dataGift[i]);
            this.wheelContainer.addChild(piece);
            this.pieces.push(piece);
        }
    }

    renderDecor() {

        const center = Sprite.from('circle');
        center.tint = 0xffcc00;
        center.width = 100;
        center.height = 100;
        center.anchor.set(0.5, 0.5);
        center.position.set(Manager.width / 2, Manager.height / 2);
        this.addChild(center);

        const logo = new Sprite();
        logo.width = 95;
        logo.height = 95;
        logo.anchor.set(0.5, 0.5);
        logo.position.set(Manager.width / 2, Manager.height / 2);
        this.addChild(logo);
        logo.on('pointerup', (e) => {
            this.spinWithCost();
        })
        logo.eventMode = 'static';
        if(this.configData?.values.logoImage){
            if(this.configData.values.logoImage.source==='cdn'){
                loadImage(this.configData.values.logoImage.cdnLink||'').then((spr)=>{
                    console.log(spr);
                    logo.texture = spr.texture;
                }).catch(()=>{
                    logo.texture = Texture.from('TAPTAP');
                })
            }else{
                logo.texture = Texture.from(this.configData.values.currencyImage?.base64||'TAPTAP');
            }
        }else{
             logo.texture = Texture.from('TAPTAP');
        }

        this.arrow = Sprite.from('arrow');
        this.arrow.anchor.set(0.5, 0.35);
        this.arrow.scale.set(0.5, 0.5);
        this.arrow.position.set(Manager.width / 2, Manager.height / 2 - this.radius - 25);
        this.addChild(this.arrow);
    }

    updateScore() {
        this.coinValue.text = `${DataService.Score}`;
    }

    spinWithCost() {
        if (this.isBlock) return;
        if (DataService.Score >= DataService.Cost) {
            DataService.Score -= DataService.Cost;
            this.renderButtonGroup();
            this.updateScore();
            this.speed = 10;
            this.isSpin = true;
            this.isBlock = true;
            this.activeBlur(true);
            const randomGiftIndex = Math.floor(Math.random() * this.totalPieces);
            this.targetAngle = this.targetAngles[randomGiftIndex];
            this.targetIndex = randomGiftIndex;

            this.stopIdle();
        }
    }

    spin() {
        if (this.isBlock || !DataService.IsFree) return;
        this.isSpin = true;
        this.isBlock = true;
        DataService.IsFree = false;
        this.renderButtonGroup();
        this.stopIdle();
        this.speed = 10;
        this.activeBlur(true);
        const randomGiftIndex = Math.floor(Math.random() * this.totalPieces);
        this.targetAngle = this.targetAngles[randomGiftIndex];
        this.targetIndex = randomGiftIndex;
    }

    resetWheel() {
        this.arrow.rotation = 0;
        this.wheelContainer.rotation = 0;
        this.animIdle();
        this.pieces.forEach(e => {
            e.resetColor();
        })
        this.lastStep = -1;
    }

    activeBlur(blur: boolean) {
        this.pieces.forEach(e => {
            e.blurIcon(blur);
        })
    }

    showResult() {
        sfx.play('wao');
        this.animHit()
        gsap.killTweensOf(this.arrow);
        const item: HistoryItemData = {
            value: this.dataGift[this.targetIndex].text,
            getTime: new Date().getTime()
        }

        DataService.History.push(item);

        setTimeout(() => {
            this.pieces.forEach(e => {
                if (e.Index !== this.targetIndex) {
                    e.setColorResult();
                }
            })
        }, 500)

        setTimeout(() => {
            sfx.play('win');
            this.isBlock = false;
            Manager.popModal(new Dialog({
                width: Manager.width * .9,
                height: 250,
                title: "CHÚC MỪNG BẠN",
                description: `Bạn vừa quay\ntrúng ô ${this.dataGift[this.targetIndex].text}`,
                buttonText: "OK",
                onClick: () => {
                    Manager.closeCurrentPopup();
                    this.resetWheel();
                },
                noCloseButton: true
            }))
        }, 3000)
    }

    renderButtonGroup() {
        // Xóa hết các nút cũ
        this.buttonGroup.children.forEach(e => {
            e.destroy();
            e.removeFromParent();
        });
    
        const grayscale = new ColorMatrixFilter();
        grayscale.greyscale(0.25, true);
    
        const applyButtonState = (btn: PrimaryButton) => {
            if (DataService.Score < DataService.Cost) {
                btn.filters = [grayscale];
                btn.interactive = false;
            }
            btn.position.set(Manager.width / 2, Manager.height - 100);
            this.buttonGroup.addChild(btn);
        };
    
        const createSpinButton = (texture: Texture) => {
            return new PrimaryButton({
                width: 150,
                height: 65,
                texture: 'yellow_button',
                url: texture,
                text: this.configData?.values.spinButton?.text || "Quay",
                icon: 'coin_icon',
                iconUrl: this.currencySprite,
                iconSize: 32,
                textStyle: {
                    fontSize: 20,
                    fill: this.configData?.values.spinButton?.textColor || '#FFFFFF',
                    fontWeight: 'bold',
                    stroke: { color: '#000000', width: 3, join: 'round' },
                },
                onClick: () => { this.spinWithCost() }
            });
        };
    
        const { backgroundImage } = this.configData.values.spinButton;
    
        if (backgroundImage?.source && backgroundImage.source.length) {
            if (backgroundImage.source === 'cdn') {
                const cdnUrl = backgroundImage.cdnLink || '';
                loadImage(cdnUrl).then((spr) => {
                    const btn = createSpinButton(spr.texture);
                    applyButtonState(btn);
                }).catch(() => {
                    console.error("Error: button texture doesn't exist!");
                    const fallbackTexture = Texture.from('yellow_button');
                    const btn = createSpinButton(fallbackTexture);
                    applyButtonState(btn);
                });
            } else {
                const base64Texture = Texture.from(backgroundImage?.base64 || 'yellow_button');
                const btn = createSpinButton(base64Texture);
                applyButtonState(btn);
            }
        } else {
            const defaultTexture = Texture.from('yellow_button');
            const btn = createSpinButton(defaultTexture);
            applyButtonState(btn);
        }
    }
    

    private renderBlurEffect() {

    }

    // events
    onStartPlay() {
        Manager.changeScreen(new GameScreen());
    }

    onOpenLeaderboardScreen() {
        Manager.changeScreen(new LeaderboardScreen());
    }

    onOpenSetting() {
        if (this.isBlock) return;
        Manager.toggleSetting(true);
    }

    onOpenConfigSetting() {
        if (this.isBlock) return;
        Manager.toggleSetConfig(true);
    }

    openHistory() {
        if (this.isBlock) return;
        Manager.changeScreen(new HistoryScreen());
    }
}

