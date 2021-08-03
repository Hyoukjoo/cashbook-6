import { Svg } from "./type";

const Chart: Svg = ({ color = "#222222", fill }) => {
  return [
    "0 0 24 24",
    `
      <defs>
        <g id="svg-chart">
          <path d="M18 20V10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 20V4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M6 20V14" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g> 
      </defs>
      <use href="#svg-chart" stroke="${color}" fill="${fill}" />
    `,
  ];
};

export default Chart;
