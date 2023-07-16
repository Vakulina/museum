export const getTemplate = (styles: any, children: HTMLElement) => {
  return `
  <div class="${styles.modal__overlay}"></div>
  <div class="${styles.modal__content}">
    ${children.innerHTML}
    <button class="${styles.modal__close}"></button>
  </div>`;
};
