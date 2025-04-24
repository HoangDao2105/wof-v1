import { Container, Graphics, Sprite, TextStyle } from "pixi.js";
import { HistoryItemData } from "./services/Schema";
import { Manager } from "./Manager";
import { Label } from "./components/shared/Label";

export class HistoryItem extends Container {

    private image = new Sprite();
    private nameGift = new Label();
    private dateGift = new Label();

    private data: HistoryItemData;

    constructor(data: HistoryItemData) {
        super();
        this.data = data;

        let frame = new Graphics().roundRect(12, 0, Manager.width * 0.95, 80, 15).fill('#FFFFFF');
        let shadow = new Graphics().roundRect(12, 10, Manager.width * 0.95, 80, 15).fill('#D3D3D3');
        this.addChild(shadow);
        this.addChild(frame);

        if (data.imageUrl && data.imageUrl) {
            this.image = Sprite.from(data.imageUrl);
            this.image.width = 32;
            this.image.height = 32;
        } else {
            this.image = Sprite.from('gift');
            this.image.width = 32;
            this.image.height = 32;
        }
        this.image.anchor.set(0.5, 0.5);
        this.image.position.set(50, 35);
        this.addChild(this.image);

        this.nameGift = new Label(`Bạn đã nhận được ${data?.value || ''}`, new TextStyle({
            align: 'left',
            fontFamily: 'Archia Medium',
            fontSize: 16,
            fontWeight: 'bold'
        }));
        this.nameGift.anchor.set(0, 0.5);
        this.nameGift.position.set(80, 25);
        this.addChild(this.nameGift);

        this.dateGift = new Label(`${this.formatTimestamp(data.getTime)}`, new TextStyle({
            align: 'left',
            fontFamily: 'Archia Medium',
            fontSize: 14,
        }));
        this.dateGift.anchor.set(0, 0.5);
        this.dateGift.position.set(80, 50);
        this.addChild(this.dateGift);

    }

    formatTimestamp(timestamp: number): string {
        const date = new Date(timestamp);

        const dd = String(date.getDate()).padStart(2, '0');
        const mm = String(date.getMonth() + 1).padStart(2, '0'); // tháng từ 0
        const yyyy = date.getFullYear();

        const hh = String(date.getHours()).padStart(2, '0');
        const min = String(date.getMinutes()).padStart(2, '0');

        return `${dd}/${mm}/${yyyy} ${hh}:${min}`;
    }

}