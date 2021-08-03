import { Svg } from "./type";

const ShortLeftArrow: Svg = ({ color = "#FCFCFC", fill }) => {
  return [
    "0 0 10 18",
    `
      <defs>
        <g id="short-left-arrow">
          <path d="M9 17L1 9L9 1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g> 
      </defs>
      <use href="#short-left-arrow" stroke="${color}" fill="${fill}" />
    `,
  ];
};

export default ShortLeftArrow;
