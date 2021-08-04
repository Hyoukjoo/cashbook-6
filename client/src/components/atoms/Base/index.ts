import { ClassName } from "commons/type/common";

export const createElement = <T extends HTMLElement>(
  element: string,
  classNames: ClassName[] = [],
  is?: string
) => {
  const $ = document.createElement(element, { is });
  classNames = classNames.filter((className) => className !== "undefined");
  $.classList.add(...classNames);
  return <T>$;
};

export const h1 = (...classNames: ClassName[]) =>
  createElement<HTMLHeadingElement>("h1", classNames);
export const h2 = (...classNames: ClassName[]) =>
  createElement<HTMLHeadingElement>("h2", classNames);
export const h3 = (...classNames: ClassName[]) =>
  createElement<HTMLHeadingElement>("h3", classNames);
export const h4 = (...classNames: ClassName[]) =>
  createElement<HTMLHeadingElement>("h4", classNames);
export const h5 = (...classNames: ClassName[]) =>
  createElement<HTMLHeadingElement>("h5", classNames);
export const h6 = (...classNames: ClassName[]) =>
  createElement<HTMLHeadingElement>("h6", classNames);
export const p = (...classNames: ClassName[]) =>
  createElement<HTMLParagraphElement>("p", classNames);
export const span = (...classNames: ClassName[]) =>
  createElement<HTMLSpanElement>("span", classNames);

export const label = (...classNames: ClassName[]) =>
  createElement<HTMLLabelElement>("label", classNames);
export const a = (...classNames: ClassName[]) =>
  createElement<HTMLAnchorElement>("a", classNames);
export const button = (...classNames: ClassName[]) =>
  createElement<HTMLButtonElement>("button", classNames);
export const input = (...classNames: ClassName[]) =>
  createElement<HTMLInputElement>("input", classNames);

export const div = (...classNames: ClassName[]) =>
  createElement<HTMLDivElement>("div", classNames);
export const header = (...classNames: ClassName[]) =>
  createElement("header", classNames);
export const footer = (...classNames: ClassName[]) =>
  createElement("footer", classNames);
export const section = (...classNames: ClassName[]) =>
  createElement("section", classNames);
export const main = (...classNames: ClassName[]) =>
  createElement("main", classNames);
export const nav = (...classNames: ClassName[]) =>
  createElement("nav", classNames);

export const ul = (...classNames: ClassName[]) =>
  createElement<HTMLUListElement>("ul", classNames);
export const li = (...classNames: ClassName[]) =>
  createElement<HTMLLIElement>("li", classNames);
