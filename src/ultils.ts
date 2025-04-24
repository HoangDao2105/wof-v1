import { Assets, Container, Sprite } from "pixi.js";
import { Manager } from "./Manager";
import FontFaceObserver from "fontfaceobserver";

  export async function loadImage(url: string): Promise<Sprite> {
        const texture = await Assets.load(url);
        const sprite = new Sprite(texture);
        return sprite;
  }
  export function addSprite(spr: Sprite, width: number, height: number, parent: Container){
        spr.width = width; 
        spr.height = height;
        parent.addChild(spr);
  }

  export function addSpriteFillScreen(spr: Sprite, parent: Container){        
        const textureWidth = spr.texture.width;
        const textureHeight = spr.texture.height;

        const scale = Math.max(
            Manager.width / textureWidth,
            Manager.height / textureHeight
        );

        spr.scale.set(scale);
        spr.anchor.set(0.5, 0.5)
        spr.x = (Manager.width) / 2;
        spr.y = (Manager.height) / 2;

        parent.addChild(spr);
  }


  export function loadFont(fontName:string) {
      const formattedName = fontName.replace(/ /g, '+');
      const url = `https://fonts.googleapis.com/css2?family=${formattedName}&display=swap`;
      const link = document.createElement('link');
      link.href = url;
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    
      const observer = new FontFaceObserver(fontName);
      return observer.load();
    }
    