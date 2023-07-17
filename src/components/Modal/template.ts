export const getTemplate = (styles: any) => {
  return `
  <div class="${styles.modal__overlay}"></div>
  <div class="${styles.modal__content}" >
  <div id='modalContent'></div>
    <button class="${styles.modal__close}"></button>
  </div>`;
};
