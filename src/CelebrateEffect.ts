import { Container, ParticleContainer, Texture, IParticle, Rectangle, Ticker, Graphics } from "pixi.js";
import { Manager } from "./Manager";

interface ParticleData {
    particle: IParticle;
    vx: number;
    vy: number;
    alpha: number;
    active: boolean;
}

export class CelebrateSystem extends Container {
    private particleContainer: ParticleContainer;
    private particlesData: ParticleData[] = [];
    private isExploding: boolean = false;
    private texture: Texture;
    private maxParticles: number = 30;
    private ticker: Ticker = new Ticker();

    constructor() {
        super();
        this.particleContainer = new ParticleContainer();
        this.particleContainer.boundsArea = new Rectangle(0, 0, Manager.width, Manager.height);

        this.texture = Texture.from('star');
        this.addChild(this.particleContainer);

        for (let i = 0; i < this.maxParticles; i++) {
            const particle: IParticle = {
                texture: this.texture,
                x: 0,
                y: 0,
                scaleX: 1,
                scaleY: 1,
                rotation: 0,
                anchorX: 0.5,
                anchorY: 0.5,
                color: 0xffffff
            };

            this.particlesData.push({
                particle,
                vx: 0,
                vy: 0,
                alpha: 1,
                active: false,
            });
        }
        this.ticker = Ticker.shared;
        Ticker.shared.add(this.update, this);
    }


    public triggerExplosion(x: number, y: number) {
        if (this.isExploding) return;

        this.isExploding = true;
        this.visible = true;

        this.x = x;
        this.y = y;
        this.activateParticles();

        setTimeout(() => {
            this.cleanup();
        }, 500);
    }

    /** Kích hoạt particles */
    private activateParticles() {
        for (let i = 0; i < this.particlesData.length; i++) {
            const data = this.particlesData[i];
            data.particle.x = 0;
            data.particle.y = 0;
            data.particle.scaleX = data.particle.scaleY = 0.2;
            data.particle.rotation = Math.random() * Math.PI * 2;
            data.vx = (Math.random() - 0.5) * 8;
            data.vy = (Math.random() - 0.5) * 8;
            data.alpha = 3;
            data.active = true;

            this.particleContainer.addParticle(data.particle);
        }
    }

    /** Cập nhật particles */
    public update(delta: Ticker) {

        if (!this.isExploding) return;

        let activeParticles = 0;

        for (let i = 0; i < this.particlesData.length; i++) {
            const data = this.particlesData[i];

            if (!data.active) continue;

            data.particle.x += data.vx * delta.deltaTime;
            data.particle.y += data.vy * delta.deltaTime;
            data.alpha -= 0.01 * delta.deltaTime;

            if (data.alpha <= 0) {
                data.active = false;
            } else {
                activeParticles++;
            }
        }

        if (activeParticles === 0) {
            this.cleanup();
        }
    }


    private cleanup() {
        this.isExploding = false;
        this.visible = false;
        this.particlesData.forEach((p) => (p.active = false));
        this.particleContainer.removeParticles();
    }

    remove() {
        if (this.particleContainer instanceof ParticleContainer) {
            this.particleContainer.removeParticles();
        }
        this.ticker.remove(this.update, this);
        this.ticker.destroy();
    }
}
