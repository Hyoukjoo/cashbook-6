import Canvas from "./index";

export default class LineChart extends Canvas{
  categoryOutcomeList: Object;
    
avgOutcome: number;
maxOutcome: number;
    minOutcome: number;
    
    bottomValue: number;
    topValue: number;

    startX: number;
    startY: number;
    endX: number;
    endY: number;
    lenX: number;

  constructor(stageWidth, stageHeight) {
    super(stageWidth, stageHeight);
    
    this.categoryOutcomeList = { 1: 616929, 2: 509637, 3: 563283, 4: 590106, 5: 0, 6: 568647, 7: 536460, 8: 100000, 9: 20000, 10: 40000, 11: 41240, 12: 1000000};
    this.avgOutcome = this.getAvarage();
    const maxmin = this.getMaxMin();
    this.maxOutcome = maxmin.max;
    this.minOutcome = maxmin.min;
      
      this.startX = 20;
      this.startY = 5;
      this.endX = stageWidth;
      this.endY = stageHeight - 15;

      this.lenX = (this.endX - this.startX) / 12;
      
    this.bottomValue = Math.min(this.avgOutcome * 0.3, this.minOutcome);
      this.topValue = Math.max(this.avgOutcome * 2, this.maxOutcome);
      
    this.drawLineChart();
  }
    
  drawBackground() {

  }
    
  value2pos(value) {
      if (value <= this.bottomValue) {
          return this.endY;
      }
      if (value >= this.topValue) {
           return this.startY;
      }

      return this.endY - value * (this.endY - this.startY) / (this.topValue - this.bottomValue);
  }
    
  getMaxMin() {
    const outComeList : Array<number> = Object.values(this.categoryOutcomeList);
    const max = Math.max(...outComeList);
    const min = Math.min(...outComeList);
    return { max, min };
  }
    
  getAvarage() {
    let total = 0;
    for (const month in this.categoryOutcomeList) {
        const outcome = this.categoryOutcomeList[month];
        total += outcome;
    }
    return total / Object.keys(this.categoryOutcomeList).length;
  }
    
    drawLineChart() {
        this.ctx.fillStyle = "#2AC1BC";
        this.ctx.strokeStyle = "#2AC1BC";
        this.ctx.font = 'bold 5pt sans-serif';

        const month1 = this.categoryOutcomeList[1];
        const initPos = this.getMonthPos(month1);

        this.drawer.moveTo(initPos.x, initPos.y);
        this.ctx.beginPath();
    
        const monthList = Object.keys(this.categoryOutcomeList).map((month) => parseInt(month)).sort((a, b) => a - b);
        for (let month of monthList) {
            const pos = this.getMonthPos(month);
            this.drawer.moveTo(pos.x, pos.y + 10);
            this.drawer.drawCircle(2);
        }

        this.ctx.fill();
        
        this.ctx.beginPath();
        this.ctx.fillStyle = "#626666";

        for (let month of monthList) {
            const outcome = this.categoryOutcomeList[month];
            const pos = this.getMonthPos(month);
            if (month === 1) {
                this.ctx.textAlign = "start";
            } else {
                this.ctx.textAlign = "center";
            }
            this.ctx.fillText(outcome.toLocaleString(), pos.x, pos.y + 5);
        }
      
        this.ctx.fill();

        this.drawer.moveTo(initPos.x, initPos.y);
        this.ctx.beginPath();
        
        for (let month of monthList) {
            const pos = this.getMonthPos(month);
            this.drawer.lineTo(pos.x, pos.y + 10);
        }

        this.ctx.stroke();
    }
    
    getMonthPos(month) {
        const x = this.lenX * (parseInt(month) - 1) + 5;
        const y = this.value2pos(this.categoryOutcomeList[month]);

        return { x, y };
    }

  drawVertax() {
    
  }
}