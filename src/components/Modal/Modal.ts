import { Component, ComponentProps } from "../../services/Component";
import { getTemplate } from "./template";
import s from "./Modal.module.scss";

export class Modal extends Component {
  overlay: HTMLElement | null;

  closeButton: HTMLElement | null;

  contentElement: HTMLElement;

  constructor(target = "div", props: ComponentProps, contentElement: HTMLElement) {
    super(target, props);
    this.contentElement = contentElement;
    this.overlay = null;
    this.closeButton = null;
  }

  protected componentDidMount(): void {
    this.overlay = this.element.querySelector(
      `.${s.modal__overlay}`,
    ) as HTMLElement;
    this.closeButton = this.element.querySelector(
      `.${s.modal__close}`,
    ) as HTMLElement;

    this.closeButton.addEventListener("click", this.close.bind(this));
    this.overlay.addEventListener("click", this.close.bind(this));
    document.addEventListener("keydown", this.handleKeyDown.bind(this));
    this.element
      .querySelector("#modalContent")
      ?.replaceWith(this.contentElement);
  }

  componentWillUnmount() {
    this.closeButton?.removeEventListener("click", this.close.bind(this));
    this.overlay?.removeEventListener("click", this.close.bind(this));
    document.removeEventListener("keydown", this.handleKeyDown.bind(this));
  }

  markup() {
    this.props!.classes = s.modal;
    this.addAttribute("id", this.props?.id || "modal");
    return getTemplate(s, this.props?.postfix).slice();
  }

  activate() {
    this.addClass(`${s.modal_open}`);
    document.querySelector("body")!.style.overflow = "hidden";
  }

  deactivate() {
    this.removeClass(`${s.modal_open}`);
    document.querySelector("body")!.style.overflow = "auto";
  }

  isActive() {
    return this.element.classList.contains(`${s.modal_open}`);
  }

  close() {
    this.deactivate();
  }

  handleKeyDown(event: KeyboardEvent) {
    if (event.key === "Escape" && this.isActive()) {
      this.close();
    }
  }
}
