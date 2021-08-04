import { HistoryType } from "apis/history/dto";
import Container from "molecules/Container";
import CheckBoxInput from "molecules/Input/CheckBox";

import DonutChart from "../../canvas/donut-chart";
import LineChart from "../../canvas/line-chart";

// import LargeHistoryList from "molecules/List/LargeHistoryList";
import SmallHistoryList from "molecules/List/SmallHistoryList";
import { Page } from "pages/type";
import Layout from "templates/Layout";

const Chart: Page = (targetElement, state) => {
  const $target = targetElement.cloneNode(true) as HTMLElement;

  const $header = Layout(state);

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
  //       type: HistoryType.EXPENSE,
  //     },
  //   ],
  // });

  const categoryHistories = [
    {
      name: "생활",
      color: "#4A6CC3",
      rate: 58,
      total: 301000,
    },
    {
      name: "식비",
      color: "#4CA1DE",
      rate: 28,
      total: 201000,
    },
    {
      name: "교통",
      color: "#94D3CC",
      rate: 10,
      total: 51000,
    },
    {
      name: "문화/여가",
      color: "#D092E2",
      rate: 10,
      total: 31000,
    }
  ];

  const $canvasWrapper = document.createElement("div");
  $canvasWrapper.className = "canvas-wrapper";

  const donutChart = new LineChart(396, 143);

  $canvasWrapper.appendChild(donutChart.$canvas);

  const $list = SmallHistoryList({
    categoryHistories: categoryHistories
  });

  const $checkbox = CheckBoxInput({ id: "c1" });

  const $container = Container($checkbox, $canvasWrapper);

  $target.append($header, $container);

  return $target;
};

export default Chart;
