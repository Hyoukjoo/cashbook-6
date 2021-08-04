import Input from "atoms/Input";
import LabelInput from "molecules/Input/Label";
import { Organism } from "organisms/type";

const DescriptionInput: Organism = () => {
  const $input = Input("description-input")({
    type: "text",
    placeholder: "내용",
  });

  const $box = LabelInput({ label: "내용", $input });

  return $box;
};

export default DescriptionInput;
