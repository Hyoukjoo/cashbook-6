import "./style.scss";

import Div from "atoms/Div";
import { Organism } from "organisms/type";
import SaveButton from "molecules/Button/Save";
import CalendarInput from "./CalendarInput";
import CategoryInput from "./CategoryInput";
import DescriptionInput from "./DescriptionInput";
import PaymentInput from "./PaymentInput";
import AmountInput from "./AmountInput";
import { RegisterBarProps } from "./type";

const RegisterBar: Organism<RegisterBarProps> = ({
  registerInfo = {},
  categories,
  payments,
  onChangeRegisterInfo,
  onClickSaveButton,
}) => {
  const {
    date = new Date(),
    description = "",
    category = "",
    payment = "",
    amount = 0,
  } = registerInfo;

  const onChangeDate = ({ date }) => {
    onChangeRegisterInfo?.({ ...registerInfo, ...date });
  };
  const onChangeCategory = ({ category }) => {
    onChangeRegisterInfo?.({ ...registerInfo, ...category });
  };
  const onChangeDescription = ({ description }) => {
    onChangeRegisterInfo?.({ ...registerInfo, ...description });
  };
  const onChangePayment = ({ payment }) => {
    onChangeRegisterInfo?.({ ...registerInfo, ...payment });
  };
  const onChangeAmount = ({ amount }) => {
    onChangeRegisterInfo?.({ ...registerInfo, ...amount });
  };

  const $calendarInput = CalendarInput({ date, onChangeDate });
  const $categoryInput = CategoryInput({
    defaultCategory: category,
    categories,
    onChangeCategory,
  });
  const $descriptionInput = DescriptionInput({
    description,
    onChangeDescription,
  });
  const $paymentInput = PaymentInput({
    defaultPayment: payment,
    payments,
    onChangePayment,
  });
  const $amountInput = AmountInput({ amount, onChangeAmount });
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
