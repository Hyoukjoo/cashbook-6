import "./style.scss";

import Div from "atoms/Div";
import Minus from "atoms/Icon/minus";
import Input from "atoms/Input";
import { P } from "atoms/Text";
import IconButton from "molecules/Button/Icon";
import LabelInput from "molecules/Input/Label";
import { BodyText } from "molecules/Text";
import { Organism } from "organisms/type";
import { AmountInputProps } from "../type";
import { formatToCurrency } from "utils/number";
import Plus from "atoms/Icon/plus";
import Icon from "atoms/Icon";

const AmountInput: Organism<AmountInputProps, HTMLDivElement> = ({
  amount = 0,
}) => {
  let isPlus = false;

  const $icon = IconButton({ svg: Minus, width: 16, height: 16 });
  const $input = Input("amount-input")({
    type: "text",
    placeholder: "입력하세요",
  });

  if (amount !== 0) {
    $input.value = formatToCurrency(amount);
  }

  const $currency = BodyText({ TextAtom: P, text: "원", size: "regular" });
  const $box = Div("amount-input-box")($icon, $input, $currency);
  const $amountInput = LabelInput({
    label: "금액",
    $input: $box,
    hasBoundary: false,
  });

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const amount = Number(value.replace(",", ""));
    const formatedAmount = formatToCurrency(amount);
    e.target.value = formatedAmount;
  };

  const onClickIcon = () => {
    isPlus = !isPlus;
    const $newIcon = Icon(isPlus ? Plus : Minus)({ width: 16, height: 16 });
    $icon.firstElementChild.replaceWith($newIcon);
  };

  $input.addEventListener("input", onChangeInput);
  $icon.addEventListener("click", onClickIcon);

  return $amountInput;
};

export default AmountInput;
