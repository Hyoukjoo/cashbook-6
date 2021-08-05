import { State } from "lib/state";
import Header from "organisms/Header";
import { Page } from "pages/type";

const HeaderLayout: Layout =
  (page: Page) => async (targetElement: HTMLElement, state: State) => {
    const goNextMonth = (date: Date) => {
      state.date = date;
    };

    const goLastMonth = (date: Date) => {
      state.date = date;
    };

    const onClickNavButton = (href: string) => {
      state.currentPath = href;
    };

    const $header = Header({
      date: state.date,
      currentPath: state.currentPath,
      goLastMonth,
      goNextMonth,
      onClickNavButton,
    });

    const $page = await page(targetElement, state);

    $page.prepend($header);

    return $page;
  };

export default HeaderLayout;

//
//
//
// 테스트 코드

import { CustomHTMLElement } from "commons/type/html";
import applyDiff from "lib/applyDiff";
import { Layout } from "./type";

// const HeaderLayout: Layout =
//   (page: Page) => async (targetElement: HTMLElement, state: State) => {
// const goNextMonth = (date: Date) => {
// $layout.dataset.date = date.toString();
// };

// const goLastMonth = (date: Date) => {
// $layout.dataset.date = date.toString();
// };

// const renderHeader = (date: Date, currentPath: string) =>
//   Header({
//     date,
//     goLastMonth,
//     goNextMonth,
//     currentPath,
//   });

// const $layout = new LayoutElement({
//   renderHeader,
//   currentPath: state.currentPath,
//   date: state.date,
// });
// };

class LayoutElement extends HTMLElement implements CustomHTMLElement {
  $header: HTMLElement;
  $main: HTMLElement;
  renderHeader: (date: Date, currentPath: string) => HTMLElement;

  constructor({ renderHeader, currentPath, date }) {
    super();
    this.dataset.date = date.toString();
    this.dataset.currentPath = currentPath;
    this.renderHeader = renderHeader;
  }

  static get observedAttributes() {
    return ["data-date", "data-current-path"];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (!this.hasChildNodes()) return;

    if (name === "data-date" || name === "data-current-path") {
      const $header = this.renderHeader(this.date, this.dataset.currentPath);

      applyDiff(this, this.firstElementChild as HTMLElement, $header);
    }

    if (name === "data-current-path") {
      const $main = document.createElement("h1");

      $main.textContent = newValue;

      applyDiff(this, this.lastElementChild as HTMLElement, $main);
    }
  }

  connectedCallback() {
    requestAnimationFrame(() => {
      const $header = this.renderHeader(this.date, this.dataset.currentPath);
      const $main = document.createElement("h1");

      $main.textContent = "init";

      this.append($header, $main);
    });
  }

  disconnectedCallback() {}

  get date() {
    return new Date(this.dataset.date);
  }
}

customElements.define("layout-element", LayoutElement);
