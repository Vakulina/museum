export const getTemplate = (styles: any) => `
<div class="container ${styles.footer__container}">
<a class="${styles['footer__logo-link']}" href="./index.html">
    <div class="${styles.footer__logo}"></div>
    <p class="${styles.footer__paragraf}">Louvre</p>
</a>
<nav class="${styles.footer__nav}">
    <ul class="${styles.footer__list}">
        <li class="${styles.footer__item}"><a class="${styles.footer__link}" href="#visiting">Visiting</a></li>
        <li class="${styles.footer__item}"><a class="${styles.footer__link}" href="#explore">Explore</a></li>
        <li class="${styles.footer__item}"><a class="${styles.footer__link}" href="#video">Video</a></li>
    </ul>
    <ul class="${styles.footer__list}">
        <li class="${styles.footer__item}"><a class="${styles.footer__link}" href="#gallery">Gallery</a></li>
        <li class="${styles.footer__item}"><a class="${styles.footer__link}" href="#tickets">Tickets</a></li>
        <li class="${styles.footer__item}"><a class="${styles.footer__link}" href="#contacts">Contacts</a></li>
    </ul>
</nav>

        <ul class="${styles["footer__social-list"]}">
        <li class="${styles['footer__social-item']}">
            <a class="${styles['footer__social-link']} ${styles['footer__social-link_youtube']}"
                href="https://www.youtube.com/user/louvre" target="_blank"></a>
        </li>
        <li class="${styles['footer__social-item']}">
            <a class="${styles['footer__social-link']} ${styles['footer__social-link_instagram']}"
                href="https://www.instagram.com/museelouvre/" target="_blank"></a>
        </li>
        <li class="${styles['footer__social-item']}">
            <a class="${styles['footer__social-link']} ${styles['footer__social-link_facebook']}"
                href="https://www.facebook.com/museedulouvre" target="_blank"></a>
        </li>
        <li class="${styles['footer__social-item']}">
            <a class="${styles['footer__social-link']} ${styles['footer__social-link_twitter']}"
                href="http://twitter.com/museelouvre" target="_blank"></a>
        </li>
        <li class="${styles['footer__social-item']}">
            <a class="${styles['footer__social-link']} ${styles['footer__social-link_pinterest']}"
                href="https://www.pinterest.fr/museedulouvre/" target="_blank"></a>
        </li>
    </ul>

        </div>
        <div class="${styles.footer__line}"></div>
        <div class="${styles.footer__container}">
            <p class="${styles.footer__coopiright}">© 2021 - 2023</p>
            <p class="${styles.footer__coopiright}">
            <a class='${styles.footer__link}' href="https://rs.school/" target="_blank"
                    rel="noopener">The
                    Rolling Scopes School</a></p>
            <p class="${styles.footer__coopiright}">Viktoria Yakovleva</p>
        </div>`;
