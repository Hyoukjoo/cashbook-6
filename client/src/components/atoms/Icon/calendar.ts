import { Svg } from "./type";

const Calendar: Svg = ({ color = "#222222", fill }) => {
  return [
    "0 0 24 24",
    `
      <defs>
        <g id="svg-calendar">
          <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M16 2V6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8 2V6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M3 10H21" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g> 
      </defs>
      <use href="#svg-calendar" stroke="${color}" fill="${fill}" />
    `,
  ];
};

export default Calendar;
