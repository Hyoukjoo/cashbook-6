import { Page } from "pages/type";
import { cloneElement } from "./dom";
import { renderWrapper } from "./render";
import { State } from "./state";

class Registry {
  private store: Record<string, Page> = {};

  get(name: string) {
    return this.store[name];
  }

  add(name: string, page: Page) {
    this.store[name] = renderWrapper(page);
  }

  renderRoot($root: HTMLElement, state: State) {
    const $cloneRoot = cloneElement($root);
    const page = this.store[state.currentPath];

    return renderWrapper(page)($cloneRoot, state);
  }
}

const registry = Object.freeze(new Registry());

export default registry;
