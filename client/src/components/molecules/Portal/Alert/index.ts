import "./style.scss";

import Div from "atoms/Div";
import { H } from "atoms/Text";
import TextInput from "molecules/Input/Text";
import { BodyText } from "molecules/Text";
import { AlertProps, Portal } from "../type";
import TextButton from "molecules/Button/Text";
import BackDrop from "atoms/BackDrop";

const Alert: Portal<AlertProps> = ({
  isDelete = false,
  title = "",
  content = "",
  placeholder = "",
  cancelText = "취소",
  confirmText = "",
  onConfirm,
  onCancle,
}) => {
  const $title = BodyText({
    text: title,
    TextAtom: H[3],
    size: "medium",
    className: "title",
  });
  const $contentInput = TextInput({ placeholder, className: "content" });
  const $cancelButton = TextButton({ text: cancelText, className: "cancel" });
  const $confirmButton = TextButton({
    text: confirmText,
    className: "confirm",
  });

  if (content.trim().length > 0) {
    $contentInput.value = content;
    $contentInput.disabled = true;
  }

  $confirmButton.style.color = isDelete ? "#F45452" : "#219A95";

  const $alert = Div("alert")(
    $title,
    $contentInput,
    $cancelButton,
    $confirmButton
  );

  $alert.setAttribute("role", "alert");

  const $backdrop = BackDrop($alert);

  const removeBackdrop = () => {
    $backdrop.remove();
    $backdrop.removeEventListener("click", onClickBackdrop);
  };

  const onClickBackdrop = (e: ClickEvent<HTMLDivElement>) => {
    const isClickedBackdrop = e.target.matches("div.backdrop");

    if (isClickedBackdrop) {
      removeBackdrop();
    }
  };

  const onClickCancelButton = (e: ClickEvent<HTMLDivElement>) => {
    onCancle?.(e);
    removeBackdrop();
  };

  const onClickConfirmButton = (e: ClickEvent<HTMLDivElement>) => {
    const { value } = $contentInput;
    onConfirm?.(value);
    removeBackdrop();
  };

  $cancelButton.addEventListener("click", onClickCancelButton);
  $confirmButton.addEventListener("click", onClickConfirmButton);
  $backdrop.addEventListener("click", onClickBackdrop);

  document.body.append($backdrop);
};

export default Alert;
