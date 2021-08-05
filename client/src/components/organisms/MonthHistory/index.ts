import "./style.scss";

import Div from "atoms/Div";
import LargeHistoryList from "molecules/List/LargeHistoryList";
import { Organism } from "organisms/type";
import { MonthHistoryProps } from "./type";
import { HistoryType } from "apis/history/dto";
import DayHistory from "models/DayHistory";
import MonthHistorySummary from "./Summary";

const MonthHistory: Organism<MonthHistoryProps> = ({ dayHistories = [] }) => {
  const onClickCheckbox = (e: ClickEvent<HTMLInputElement>) => {
    if (e.target.matches("input[type=checkbox]")) {
      const $incomeCheckbox = e.target
        .closest(".month-history-container")
        .querySelector<HTMLInputElement>("#income-checkbox");
      const $outcomeCheckbox = e.target
        .closest(".month-history-container")
        .querySelector<HTMLInputElement>("#outcome-checkbox");

      let $summary;
      let $list;

      const isBothChecked = $incomeCheckbox.checked && $outcomeCheckbox.checked;
      const isOnlyIncomeChecked =
        $incomeCheckbox.checked && !$outcomeCheckbox.checked;
      const isOnlyOutcomeChecked =
        !$incomeCheckbox.checked && $outcomeCheckbox.checked;
      const isBothUnChecked =
        !$incomeCheckbox.checked && !$outcomeCheckbox.checked;

      if (isBothChecked) {
        $summary = MonthHistorySummary({ dayHistories, onClickCheckbox });
        $list = dayHistories.map(LargeHistoryList);
      } else if (isOnlyIncomeChecked) {
        const incomeDayHistories = dayHistories
          .map(DayHistory.filterDayHistoryByHistoryType(HistoryType.INCOME))
          .filter(Boolean);

        $summary = MonthHistorySummary({
          dayHistories: incomeDayHistories,
          onClickCheckbox,
          isOutcomeChecked: false,
        });
        $list = incomeDayHistories.map(LargeHistoryList);
      } else if (isOnlyOutcomeChecked) {
        const outcomeDayHistories = dayHistories
          .map(DayHistory.filterDayHistoryByHistoryType(HistoryType.OUTCOME))
          .filter(Boolean);

        $summary = MonthHistorySummary({
          dayHistories: outcomeDayHistories,
          onClickCheckbox,
          isIncomeChecked: false,
        });
        $list = outcomeDayHistories.map(LargeHistoryList);
      } else if (isBothUnChecked) {
        $summary = MonthHistorySummary({
          dayHistories: [],
          isIncomeChecked: false,
          isOutcomeChecked: false,
          onClickCheckbox,
        });
        $list = [];
      }

      const $oldContainer = document.querySelector(".month-history-container");
      const $newContainer = Div("month-history-container")($summary, ...$list);

      $oldContainer.replaceWith($newContainer);
    }
  };

  const $summary = MonthHistorySummary({ dayHistories, onClickCheckbox });
  const $list = dayHistories.map(LargeHistoryList);

  Array.from($summary.children).forEach(($) => {
    if ($.matches("div.checkbox-container")) {
      $.lastElementChild.addEventListener("click", onClickCheckbox);
    }
  });

  const $container = Div("month-history-container")($summary, ...$list);

  return $container;
};

export default MonthHistory;
