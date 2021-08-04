import Input from "atoms/Input";
import { Organism } from "organisms/type";
import LabelInput from "molecules/Input/Label";

const CalendarInput: Organism<any, HTMLDivElement> = () => {
  const $input = Input("calendar-input")({
    type: "date",
  });

  $input.addEventListener("change", (e: ChangeEvent<HTMLInputElement>) => {});

  const $box = LabelInput({ label: "일자", $input });

  return $box;
};

export default CalendarInput;
