import beforeImg from "../../assets/img/explore_before.png";
import afterImg from "../../assets/img/restavrate.jpg";

export const getTemplate = (styles: any) => `
<div class="${styles.explore__container}">
    <div class="${styles.explore__text}">
        <h2 class="${styles.explore__title}">Picture explore</h2>
        <p class="${styles.explore__paragraf}">Las Meninas is a 1656
            painting by Diego Velázquez, the leading artist&nbsp;of&nbsp;the&nbsp;Spanish Golden Age.</p>
        <p class="${styles.explore__paragraf}">It was cleaned in 1984
            to remove a <span class="${styles.explore__accent}">"yellow veil"</span> of dust that had gathered since
            the previous restoration in the 19th century.</p>
        <p class="${styles.explore__paragraf}">The cleaning provoked
            furious protests, not because the picture had been damaged in any way, but because it looked
            different.</p>
    </div>
    <div class="${styles["explore-slider"]}">
        <div class="${styles["explore-slider__separator"]}"></div>
        <div class="${styles["explore-slider__image"]}">
            <img src="${beforeImg}" alt="picture befor restavrate">
        </div>
        <div class="${styles["explore-slider__image"]} ${styles["explore-slider__new-image"]}">
            <img src="${afterImg}" alt="picture after restavrate">
        </div>
    </div>
</div>
`;
