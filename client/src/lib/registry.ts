import { Page } from "pages/type";
import { clearChildren, cloneElement } from "./dom";
import { renderWrapper } from "./render";
import { Route, Routes } from "./routes";
import { State } from "./state";

class Registry {
  private store: Record<string, Page> = {};

  get(name: string) {
    return this.store[name];
  }

  add({ path, page }: Route) {
    this.store[path] = renderWrapper(page);
  }

  set(routes: Routes) {
    routes.forEach((route) => this.add(route));
  }

  renderRoot($root: HTMLElement, state: State) {
    const $cloneRoot = clearChildren($root);
    const page = this.store[state.currentPath];

    return renderWrapper(page)($cloneRoot, state);
  }
}

const registry = Object.freeze(new Registry());

export default registry;
