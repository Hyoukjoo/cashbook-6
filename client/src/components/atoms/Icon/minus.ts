import { Svg } from "./type";

const Minus: Svg = ({ color = "#222222", fill }) => {
  return [
    "0 0 12 3",
    `
      <defs>
        <g id="svg-minus">
          <path d="M1.33325 1.5H10.6666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g> 
      </defs>
      <use href="#svg-minus" stroke="${color}" fill="${fill}" />
    `,
  ];
};

export default Minus;
