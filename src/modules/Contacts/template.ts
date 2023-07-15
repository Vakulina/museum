export const getTemplate = (styles: any) => `
<div class="${styles.contacts__container}" >
    <h2 class="${styles.contacts__title}">Contacts</h2>
    <div class="${styles.contacts__columns}" >
        <div class="${styles.contacts__adress}">
            <p class="${styles.contacts__paragraf}">Palais Royal</p>
            <p class="${styles.contacts__paragraf}">Musee du Louvre</p>
            <ul class="${styles.contacts__list}">
                <li class="${styles.contacts__item}">address:&nbsp;75001&nbsp;Paris,&nbsp;France</li>
                <li class="${styles.contacts__item}"><a href="tel:+33(0)140205050">phone: +33(0) 1 40 20 50 50</a>
                </li>
                <li class="${styles.contacts__item}"><a href="mailto:info@louvre.fr">mail: info@louvre.fr</a></li>
            </ul>
        </div>


        <div class="${styles.contacts__map}" id="map"></div>
    </div>
</div>`;
