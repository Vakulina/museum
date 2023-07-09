import monalizaImg from "../../assets/img/welcome_monaliza.jpg";
import jDarkImg from "../../assets/img/welcome_JDark.jpg";
import dama3Img from "../../assets/img/welcome_dama3.jpg";
import dama4Img from "../../assets/img/welcome_shtorm.jpg";
import dama5Img from "../../assets/img/welcome_scientist.jpg";

export const getTemplate = (styles: any) => `
<div class="${styles.welcome__container}">
<div class="container explore__container">
    <div class="explore__text">
        <h2 class="section__title section__title_dark-theme explore__title">Picture explore</h2>
        <p class="section__paragraf section__paragraf_dark-theme explore__paragraf">Las Meninas is a 1656
            painting by Diego Velázquez, the leading artist&nbsp;of&nbsp;the&nbsp;Spanish Golden Age.</p>
        <p class="section__paragraf section__paragraf_dark-theme explore__paragraf">It was cleaned in 1984
            to remove a <span class="explore__accent">"yellow veil"</span> of dust that had gathered since
            the previous restoration in the 19th century.</p>
        <p class="section__paragraf section__paragraf_dark-theme explore__paragraf">The cleaning provoked
            furious protests, not because the picture had been damaged in any way, but because it looked
            different.</p>
    </div>
    <div class="explore-slider">

        <div class="explore-slider__separator"></div>
        <div class="explore-slider__image">
            <img src="./assets/img/explore_before.png" alt="picture befor restavrate">
        </div>
        <div class="explore-slider__image explore-slider__new-image">
            <img src="./assets/img/restavrate.jpg" alt="picture after restavrate">
        </div>

    </div>

</div>
`;
