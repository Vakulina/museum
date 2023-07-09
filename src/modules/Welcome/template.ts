import monalizaImg from '../../assets/img/welcome_monaliza.jpg';
import jDarkImg from '../../assets/img/welcome_JDark.jpg';
import dama3Img from '../../assets/img/welcome_dama3.jpg';
import dama4Img from '../../assets/img/welcome_shtorm.jpg';
import dama5Img from '../../assets/img/welcome_scientist.jpg';

export const getTemplate = (styles: any) => `
<div class="container ${styles.welcome__container}">
    <div class="${styles.welcome__text}">
        <h2 class="section__title section__title_dark-theme ${styles.welcome__title}">Welcome to&nbsp;the&nbsp;Louvre
        </h2>
        <p class="${styles.welcome__paragraf} section__paragraf section__paragraf_dark-theme">From the castle to the
            museum</p>
        <a class="section__link ${styles.welcome__link}" href="./tours/tour1.html" target="_blank" rel="noopener">
            Discover the Louvre
        </a>
    </div>


    <!-- Slider main container -->
    <div class="swiper ${styles['welcome__swiper-container']}">
        <div class="${styles.welcome__swiper}">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
                <!-- Slides -->
                <div class="${styles.welcome__slide} swiper-slide">
                    <div class="${styles['welcome__image-container']}">
                        <img class="${styles.welcome__image}" src="${monalizaImg}"   alt="Mona Liza">
                    </div>
                </div>
                <div class="${styles.welcome__slide} swiper-slide">
                    <div class="${styles['welcome__image-cotainer']}">
                        <img class="${styles.welcome__image}" src="${jDarkImg}" alt="J'Anna Dark">
                    </div>
                </div>
                <div class="${styles.welcome__slide} swiper-slide">
                    <div class="${styles['welcome__image-cotainer']}">
                        <img class="${styles.welcome__image}" src="${dama3Img}" alt="Medieval lady">
                    </div>
                </div>
                <div class="${styles.welcome__slide} swiper-slide">
                    <div class="${styles['welcome__image-cotainer']}">
                        <img class="${styles.welcome__image}" src="${dama4Img}" alt="Shtorm">
                    </div>
                </div>
                <div class="${styles.welcome__slide} swiper-slide">
                    <div class="${styles['welcome__image-cotainer']}">
                        <img class="${styles.welcome__image}" src="${dama5Img}"
                            alt="Medieval scientist">
                    </div>
                </div>

            </div>
            <div class="${styles['image-pagination']}">
                <div class="${styles['image-pagination__fraction']}">
                    <div class="${styles['image-pagination__current']}">01</div>
                    <div class="${styles['image-pagination__separator']}">|</div>
                    <div class="${styles['image-pagination__total']}">01</div>
                </div>

                <div class="${styles['image-pagination__bullets']}"></div>
                <!-- If we need navigation buttons -->
                <div class="${styles['image-pagination__arrows']}">
                    <div class="${styles['image-pagination__left-arrow']}"></div>
                    <div class="${styles['image-pagination__right-arrow']}"></div>
                </div>
            </div>
        </div>

    </div>
</div>
`;
