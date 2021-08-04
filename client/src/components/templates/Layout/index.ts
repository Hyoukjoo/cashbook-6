import { main } from "atoms/Base";
import { CustomHTMLElement } from "commons/type/html";
import applyDiff from "lib/applyDiff";
import registry from "lib/registry";
import { State } from "lib/state";
import Header from "organisms/Header";
import History from "pages/History";
import { Page } from "pages/type";

const Layout = (state: State) => {
  const goNextMonth = (date: Date) => {
    state.date = date;
    // $layout.dataset.date = date.toString();
  };

  const goLastMonth = (date: Date) => {
    state.date = date;
    // $layout.dataset.date = date.toString();
  };

  const onClickNavButton = (href: string) => {
    state.currentPath = href;
  };

  const $header = Header({
    date: state.date,
    goLastMonth,
    goNextMonth,
    currentPath: state.currentPath,
    onClickNavButton,
  });

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

  return $header;
};

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

export default Layout;
