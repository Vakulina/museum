export class EventBus {
	private listeners: { [key: string]: Function[] } = {};
	private static __instance: EventBus;

	constructor() {
		if (EventBus.__instance) {
			return EventBus.__instance;
		  }
	  
		this.listeners = {};
		EventBus.__instance = this;
	}

	public on(event: string, callback: Function) {
		if (!this.listeners[event]) this.listeners[event] = [];
		this.listeners[event].push(callback);
	}

	public off(event: string, callback: Function) {
		if (!this.listeners[event]) throw new Error(`No event: ${event}`);
		this.listeners[event] = this.listeners[event].filter(
			(listener) => listener !== callback
		);
	}

	public emit(event: string, ...args: any) {
		if (!this.listeners[event]) throw new Error(`No event: ${event}`);
		this.listeners[event].forEach((listener) => {
			listener(...args);
		});
	}

	public clear() {
		this.listeners = {};
	}

	public emitAndClear(event: string, ...args: any) {
		this.emit(event, ...args);
		this.listeners = {};
	}
}

export const eventBus = new EventBus();
