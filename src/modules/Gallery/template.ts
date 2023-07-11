export const getTemplate = (styles: any, children?: HTMLElement) => `
<div class="${styles.gallery__container}">
    <h2 class="${styles.gallery__title}">Art Gallery</h2>
    <div class="${styles["gallery__image-container"]}">
        <div class="${styles["gallery__inner-container"]}">
        ${children?.innerHTML}
        </div>
        <div class="${styles.gallery__overlay}"></div>
    </div>
</div>
`;
