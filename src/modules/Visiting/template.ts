export const getTemplate = (styles: any, children: HTMLElement) => {
  return `
<div class="${styles.visiting__container}">
<h2 class="${styles.visiting__title}">Virtual tour</h2>
<div class="${styles.visiting__cards}">
  ${children.innerHTML}
</div>
</div>
`;
};
