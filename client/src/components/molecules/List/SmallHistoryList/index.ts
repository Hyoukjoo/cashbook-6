import "../style.scss";

import Ul from "atoms/Ul";
import { Molecule } from "molecules/type";
import { SmallHistoryListProps } from "../type";
import SmallHistoryItem from "molecules/Item/SmallHistoryItem";

const SmallHistoryList: Molecule<SmallHistoryListProps, HTMLUListElement> = ({
  categoryHistories,
}) => {
  const $items = categoryHistories.map(SmallHistoryItem);

  const $ul = Ul("history-list", "small")(...$items);

  return $ul;
};

export default SmallHistoryList;
