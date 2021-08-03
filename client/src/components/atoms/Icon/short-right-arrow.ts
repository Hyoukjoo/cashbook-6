import { Svg } from "./type";

const ShortRightArrow: Svg = ({ color = "#FCFCFC", fill }) => {
  return [
    "0 0 10 18",
    `
      <defs>
        <g id="short-right-arrow">
          <path d="M1 17L9 9L1 1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g> 
      </defs>
      <use href="#short-right-arrow" stroke="${color}" fill="${fill}" />
    `,
  ];
};

export default ShortRightArrow;
