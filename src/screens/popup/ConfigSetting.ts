import { ColorGradientFilter, DropShadowFilter, OutlineFilter } from "pixi-filters";
import { checkDataUrl, Container, Graphics, Point, Sprite, Text, TextStyle } from "pixi.js";
import { Manager, ScreenContainer } from "../../Manager";
import { CheckBox } from "@pixi/ui";
import gsap from "gsap";
import { bgm, sfx } from "../../services/Audio";
import { PrimaryButton } from "../../components/shared/PrimaryButton";
import { Label } from "../../components/shared/Label";
import { DataService } from "../../services/DataService";
import { CLIENT_EVENTS, pixiEmitter } from "../../services/EventEmitter";
export class ConfigSetting extends Container implements ScreenContainer {

    private currentPieceLabel: Label;

    constructor() {
        super();
        const minHeight = 120;
        let width = Manager.width * .9,
            height = Manager.height * .25 > minHeight ? Manager.height * .25 : minHeight, title = "Nhập số ô vòng quay";
        const bg = new Graphics().roundRect(0, 0, width, height, 30).fill("orange");
        bg.filters = [
            new ColorGradientFilter({
                type: 0,
                angle: 0,
                stops: [
                    {
                        color: "#E6C539",
                        alpha: 1,
                        offset: 1,
                    },
                    {
                        color: "#FFB725",
                        alpha: 1,
                        offset: .8,
                    },
                    {
                        color: "#F02C2C",
                        alpha: 1,
                        offset: 0,
                    },
                ]
            }),
            new OutlineFilter({
                color: "white",
                thickness: 4
            }),
        ]
        bg.position.set((Manager.width - width) / 2, 0)
        this.addChild(bg);

        const _title = new Text({
            text: title,
            style: {
                fontFamily: "Archia Medium",
                fontSize: 22,
                fill: 'black',
            }
        });
        const content = new Graphics().roundRect(
            0, 0,
            width * .9,
            height * 0.8).fill("#FFF0DD");
        content.position.set(bg.position.x + 20, 20)
        this.addChild(content);

        _title.anchor.set(0.5, 0.5);
        _title.position.set(Manager.width / 2, 50);
        this.addChild(_title)

        const plusBtn = new PrimaryButton({
            texture: "blue_tap_btn",
            width: 42,
            height: 42,
            text: '+',
            textStyle: {
                fontFamily: 'Archia Medium',
                fontSize: 32,
                fill: 'white',
                align: 'justify',
                fontWeight: 'bold'
            },
            onClick: () => { this.onPlusClick(); }
        });
        plusBtn.position.set(Manager.width / 2 + 50, 125)
        this.addChild(plusBtn);

        const maxBtn = new PrimaryButton({
            texture: "blue_tap_btn",
            width: 42,
            height: 42,
            text: 'MAX',
            textStyle: {
                fontFamily: 'Archia Medium',
                fontSize: 14,
                fill: 'white',
                align: 'justify',
                fontWeight: 'bold'
            },
            onClick: () => { this.onMaxClick(); }
        });
        maxBtn.position.set(Manager.width / 2 + 100, 125)
        this.addChild(maxBtn)

        const minusBtn = new PrimaryButton({
            texture: "blue_tap_btn",
            width: 42,
            height: 42,
            text: '-',
            textStyle: {
                fontFamily: 'Archia Medium',
                fontSize: 32,
                fill: 'white',
                align: 'justify',
                fontWeight: 'bold'
            },
            onClick: () => { this.onMinusClick(); }
        });
        minusBtn.position.set(Manager.width / 2 - 50, 125)
        this.addChild(minusBtn);

        this.currentPieceLabel = new Label(DataService.PieceCount, new TextStyle({
            fontFamily: 'Archia Medium',
            fontSize: 20,
            fill: 'black',
            fontWeight: 'bold',
            align: 'justify'
        }))

        this.currentPieceLabel.position.set(Manager.width / 2, 125);
        this.addChild(this.currentPieceLabel);

        const minBtn = new PrimaryButton({
            texture: "blue_tap_btn",
            width: 42,
            height: 42,
            text: 'MIN',
            textStyle: {
                fontFamily: 'Archia Medium',
                fontSize: 14,
                fill: 'white',
                align: 'justify',
                fontWeight: 'bold'
            },
            onClick: () => { this.onMinClick(); }
        });
        minBtn.position.set(Manager.width / 2 - 100, 125)
        this.addChild(minBtn)


        const _closeButton = Sprite.from("close_modal");
        _closeButton.tint = '#444444';
        _closeButton.anchor.set(.5);
        _closeButton.width = 60; _closeButton.height = 60;
        _closeButton.position.set(bg.position.x + bg.width / 2, bg.position.y + bg.height + 60);
        _closeButton.on('pointerup', (e) => {
            Manager.toggleSetConfig(false);
            pixiEmitter.emit(CLIENT_EVENTS.UPDATE_WHEEL);
        })
        _closeButton.eventMode = 'static';
        this.addChild(_closeButton);

        gsap.to(this.position, { x: 0, y: Manager.height / 4, ease: "bounce" });
    }

    onMinClick() {
        DataService.PieceCount = 2;
        this.currentPieceLabel.text = `${DataService.PieceCount}`;
    }

    onMaxClick() {
        DataService.PieceCount = 15;
        this.currentPieceLabel.text = `${DataService.PieceCount}`;
    }

    onPlusClick() {
        let value = DataService.PieceCount + 1;
        value = Math.min(15, value);
        DataService.PieceCount = value;
        this.currentPieceLabel.text = `${DataService.PieceCount}`;
    }

    onMinusClick() {
        let value = DataService.PieceCount - 1;
        value = Math.max(2, value);
        DataService.PieceCount = value;
        this.currentPieceLabel.text = `${DataService.PieceCount}`;
    }

    update(deltaTime: number): void {
    }

    resize(): void {
    }
    focus?(): void {
    }
    blur?(): void {
    }
    pause?(): void {
    }
}