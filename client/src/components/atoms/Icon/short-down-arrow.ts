import { Svg } from "./type";

const ShortDownArrow: Svg = ({ color = "#8D9393", fill }) => {
  return [
    "0 0 16 17",
    `
      <defs>
        <g id="short-down-arrow">
          <path d="M4 6.5L8 10.5L12 6.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g> 
      </defs>
      <use href="#short-down-arrow" stroke="${color}" fill="${fill}" />
    `,
  ];
};

export default ShortDownArrow;
