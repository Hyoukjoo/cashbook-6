import Input from "atoms/Input";
import { Organism } from "organisms/type";
import LabelInput from "molecules/Input/Label";
import { formatToShortDate } from "utils/date";
import { CalendarInputProps } from "../type";

const CalendarInput: Organism<CalendarInputProps, HTMLDivElement> = ({
  date = new Date(),
}) => {
  const $input = Input("calendar-input")({
    type: "date",
  });

  $input.value = formatToShortDate(date);

  const $box = LabelInput({ label: "일자", $input });

  return $box;
};

export default CalendarInput;
