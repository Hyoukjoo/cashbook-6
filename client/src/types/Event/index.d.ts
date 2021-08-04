export declare interface InputEvent {
  target: HTMLInputElement;
}

declare global {
  interface ChangeEvent<T extends EventTarget = HTMLElement> extends Event {
    target: T;
  }

  interface ClickEvent<T extends EventTarget = HTMLElement> extends Event {
    target: T;
  }
}
