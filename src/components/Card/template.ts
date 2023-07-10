export type PropsCardTemplate = {
  styles: any;
  img: any;
  alt: string;
  title: string;
};

export const getTemplate = (props: PropsCardTemplate) => {
  const { styles, img, alt, title } = props;
  return `
      <a class="${styles.card__wrapper}" href="#" target="_blank" rel="noopener">
        <img class="${styles.card__image}" src="${img}" alt="${alt}">
        <h3 class="${styles.card__title}">${title}</h3>
        <p class="${styles.card__paragraph}">360° Virtual Tour</p>
        <p class="${styles.card__paragraph}">Google Street Panorama View</p>
      </a>
    `;
};
