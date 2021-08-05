import Container from "molecules/Container";
import CheckBoxInput from "molecules/Input/CheckBox";
import { Page } from "pages/type";
import Layout from "pages/Layout";
import { HistoryType } from "apis/history/dto";
// import LargeHistoryItem from "molecules/Item/LargeHistoryItem";
// import SmallHistoryItem from "molecules/Item/SmallHistoryItem";
// import LargeHistoryList from "molecules/List/LargeHistoryList";
// import SmallHistoryList from "molecules/List/SmallHistoryList";

const Chart: Page = (targetElement, state) => {
  const $target = targetElement.cloneNode(true) as HTMLElement;

  // const $$ = SmallHistoryItem({
  //   name: "생활생활생활",
  //   color: "#a2d",
  //   rate: 55,
  //   total: 123_000,
  // });

  // const $ = LargeHistoryList({
  //   date: new Date(),
  //   histories: [
  //     {
  //       category: { name: "생활생활생활", color: "#a2d" },
  //       description: "친구랑 술",
  //       payment: "카카오뱅크",
  //       date: new Date(),
  //       amount: 30_000,
  //       type: HistoryType.INCOME,
  //     },
  //     {
  //       category: { name: "생활생활생활", color: "#a2d" },
  //       description: "친구랑 술",
  //       payment: "카카오뱅크",
  //       date: new Date(),
  //       amount: 30_000,
  //       type: HistoryType.OUTCOME,
  //     },
  //   ],
  // });

  // const $list = SmallHistoryList({
  //   categoryHistories: [
  //     {
  //       name: "생활",
  //       color: "#21a5b1",
  //       rate: 38,
  //       total: 301000,
  //     },
  //     {
  //       name: "술",
  //       color: "#2145b1",
  //       rate: 28,
  //       total: 201000,
  //     },
  //     {
  //       name: "술",
  //       color: "#2145b1",
  //       rate: 28,
  //       total: 201000,
  //     },
  //     {
  //       name: "술",
  //       color: "#2145b1",
  //       rate: 28,
  //       total: 201000,
  //     },
  //   ],
  // });

  const $checkbox = CheckBoxInput({ id: "c1" });

  const $container = Container($checkbox);

  $target.append($container);

  return $target;
};

export default Layout(Chart);
