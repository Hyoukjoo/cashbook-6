import Input from "atoms/Input";
import LabelInput from "molecules/Input/Label";
import { Organism } from "organisms/type";

const AmountInput: Organism = () => {
  const $input = Input("amount-input")({
    type: "text",
    placeholder: "0원",
  });

  const $box = LabelInput({ label: "금액", $input, hasBoundary: false });

  return $box;
};

export default AmountInput;
