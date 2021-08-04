import "./style.scss";

import { Molecule } from "molecules/type";
import Div from "atoms/Div";
import Icon from "atoms/Icon";
import ShortDownArrow from "atoms/Icon/short-down-arrow";
import { BodyText } from "molecules/Text";
import { Span } from "atoms/Text";
import { DropdownProps } from "../type";
import Ul from "atoms/Ul";
import DropdwonOption from "molecules/DropDown/Option";

const Dropdown: Molecule<DropdownProps> = ({
  placeholder = "선택하세요",
  options = [],
  onChangeOption,
}) => {
  const $downArrowIcon = Icon(ShortDownArrow)({ width: 16, height: 16 });
  const $placeholder = BodyText({
    TextAtom: Span,
    text: placeholder,
    size: "regular",
    className: "selected-option",
  });
  const $options = options.map(DropdwonOption);

  const $list = Ul("dropdown-list")(...$options);

  const $select = Div("dropdown-select")($placeholder, $downArrowIcon, $list);

  $select.dataset.value = "";

  $select.addEventListener("click", (e: ClickEvent<HTMLDivElement>) => {
    const $target = e.target.closest("li.dropdown-option") as HTMLElement;

    if ($target?.matches("li.dropdown-option")) {
      const { option } = $target.dataset;
      $placeholder.textContent = option;
      $select.dataset.value = option;

      if (!$placeholder.classList.contains("selected")) {
        $placeholder.classList.add("selected");
      }
    }

    onChangeOption?.($select.dataset.value);

    $list.classList.toggle("show");
  });

  return $select;
};

export default Dropdown;
