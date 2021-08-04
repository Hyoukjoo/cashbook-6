import EasyDraw from "../../lib/EasyDraw.js";
export default class Canvas {
  $canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  drawer: EasyDraw;

  stageWidth: number;
  stageHeight: number;
    
  constructor(stageWidth, stageHeight) {
    this.$canvas = document.createElement("canvas");
    this.ctx = this.$canvas.getContext("2d");
      
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;
      
    this.resize();

    this.drawer = new EasyDraw({ ctx: this.ctx, initAngle: 0 });
  }

  resize() {
    this.$canvas.width = this.stageWidth * 2;
    this.$canvas.height = this.stageHeight * 2;

    this.ctx.scale(2, 2);
  }
}