import Canvas from "./index";

interface history {
  price,
  color
}

export default class DonutChart extends Canvas {
  innerRadius: number;
  outterRadius: number;
    
  historyList: Array<history>;
    
  constructor(stageWidth, stageHeight) {
    super(stageWidth, stageHeight);
      
    this.innerRadius = 40;
    this.outterRadius = 60;

    this.historyList = [
        { price: 300000, color: "#4A6CC3" },
        { price: 200000, color : "#6ED5EB"},
        { price: 100000, color : "#4CB8B8"},
        { price: 50000, color: "#94D3CC" },
        { price: 20000, color : "#4A6CC3"},
    ];

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
        this.drawDonutPiece(this.angleNormalize(curAngle - 90), this.angleNormalize(curAngle + angle - 90));
        curAngle += angle;
    }
  }

  angleNormalize(angle) {
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
}