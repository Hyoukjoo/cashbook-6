import EasyDraw from "../../lib/EasyDraw.js";

interface history {
    price,
    color
}

export default class Canvas {
  $canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  drawer: EasyDraw;

  stageWidth: number;
    stageHeight: number;
    innerRadius: number;
    outterRadius: number;
    
    historyList: Array<history>;
    colorList: Array<string>;
    
  constructor() {
    this.$canvas = document.createElement("canvas");
    this.ctx = this.$canvas.getContext("2d");
      
      this.resize();
      
      this.innerRadius = 40;
      this.outterRadius = 60;

      this.historyList = [
          { price: 300000, color: "#4A6CC3" },
          { price: 200000, color : "#6ED5EB"},
          { price: 100000, color : "#4CB8B8"},
          { price: 50000, color: "#94D3CC" },
          { price: 20000, color : "#4A6CC3"},
      ];

      this.colorList = ["#4A6CC3", "#6ED5EB", "#4CB8B8", "#94D3CC", "#4A6CC3", "#6ED5EB"];

      this.drawer = new EasyDraw({ ctx: this.ctx, initAngle: 0 });
    this.drawDonut();
  }

    drawDonut() {
        let total = 0;
        for (const item of this.historyList) {
            total += item.price;
        }

        let curAngle = 0;
        
        for (const item of this.historyList) {
            this.ctx.fillStyle = item.color;
            const ratio = item.price / total;
            const angle = ratio * 360;
            this.drawDonutPiece(this.tmp(curAngle - 90), this.tmp(curAngle + angle - 90));
            curAngle += angle;
        }
    }

    tmp(angle) {
        if (angle < 0) {
            angle += 360;
        }
        return angle;
    }

    drawDonutPiece(startAngle, endAngle) {
        this.drawer.moveTo(this.stageWidth / 2, this.stageHeight / 2);
        this.ctx.beginPath();
        this.drawer.arc(this.stageWidth / 2, this.stageHeight / 2, this.outterRadius, startAngle, endAngle);
        this.drawer.lineForward(this.outterRadius - this.innerRadius);
        this.drawer.arc(this.stageWidth / 2, this.stageHeight / 2, this.innerRadius, endAngle, startAngle, true);
        this.drawer.lineForward(this.outterRadius - this.innerRadius);
      
        this.ctx.fill();
    }

  resize() {
    this.stageWidth = 130;
    this.stageHeight = 130;

    this.$canvas.width = this.stageWidth * 2;
    this.$canvas.height = this.stageHeight * 2;

    this.ctx.scale(2, 2);
  }
}