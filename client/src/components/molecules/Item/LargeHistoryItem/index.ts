import "../style.scss";

import { Molecule } from "molecules/type";
import { LargeHistoryItemProps } from "../type";
import CategoryTag from "molecules/Text/CategoryTag";
import Li from "atoms/Li";
import Div from "atoms/Div";
import { P } from "atoms/Text";
import { BodyText, BoldText } from "molecules/Text";
import { formatToCurrency } from "utils/number";
import { HistoryType } from "apis/history/dto";

const LargeHistoryItem: Molecule<LargeHistoryItemProps, HTMLLIElement> = ({
  category,
  description,
  payment,
  amount,
  type,
}) => {
  const $categoryTag = CategoryTag(category);
  const $categoryBox = Div("category-box")($categoryTag);
  const $description = BodyText({
    TextAtom: P,
    text: description,
    size: "medium",
    className: "description",
  });
  const $payment = BodyText({
    TextAtom: P,
    text: payment,
    size: "medium",
    className: "payment",
  });
  const formatedAmount = formatToCurrency(
    type === HistoryType.INCOME ? amount : -amount
  );
  const $amount = BoldText({
    TextAtom: P,
    text: formatedAmount + "원",
    size: "large",
    className: "amount",
  });

  const $item = Li("history-item", "large")(
    $categoryBox,
    $description,
    $payment,
    $amount
  );

  return $item;
};

export default LargeHistoryItem;
