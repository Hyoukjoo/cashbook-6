import { Svg } from "./type";

const Plus: Svg = ({ color = "#222222", fill }) => {
  return [
    "0 0 12 12",
    `
      <defs>
        <g id="svg-plus">
          <path d="M1.5 6H10.6666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M6 1.5V10.6666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g> 
      </defs>
      <use href="#svg-plus" stroke="${color}" fill="${fill}" />
    `,
  ];
};

export default Plus;
