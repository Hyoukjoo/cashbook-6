import "./style.scss";

import Div from "atoms/Div";
import Close from "atoms/Icon/close";
import Li from "atoms/Li";
import { Span } from "atoms/Text";
import IconButton from "molecules/Button/Icon";
import { BodyText } from "molecules/Text";
import { Molecule } from "molecules/type";
import { DropdownOptionProps } from "../type";

const DropdwonOption: Molecule<DropdownOptionProps, HTMLLIElement> = ({
  option,
  hasButton = false,
  onClickRemoveButton,
}) => {
  const onClickIconButton = () => {
    onClickRemoveButton(option);
  };

  const $text = BodyText({ TextAtom: Span, text: option, size: "regular" });
  const $removeButton = IconButton({
    svg: Close,
    onClick: onClickIconButton,
  });

  const $innerBox = Div("inner")($text);

  if (hasButton) {
    $innerBox.append($removeButton);
  }

  const $option = Li("dropdown-option")($innerBox);

  $option.dataset.option = option;

  return $option;
};

export default DropdwonOption;
