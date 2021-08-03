import { Page } from "pages/type";
import applyDiff from "./applyDiff";
import registry from "./registry";
import { State } from "./state";

export const renderWrapper =
  (page: Page) => (targetElement: HTMLElement, state: any) => {
    const $element = page(targetElement, state);
    const $childComponents = Array.from(
      $element.querySelectorAll<HTMLElement>("[data-page]")
    );

    $childComponents.forEach((target) => {
      const name = target.dataset.page;

      const page = registry.get(name);

      if (page) {
        target.replaceWith(page(targetElement, state));
      }
    });

    return $element;
  };

export const render = (state: State) => {
  requestAnimationFrame(() => {
    const $app = document.getElementById("app");
    const $new = registry.renderRoot($app, state);
    applyDiff(document.body, $app, $new);
  });
};
