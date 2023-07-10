export class EventBus {
  private listeners: { [key: string]: Function[] } = {};

  constructor() {
    this.listeners = {};
  }

  public on(event: string, callback: Function) {
    if (!this.listeners[event]) this.listeners[event] = [];
    this.listeners[event].push(callback);
  }

  public off(event: string, callback: Function) {
    if (!this.listeners[event]) throw new Error(`No event: ${event}`);
    this.listeners[event] = this.listeners[event].filter(
      (listener) => listener !== callback,
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
