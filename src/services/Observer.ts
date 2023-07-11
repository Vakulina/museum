export type ObserverTarget = Element | Array<Element>;
export type ObserverCallback = (
  entries: IntersectionObserverEntry,
  observer: Observer,
) => void;
export type EventMapValue = {
  callback: ObserverCallback;
};
export type EventMap = Map<ObserverTarget, Array<EventMapValue>>;

export class Observer {
  private observer: IntersectionObserver;

  private eventMap: EventMap = new Map();

  constructor(options?: IntersectionObserverInit) {
    this.observer = new IntersectionObserver(
      this.watchCallback.bind(this),
      options,
    );
  }

  private watchCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      const { target } = entry;
      const events = this.eventMap.get(target);
      if (!events) return;
      events.forEach((item) => {
        const { callback } = item;
        callback(entry, this);
      });
    });
  };

  public observe = (target: ObserverTarget, callback: ObserverCallback) => {
    if (Array.isArray(target)) {
      target.forEach((item) => {
        this.subscribe(item, callback);
        this.observer.observe(item);
      });
    } else {
      this.subscribe(target, callback);
      this.observer.observe(target);
    }
  };

  public unobserve = (target: ObserverTarget, callback: ObserverCallback) => {
    if (Array.isArray(target)) {
      target.forEach((item) => {
        this.unsubscribe(item, callback);
        this.observer.unobserve(item);
      });
    } else {
      this.unsubscribe(target, callback);
      this.observer.unobserve(target);
    }
  };

  public disconnect() {
    this.observer.disconnect();
    this.eventMap.clear();
  }

  private subscribe = (target: ObserverTarget, callback: ObserverCallback) => {
    let events = this.eventMap.get(target);
    if (!events) {
      events = [];
      this.eventMap.set(target, events);
    }

    const findIndex = this.findSubscribeIndex(target, callback);
    if (findIndex !== -1) return;

    events.push({ callback });
  };

  private unsubscribe = (
    target: ObserverTarget,
    callback: ObserverCallback,
  ) => {
    const events = this.eventMap.get(target);
    if (!events) return;
    const findIndex = this.findSubscribeIndex(target, callback);
    if (findIndex === -1) return;
    events.splice(findIndex, 1);
    if (events.length <= 0) this.eventMap.delete(target);
  };

  private findSubscribeIndex = (
    target: ObserverTarget,
    callback: ObserverCallback,
  ) => {
    const events = this.eventMap.get(target);
    if (!events) return -1;
    const findIndex = events.findIndex((item) => {
      const { callback: itemCallback } = item;
      const isCallback = callback === itemCallback;
      return isCallback;
    });
    return findIndex;
  };
}

export const observer = new Observer();
