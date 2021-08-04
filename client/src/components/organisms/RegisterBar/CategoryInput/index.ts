import LabelInput from "molecules/Input/Label";
import Dropdown from "molecules/DropDown/Select";
import { Organism } from "organisms/type";
import { CategoryInputProps } from "../type";

const CategoryInput: Organism<CategoryInputProps> = ({
  defaultCategory,
  onChangeCategory,
  categories,
}) => {
  const placeholder = "선택하세요";

  const onChangeOption = (category: string) => {
    onChangeCategory?.({ category });
  };

  const $dropdown = Dropdown({
    defaultOption: defaultCategory,
    options: categories,
    placeholder,
    onChangeOption,
  });

  const $box = LabelInput({ label: "분류", $input: $dropdown });

  return $box;
};

export default CategoryInput;
