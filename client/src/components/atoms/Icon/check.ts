import { Svg } from "./type";

const Check: Svg = ({ color = "#222222", fill }) => {
  return [
    "0 0 24 24",
    `
      <defs>
        <g id="svg-check">
          <path d="M21 6L8.625 18L3 12.5455" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g> 
      </defs>
      <use href="#svg-check" stroke="${color}" fill="${fill}" />
    `,
  ];
};

export default Check;
