import { Svg } from "./type";

const Close: Svg = ({ color = "#626666", fill }) => {
  return [
    "0 0 16 16",
    `
      <defs>
        <g id="svg-check">
          <path d="M12 4L4 12"  stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M4 4L12 12"  stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
        </g> 
      </defs>
      <use href="#svg-check" stroke="${color}" fill="${fill}" />
    `,
  ];
};

export default Close;
