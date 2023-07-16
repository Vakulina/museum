import { eventBus, EventBus } from "./EventBus";

export type ComponentProps = Record<string, any> | undefined; // classes events children

export abstract class Component {
  element: HTMLElement;

  static LIFECYRCLE_EVENTS = {
    INIT: "init",
    FLOW_RENDER: "flow:render",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CWU: "flow:component=will-unmount",
  } as const;

  protected eventBus: () => EventBus;

  props: ComponentProps;

  constructor(target = "div", props: ComponentProps) {
    this.element = document.createElement(target);
    this.props = props;
    this.eventBus = () => eventBus;
    this._registerLifecyrcleStages(eventBus);
    eventBus.emit(Component.LIFECYRCLE_EVENTS.INIT);
  }

  private _registerLifecyrcleStages(eventBus: EventBus): void {
    eventBus.on(Component.LIFECYRCLE_EVENTS.INIT, this._init.bind(this));
    eventBus.on(
      Component.LIFECYRCLE_EVENTS.FLOW_RENDER,
      this.render.bind(this),
    );
    eventBus.on(
      Component.LIFECYRCLE_EVENTS.FLOW_CDM,
      this.componentDidMount.bind(this),
    );
    eventBus.on(Component.LIFECYRCLE_EVENTS.FLOW_CWU, this._remove.bind(this));
  }

  private _init() {
    this.eventBus().emit(Component.LIFECYRCLE_EVENTS.FLOW_RENDER);
  }

  protected componentDidMount() {}

  dispatchComponentDidMount() {
    this.eventBus().emit(Component.LIFECYRCLE_EVENTS.FLOW_CDM);
  }

  private dispatchComponentWillUnmount() {
    this.eventBus().emit(Component.LIFECYRCLE_EVENTS.FLOW_CWU);
  }

  markup() {
    return "";
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

  render() {
    this.element.innerHTML = this.markup();
    this._addClasses();
    this._addEvents();
  }

  getInitChildren() {
    const children = document.createElement("div");
    if (this.props && this.props.children) {
      const childrenArr = this.props.children;
      childrenArr.map((child: HTMLElement) => children.appendChild(child));
    }
    return children;
  }

  private _remove(): void {
    this._removeEventListeners();
    this.componentWillUnmount()
    this.element.remove();
  }

  remove(): void {
    this.dispatchComponentWillUnmount();
  }

  componentWillUnmount() {

  }

  addClass(className: string): void {
    this.element.classList.add(className);
  }

  addAttribute(nameAttribute: string, attribute: string): void {
    this.element.setAttribute(nameAttribute, attribute);
  }

  removeClass(className: string): void {
    this.element.classList.remove(className);
  }

  toogleClass(className: string): void {
    this.element.classList.toggle(className);
  }
}
