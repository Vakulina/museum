import { eventBus, EventBus } from "./EventBus";

export type ComponentProps = Record<string, any> | undefined; // classes events children

export abstract class Component {
  element: HTMLElement;

  static LIFECYRCLE_EVENTS = {
    INIT: "init",
    FLOW_RENDER: "flow:render",
    FLOW_CDM: "flow:component-did-mount",
  } as const;

  protected eventBus: () => EventBus;

  protected props: ComponentProps;

  constructor(target = "div", props: ComponentProps) {
    this.element = document.createElement(target);
    this.props = props;
    this.eventBus = () => eventBus;
    this._registerLifecyrcleStages(eventBus);
    eventBus.emit(Component.LIFECYRCLE_EVENTS.INIT);
  }

  private _registerLifecyrcleStages(eventBus: EventBus): void {
    eventBus.on(Component.LIFECYRCLE_EVENTS.INIT, this.init.bind(this));
    eventBus.on(
      Component.LIFECYRCLE_EVENTS.FLOW_RENDER,
      this.render.bind(this),
    );
    eventBus.on(
      Component.LIFECYRCLE_EVENTS.FLOW_CDM,
      this.componentDidMount.bind(this),
    );
  }

  init() {
    this.eventBus().emit(Component.LIFECYRCLE_EVENTS.FLOW_RENDER);
  }

  componentDidMount() {}

  dispatchComponentDidMount() {
    this.eventBus().emit(Component.LIFECYRCLE_EVENTS.FLOW_CDM);
  }

  render() {
    this.element.innerHTML = this.markup();

    if (this.props && this.props.children) {
      this.element.appendChild(this.props.children);
    }
    this._addClasses();
    this._addEvents();
  }

  markup() {
    return "";
  }

  show(): void {
    this.element.style.display = "block";
  }

  hide(): void {
    this.element.style.display = "none";
  }

  remove(): void {
    this._removeEventListeners();
    this.element.remove();
  }

  private _addClasses() {
    if (this.props && this.props.classes) {
      const { classes } = this.props;
      const classArr = classes.split(" ");
      classArr.forEach((className: string) => {
        this.element.classList.add(className);
      });
    }
  }

  addClass(className: string): void {
    this.element.classList.add(className);
  }

  removeClass(className: string): void {
    this.element.classList.remove(className);
  }

  toogleClass(className: string): void {
    this.element.classList.toggle(className);
  }

  private _addEvents(): void {
    if (this.props && this.props.events) {
      const { events } = this.props;
      Object.keys(events).forEach((eventName) => {
        this.element.addEventListener(eventName, events[eventName]);
      });
    }
  }

  private _removeEventListeners(): void {
    if (this.props && this.props.events) {
      const { events } = this.props;
      Object.keys(events).forEach((eventName) => {
        this.element!.removeEventListener(eventName, events[eventName]);
      });
    }
  }
}
