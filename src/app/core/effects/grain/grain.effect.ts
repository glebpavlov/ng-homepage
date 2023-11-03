import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, NgZone } from '@angular/core';

import { WINDOW } from '../../tokens';

@Injectable()
export class Grain {
  private status: string = 'stop';

  private ctx!: CanvasRenderingContext2D;
  private patternCanvas!: HTMLCanvasElement;
  private patternCtx!: CanvasRenderingContext2D;
  private patternData!: ImageData;
  private patternPixelDataLength!: number;
  private frame!: number;
  private canvas!: HTMLCanvasElement;

  /**
   * Options
   * Increase the pattern size if visible pattern
   */
  private patternSize = 800;
  private patternScaleX = 26;
  private patternScaleY = 26;
  private patternRefreshInterval = 8; // 8
  private patternAlpha = 255; // int between 0 and 255,

  constructor(
    private zone: NgZone,
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window
  ) {}

  setTarget(canvasEl: HTMLCanvasElement) {
    this._(() => (this.canvas = canvasEl));
    this._(() => (this.ctx = this.canvas?.getContext('2d') as CanvasRenderingContext2D));
  }

  start() {
    this._(() => {
      this.status = 'run';

      /**
       * Create canvas
       */
      this.ctx?.scale(this.patternScaleX, this.patternScaleY);
      this.patternCanvas = this.document?.createElement('canvas');
      this.patternCanvas.width = this.patternSize;
      this.patternCanvas.height = this.patternSize;
      this.patternCtx = this.patternCanvas.getContext('2d') as CanvasRenderingContext2D;
      this.patternData = this.patternCtx?.createImageData(
        this.patternSize,
        this.patternSize
      );
      this.patternPixelDataLength = this.patternSize * this.patternSize * 4; // rgba = 4

      this.frame = 0;

      this.window?.addEventListener('resize', this.resize.bind(this));
      this.resize();

      this.window?.requestAnimationFrame(this.loop.bind(this));
    });
  }

  stop() {
    this._(() => {
      this.status = 'stop';
      this.ctx?.clearRect(0, 0, this.canvas.width, this.canvas?.height);
    });
  }

  private resize() {
    this._(() => {
      this.canvas.width = this.window.innerWidth * devicePixelRatio;
      this.canvas.height = this.window.innerHeight * devicePixelRatio;
    });
  }

  private update() {
    this._(() => {
      const { patternPixelDataLength, patternData, patternAlpha, patternCtx } = this;

      // put a random shade of gray into every pixel of the pattern
      for (let i = 0; i < patternPixelDataLength; i += 4) {
        // const value = (Math.random() * 255) | 0;
        const value = Math.random() * 255;

        patternData.data[i] = value;
        patternData.data[i + 1] = value;
        patternData.data[i + 2] = value;
        patternData.data[i + 3] = patternAlpha;
      }

      patternCtx.putImageData(patternData, 0, 0);
    });
  }

  private draw() {
    this._(() => {
      const { ctx, patternCanvas, canvas } = this;
      const { width, height } = canvas;

      // clear canvas
      ctx.clearRect(0, 0, width, height);

      // fill the canvas using the pattern
      ctx.fillStyle = ctx.createPattern(patternCanvas, 'repeat') as CanvasPattern;
      ctx.fillRect(0, 0, width, height);
    });
  }

  private loop() {
    this._(() => {
      // only update grain every n frames
      const shouldDraw = ++this.frame % this.patternRefreshInterval === 0;
      if (shouldDraw) {
        this.update();
        this.draw();
      }

      if (this.status === 'run') {
        this.window?.requestAnimationFrame(this.loop.bind(this));
      }
    });
  }

  private _(handler: Function, ...args: any[]) {
    return this.zone.runOutsideAngular(handler.bind(this, ...args) as any);
  }
}
