export type PropsCardTemplate = {
  styles: any;
  img: any;
  alt: string;
  title: string;
  src:string;
};

export const getTemplate = (props: PropsCardTemplate) => {
  const {
    styles, img, alt, title, src,
  } = props;
  return `
      <div class="${styles.card__wrapper}">
        <img class="${styles.card__image}" src="${img}" alt="${alt}">
        <h3 class="${styles.card__title}">${title}</h3>
        <p class="${styles.card__paragraph}">360° Virtual Tour</p>
        <p class="${styles.card__paragraph}">Google Street Panorama View</p>
      </div>
      <template id="frame-template">
      <div>
<iframe class="maps-frame" src="${src}"
 width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy">
</iframe>
</div>
</template>
    `;
};
