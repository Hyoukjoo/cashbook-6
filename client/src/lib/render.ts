import { Page } from "pages/type";
import applyDiff from "./applyDiff";
import registry from "./registry";
import { State } from "./state";

export const renderWrapper =
  (page: Page) => async (targetElement: HTMLElement, state: any) => {
    const $element = await page(targetElement, state);
    const $childComponents = Array.from(
      $element.querySelectorAll<HTMLElement>("[data-page]")
    );

    $childComponents.forEach(async (target) => {
      const name = target.dataset.page;

      const page = registry.get(name);

      if (page) {
        target.replaceWith(await page(targetElement, state));
      }
    });

    return $element;
  };

export const render = (state: State) => {
  requestAnimationFrame(async () => {
    const $app = document.getElementById("app");
    const $new = await registry.renderRoot($app, state);
    applyDiff(document.body, $app, $new);
  });
};
