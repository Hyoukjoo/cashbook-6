import Input from "atoms/Input";
import LabelInput from "molecules/Input/Label";
import { Organism } from "organisms/type";
import { DescriptionInputProps } from "../type";

const DescriptionInput: Organism<DescriptionInputProps> = ({
  onChangeDescription,
  description = "",
}) => {
  const $input = Input("description-input")({
    type: "text",
    placeholder: "내용",
  });

  if (description) {
    $input.value = description;
  }

  const $box = LabelInput({ label: "내용", $input });

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    onChangeDescription?.({ description: value });
  };

  $input.addEventListener("input", onChangeInput);

  return $box;
};

export default DescriptionInput;
