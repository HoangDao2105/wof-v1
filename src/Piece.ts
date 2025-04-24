import gsap from "gsap";
import { Graphics, Container, Text, TextStyle, BlurFilter, Sprite, Assets } from "pixi.js";
import { loadImage } from "./ultils";

export class PieceGift extends Container {
    private pieceGraphics: Graphics;
    private text: Text;
    private img: Sprite = new Sprite();
    private index: number = -1;
    private totalPieces: number = -1;
    private radius: number = -1;
    private data: {color: string, text: string, backColor: string, image: string};
    public get Index(): number { return this.index }

    constructor(index: number, totalPieces: number, radius: number, data: {color: string, text: string, backColor: string, image: string}) {
        super();
        this.data=data;
        this.index = index;
        this.totalPieces = totalPieces;
        this.radius = radius;

        const paddingAngle = Math.PI / 180 ;
        const startAngle = (index / totalPieces) * Math.PI * 2 + paddingAngle;
        const endAngle = ((index + 1) / totalPieces) * Math.PI * 2 - paddingAngle;


        this.pieceGraphics = new Graphics()
        this.pieceGraphics.moveTo(0, 0);
        this.pieceGraphics.lineTo(Math.cos(startAngle) * radius, Math.sin(startAngle) * radius);
        this.pieceGraphics.arc(0, 0, radius, startAngle, endAngle);
        this.pieceGraphics.moveTo(0, 0);
        this.pieceGraphics.lineTo(Math.cos(endAngle) * radius, Math.sin(endAngle) * radius);
        this.pieceGraphics.fill(data.backColor)

        this.addChild(this.pieceGraphics);

        this.text = new Text(data.text, new TextStyle({
            fontSize: 15,
            fill: 0xffffff,
            align: "center",
            wordWrap:true,
            wordWrapWidth:100

        }));

        this.text.anchor.set(0.5);

        const middleAngle = (startAngle + endAngle) / 2;
        const textRadius = data.image && data.image.length? radius * 4/5 : radius * 3/4;
        const imgRadius = radius /2;
        const textX = Math.cos(middleAngle) * textRadius;
        const textY = Math.sin(middleAngle) * textRadius;
        const textAngle = startAngle + (Math.PI / totalPieces);
        this.text.x = textX;
        this.text.y = textY;
        this.text.rotation = textAngle + Math.PI / 2;

        this.addChild(this.text);

        if(data.image && data.image.length){
            loadImage(data.image).then((s)=>{
                this.img=s;
                this.img.anchor.set(0.5);
                this.img.width=32;
                this.img.height=32;
                const imgX = Math.cos(middleAngle) * imgRadius;
                const imgY = Math.sin(middleAngle) * imgRadius;
                this.img.x = imgX;
                this.img.y = imgY;
                this.img.rotation = textAngle + Math.PI / 2;
    
                this.addChild(this.img); 
            }).catch(()=>{

            });
        }
    }

    blurIcon(isBlur: boolean) {
        if (isBlur)
            this.text.filters = [new BlurFilter()];
        else
            this.text.filters = [];
    }

    resetColor() {
        this.pieceGraphics.clear();
        const paddingAngle = Math.PI / 180;
        const startAngle = (this.index / this.totalPieces) * Math.PI * 2 + paddingAngle;
        const endAngle = ((this.index + 1) / this.totalPieces) * Math.PI * 2 - paddingAngle;
        this.pieceGraphics.moveTo(0, 0);
        this.pieceGraphics.lineTo(Math.cos(startAngle) * this.radius, Math.sin(startAngle) * this.radius);
        this.pieceGraphics.arc(0, 0, this.radius, startAngle, endAngle);
        this.pieceGraphics.moveTo(0, 0);
        this.pieceGraphics.lineTo(Math.cos(endAngle) * this.radius, Math.sin(endAngle) * this.radius);
        this.pieceGraphics.fill({ color: this.data.backColor, alpha: 1 });
        this.text.alpha = 1;
    }

    setColorResult() {
        const fillColor = { r: 255, g: 255, b: 255 };

        gsap.to(fillColor, {
            r: 0,
            g: 0,
            b: 0,
            duration: 1.5,
            ease: "power2.out",
            onUpdate: () => {
                const color =
                    (Math.round(fillColor.r) << 16) |
                    (Math.round(fillColor.g) << 8) |
                    Math.round(fillColor.b);

                this.pieceGraphics.clear();
                const paddingAngle = Math.PI / 180;
                const startAngle = (this.index / this.totalPieces) * Math.PI * 2 + paddingAngle;
                const endAngle = ((this.index + 1) / this.totalPieces) * Math.PI * 2 - paddingAngle;
                this.pieceGraphics.moveTo(0, 0);
                this.pieceGraphics.lineTo(Math.cos(startAngle) * this.radius, Math.sin(startAngle) * this.radius);
                this.pieceGraphics.arc(0, 0, this.radius, startAngle, endAngle);
                this.pieceGraphics.moveTo(0, 0);
                this.pieceGraphics.lineTo(Math.cos(endAngle) * this.radius, Math.sin(endAngle) * this.radius);
                this.pieceGraphics.fill({ color, alpha: 0.8 });
            }
        });



        gsap.to(this.text, {
            alpha: 0.5,
            duration: 1,
            ease: "power2.out"
        });
    }
}
