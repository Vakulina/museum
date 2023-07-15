import { Component } from "../services/Component";

export function render(query: string, components: Component[]) {
  const root = document.querySelector(query);
  if (root) {
    components.forEach((component) => {
      root.append(component.element);
    });
    components.forEach((component) => {
      component.dispatchComponentDidMount();
    });
    return root;
  }
  throw new Error(`компонент ${query} не найден в DOM`);
}
