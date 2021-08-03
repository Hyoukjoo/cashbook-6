import "./style.scss";

import { Molecule } from "molecules/type";
import { SaveButtonProps } from "./type";
import { CustomHTMLElement } from "commons/type/html";
import Button from "atoms/Button";

// test해본 코드, 제거해야될 대상
export class SaveButtonElement
  extends HTMLElement
  implements CustomHTMLElement
{
  $button: HTMLButtonElement;

  constructor() {
    super();
    this.setAttribute("role", "button");
  }

  static get observedAttributes() {
    return ["disabled"];
  }

  get disabled() {
    return this.dataset.isActive === "inactive";
  }

  set disabled(isDisabled: boolean) {
    this.dataset.isActive = isDisabled ? "inactive" : "active";
    this.$button.disabled = isDisabled;
  }

  attributeChangedCallback(name: string, prev: string, next: string) {}

  connectedCallback() {
    requestAnimationFrame(() => {
      this.$button = Button("small")();
      this.$button.disabled = true;

      this.append(this.$button);
    });
  }

  disconnectedCallback() {}

  static create() {
    const $button = new SaveButtonElement();

    return $button;
  }
}

customElements.define("save-button", SaveButtonElement);

const SaveButton: Molecule<SaveButtonProps, HTMLButtonElement> = ({
  size = "small",
  onClickSaveButton,
} = {}) => {
  const $saveButton = Button("save-button", size)();
  $saveButton.disabled = true;

  $saveButton.addEventListener("click", onClickSaveButton);

  return $saveButton;
};

export default SaveButton;
