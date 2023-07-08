import menu1Img from '../../assets/img/menu1.png';
import menu2Img from '../../assets/img/menu2.jpg';
import menu3Img from '../../assets/img/menu3.jpg';
import minMenu1Img from '../../assets/img/image450_1.jpg';
import minMenu2Img from '../../assets/img/image450_2.jpg';
import minMenu3Img from '../../assets/img/image450_3.jpg';

export const template =`
<div class="container header__container">
    <a class="header__logo-link" href="#tickets">
        <div class="logo header__logo"></div>
        <h1 class="header__title">Louvre</h1>
    </a>
    <div class="header__burger">
        <span></span>
    </div>
    <div class="header__main-menu">
        <nav class="header__nav">
            <ul class="header__list">
                <li class="header__item"><a class="header__link" href="#visiting">Visiting</a></li>
                <li class="header__item"><a class="header__link" href="#explore">Explore</a></li>
                <li class="header__item"><a class="header__link" href="#video">Video</a></li>
                <li class="header__item"><a class="header__link" href="#gallery">Gallery</a></li>
                <li class="header__item"><a class="header__link" href="#tickets">Tickets</a></li>
                <li class="header__item"><a class="header__link" href="#contacts">Contacts</a></li>
            </ul>
        </nav>
        <div class="header__menu-images">
            <picture class="header__image">
                <source media="(max-width: 450px)" srcset="${minMenu1Img}"/>
                <img src="${menu1Img}" alt="" />
            </picture>
            <picture class="header__image">
                <source media="(max-width: 450px)" srcset="${minMenu2Img}"/>
                <img src="${menu2Img}" alt="" />
            </picture>
            <picture class="header__image">
                <source media="(max-width: 450px)" srcset="${minMenu3Img}"/>
                <img src="${menu3Img}" alt="" />
            </picture>


        </div>
        <div class="header__line"></div>
        <ul class="social-list header__social-list">
            <li class="social-list__social-item">
                <a class="social-list__soc-link social-list__soc-link_youtube"
                    href="https://www.youtube.com/user/louvre" target="_blank"></a>
            </li>
            <li class="social-list__social-item">
                <a class="social-list__soc-link social-list__soc-link_instagram"
                    href="https://www.instagram.com/museelouvre/" target="_blank"></a>
            </li>
            <li class="social-list__social-item">
                <a class="social-list__soc-link social-list__soc-link_facebook"
                    href="https://www.facebook.com/museedulouvre" target="_blank"></a>
            </li>
            <li class="social-list__social-item">
                <a class="social-list__soc-link social-list__soc-link_twitter"
                    href="http://twitter.com/museelouvre" target="_blank"></a>
            </li>
            <li class="social-list__social-item">
                <a class="social-list__soc-link social-list__soc-link_pinterest"
                    href="https://www.pinterest.fr/museedulouvre/" target="_blank"></a>
            </li>
        </ul>

    </div>


</div>`
