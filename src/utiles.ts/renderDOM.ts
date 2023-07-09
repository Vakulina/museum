import { Component } from "../services/Component";

export function render(query: string, component: Component) {
  const root = document.querySelector(query);
  if (root) {
    root.append(component.element);
    component.dispatchComponentDidMount();
    return root;
  }
  throw new Error(`компонент ${query} не найден в DOM`);
}
