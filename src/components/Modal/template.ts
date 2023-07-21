export const getTemplate = (styles: any, postfix?:string) => {
  return `
  <div class="${styles.modal__overlay}"></div>
  <div class="${styles.modal__content}" >
  <div id='modalContent'></div>
    <button class="${styles.modal__close} ${styles[`modal__close_${postfix}`]}"></button>
  </div>`;
};
