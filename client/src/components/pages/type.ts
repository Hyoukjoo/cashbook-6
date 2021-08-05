import { State } from "lib/state";

export type Page = (targetElement: HTMLElement, state: State) => HTMLElement;
