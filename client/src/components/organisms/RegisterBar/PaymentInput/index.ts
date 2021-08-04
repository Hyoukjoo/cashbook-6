import LabelInput from "molecules/Input/Label";
import DropdwonOption from "molecules/DropDown/Option";
import Alert from "molecules/Portal/Alert";
import Dropdown from "molecules/DropDown/Select";
import { Organism } from "organisms/type";
import { PaymentInputProps } from "../type";

const PaymentInput: Organism<PaymentInputProps, HTMLDivElement> = ({
  options,
}) => {
  const placeholder = "선택하세요";

  const onClickRemoveButton = (option: string) => {
    const $target = $dropdown.querySelector(
      `li.dropdown-option[data-option=${option}]`
    );

    const onConfirm = () => {
      const $selectedOption = $dropdown.querySelector(".selected-option");
      $selectedOption.textContent = placeholder;

      $target.remove();
    };

    Alert({
      onConfirm,
      placeholder: "입력하세요",
      cancelText: "취소",
      confirmText: "삭제",
      isDelete: true,
      content: option,
      title: "해당 결제수단을 삭제하시겠습니까?",
    });
  };

  const $dropdown = Dropdown({
    placeholder,
    options: [
      { option: "생활", hasButton: true, onClickRemoveButton },
      { option: "술", hasButton: true, onClickRemoveButton },
      { option: "식비", hasButton: true, onClickRemoveButton },
    ],
  });

  const $addOption = DropdwonOption({ option: "추가하기" });
  $addOption.addEventListener("click", (e: ClickEvent<HTMLLIElement>) => {
    Alert({
      title: "추가하실 결제수단을 적어주세요",
      confirmText: "등록",
      onConfirm: console.log,
    });
  });

  const $optionList = $dropdown.lastElementChild;
  $optionList.append($addOption);

  const $box = LabelInput({ label: "결제수단", $input: $dropdown });

  return $box;
};

export default PaymentInput;
