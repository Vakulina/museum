import { Component } from "../services/Component";

export function render(query: string, components: Component[]) {
  const root = document.querySelector(query);

  if (root) {
    const fragment = document.createDocumentFragment();
    components.forEach((component) => {
      fragment.append(component.element);
    });

    root.append(fragment);
    components.forEach((component) => {
      component.dispatchComponentDidMount();
    });

    return root;
  }

  throw new Error(`Компонент ${query} не найден в DOM`);
}
