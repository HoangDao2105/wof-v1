import { BlurFilter, Container, Graphics, Sprite, TextStyle } from "pixi.js";
import { Manager, ScreenContainer } from "../Manager";
import { Label } from "../components/shared/Label";
import { PrimaryButton } from "../components/shared/PrimaryButton";
import { HomeScreen } from "./HomeScreen";
import { ScrollBox } from "@pixi/ui";
import { HistoryItem } from "../HistoryItem";
import { DataService } from "../services/DataService";
import gsap from "gsap";
import { ConfigData } from "../services/Schema";
import { DefaultConfig } from "../services/const";
import { addSpriteFillScreen, loadImage } from "../ultils";

export class HistoryScreen extends Container implements ScreenContainer {

    private configData: ConfigData = DefaultConfig;

    constructor() {
        super();
        this.renderBackground();
        this.renderHeader();
        this.addHistoryList();
    }

    update(deltaTime: number): void {
    }

    resize(): void {
    }

    renderBackground() {
        const ss = new Graphics().roundRect(0, -25, Manager.width, 125, 15).fill("#FFFFFF");
        const shadow = new Graphics().roundRect(-2, -20, Manager.width + 5, 125, 15).fill("#000000");
        shadow.alpha = 0.8;
        shadow.filters = [new BlurFilter()];
        this.addChild(shadow);
        this.addChild(ss);
    }

    addHistoryList() {
        let items = [];
        if (DataService.History && DataService.History.length) {
            const history = DataService.History.reverse();
            for (let i = 0; i < history.length; i++) {
                const item = new HistoryItem(history[i]);
                items.push(item);
            }
        } else {
            const emptyLabel = new Label('Lịch sử rỗng.\nBạn hãy quay vòng quay để nhận phần thưởng nhé', new TextStyle({
                align: 'center',
                fontSize: 18,
                fontFamily: 'Archia Medium',
                fill: '#000000',
                wordWrap: true,
                wordWrapWidth: 300
            }))
            emptyLabel.position.set(Manager.width / 2, Manager.height / 2);
            this.addChild(emptyLabel);
        }
        const startY = 125;
        const defaultY = 150;
        const list = new ScrollBox({
            width: Manager.width,
            height: Manager.height - startY,
            elementsMargin: 10,
            bottomPadding: 10,
            items
        })
        list.position.set(0, defaultY);
        this.addChild(list);
        list.alpha = 0;
        gsap.to(list, {
            alpha: 1,
            y: startY,
            duration: 0.5,
            ease: 'sine.inOut',
        });
    }

    renderHeader() {
        // add back button
        const backBtn = new PrimaryButton({
            texture: "back_button",
            width: 24,
            onClick: () => { Manager.changeScreen(new HomeScreen()); }
        })
        backBtn.tint = 0x000000;
        backBtn.position.set(30, 50);
        this.addChild(backBtn);

        const title = new Label('Lịch sử vòng quay', new TextStyle({
            fontSize: 20,
            fill: 0x000000,
            fontWeight: 'bold',
            fontFamily: 'Archia Medium',

            align: 'center'
        }))
        title.anchor.set(0.5, 0.5);
        title.position.set(Manager.width / 2, 50)
        this.addChild(title);
    }
}
