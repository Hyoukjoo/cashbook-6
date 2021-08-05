import "../style.scss";

import Li from "atoms/Li";
import { Molecule } from "molecules/type";
import { CategoryHistoryDto } from "apis/history/dto";
import CategoryTag from "molecules/Text/CategoryTag";
import { BodyText, BoldText } from "molecules/Text";
import { P } from "atoms/Text";
import { formatToCurrency } from "utils/number";
import Div from "atoms/Div";

const SmallHistoryItem: Molecule<CategoryHistoryDto, HTMLLIElement> = ({
  name,
  color,
  rate,
  total,
}) => {
  const formatedTotal = formatToCurrency(total);
  const $categoryTag = CategoryTag({ name, color });
  const $categoryBox = Div("category-box")($categoryTag);
  const $rate = BodyText({
    text: `${rate}%`,
    TextAtom: P,
    size: "regular",
    className: "rate",
  });
  const $total = BoldText({
    text: formatedTotal,
    TextAtom: P,
    size: "large",
    className: "total",
  });

  const $item = Li("history-item", "small")($categoryBox, $rate, $total);

  return $item;
};

export default SmallHistoryItem;
