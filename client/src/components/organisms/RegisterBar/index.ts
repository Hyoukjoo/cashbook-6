import "./style.scss";

import Div from "atoms/Div";
import { Organism } from "organisms/type";
import SaveButton from "molecules/Button/Save";
import CalendarInput from "./CalendarInput";
import CategoryInput from "./CategoryInput";
import DescriptionInput from "./DescriptionInput";
import PaymentInput from "./PaymentInput";
import AmountInput from "./AmountInput";

const RegisterBar: Organism = ({ onClickSaveButton, onChange }) => {
  const $calendarInput = CalendarInput({ onChange });
  const $categoryInput = CategoryInput({ onChange });
  const $descriptionInput = DescriptionInput({ onChange });
  const $paymentInput = PaymentInput({ onChange });
  const $amountInput = AmountInput({ onChange });
  const $saveButton = SaveButton({ size: "large", onClickSaveButton });

  const $container = Div("register-bar-container")(
    $calendarInput,
    $categoryInput,
    $descriptionInput,
    $paymentInput,
    $amountInput,
    $saveButton
  );

  return $container;
};

export default RegisterBar;
