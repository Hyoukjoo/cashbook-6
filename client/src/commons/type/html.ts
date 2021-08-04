export abstract class CustomHTMLElement extends HTMLElement {
  static observedAttributes: () => string[];
  abstract attributeChangedCallback: (
    name: string,
    oldValue: string,
    newValue: string
  ) => void;
  abstract connectedCallback: () => void;
  abstract disconnectedCallback: () => void;
}
