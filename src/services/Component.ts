import { eventBus, EventBus } from './EventBus';

type Props = Record<string, any> | undefined  //classes events children

export abstract class Block {
    element: HTMLElement;
    protected eventBus: () => EventBus;
    protected props: Props;

    constructor(target = 'div', props: Props) {
        this.element = document.createElement(target);
        this.eventBus = () => eventBus;
        this.props = props
    }


    render() {
        this.element.appendChild(this.markup())
        if (this.props && this.props.children) {
            this.element.appendChild(this.props.children)
        }
        this._addEvents();
    }

    markup() {
        return new DocumentFragment();
    }

    show(): void {
        this.element.style.display = 'block';
    }

    hide(): void {
        this.element.style.display = 'none';
    }

    remove(): void {
        this._removeEventListeners()
        this.element.remove();
    }

    addClass() {
        if (this.props && this.props.classes) {
            const { classes } = this.props;
            const classArr = classes.split(' ');
            classArr.forEach((className: string) => {
                this.element.classList.add(className);
            });
        }
    }


    removeClass(className: string): void {
        this.element.classList.remove(className);
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
