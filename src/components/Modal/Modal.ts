import { Component, ComponentProps } from "../../services/Component";
import { getTemplate } from "./template";
import s from "./Modal.module.scss";

let activeModals: HTMLElement[] = [];

export class Modal extends Component {
  overlay: HTMLElement | null;

  closeButton: HTMLElement | null;

  constructor(target = "div", props: ComponentProps) {
    super(target, props);
    this.overlay = null;
    this.closeButton = null;
  }

  protected componentDidMount(): void {
    this.overlay = this.element.querySelector(`.${s.modal__overlay}`) as HTMLElement;
    this.closeButton = this.element.querySelector(`.${s.modal__close}`) as HTMLElement;
    this.closeButton.addEventListener('click', this.close.bind(this));
    this.overlay.addEventListener('click', this.close.bind(this));
    document.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  componentWillUnmount() {
    this.closeButton?.removeEventListener('click', this.close.bind(this));
    this.overlay?.removeEventListener('click', this.close.bind(this));
    document.removeEventListener('keydown', this.handleKeyDown.bind(this));
  }

  markup() {
    // const children = this.getInitChildren();
    this.props!.classes = s.modal;
    this.addAttribute("id", "modal");
    return getTemplate(s);
  }

  activate() {
    activeModals.push(this.element);
    this.addClass(`${s.modal_open}`);
    document.querySelector("body")!.style.overflow = "hidden";
  }

  deactivate() {
    activeModals = activeModals.filter((modal) => modal !== this.element);
    this.removeClass(`${s.modal_open}`);
    document.querySelector("body")!.style.overflow = "auto";
  }

  isActive() {
    return activeModals[activeModals.length - 1] === this.element;
  }

  close() {
    this.deactivate();
  }

  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.isActive()) {
      this.close();
    }
  }
}
// buyBtn
