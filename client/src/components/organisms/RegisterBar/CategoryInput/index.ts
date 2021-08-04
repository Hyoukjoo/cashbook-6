import LabelInput from "molecules/Input/Label";
import Dropdown from "molecules/Select/Dropdown";
import { Organism } from "organisms/type";

const CategoryInput: Organism = () => {
  const $dropdown = Dropdown({
    options: [
      { option: "생활", hasButton: true, onClickRemoveButton: console.log },
      { option: "술" },
      { option: "식비" },
    ],
  });

  const $box = LabelInput({ label: "분류", $input: $dropdown });

  return $box;
};

export default CategoryInput;
