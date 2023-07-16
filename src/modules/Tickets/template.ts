import venereImg from "../../assets/img/venere.jpg";

export const getTemplate = (styles: any) => `
<div class="${styles.tickets__container}">
    <h2 class="${styles.tickets__title}">Buy tickets</h2>
    <div class="${styles["tickets__two-columns"]}">
        <img class="${styles.tickets__image}" src="${venereImg}" alt="Venus with the shild">
        <form class="${styles.tickets__form}">
            <div class="${styles.tickets__column}">
                <h4 class="${styles.tickets__subtitle}">Ticket Type</h4>
                <div>
                    <input class="${styles.tickets__radio}" type="radio" name="type-ticket" id="answer1" value="20"
                        checked>
                    <label class="${styles["tickets__type-exibition"]}" for="answer1">Permanent exhibition</label>
                </div>
                <div>
                    <input class="${styles.tickets__radio}" type="radio" name="type-ticket" id="answer2" value="25">
                    <label class="${styles["tickets__type-exibition"]}" for="answer2">Temporary exhibition</label>
                </div>
                <div>
                    <input class="${styles.tickets__radio}" type="radio" name="type-ticket" id="answer3" value="40">
                    <label class="${styles["tickets__type-exibition"]}" for="answer3">Combined Admission</label>
                </div>
            </div>

            <div class="${styles.tickets__column} ${styles.tickets__column_amount}">
                <h4 class="${styles.tickets__subtitle} ${styles.tickets__subtitle_amount}">Amount</h4>
                <p class="${styles.tickets__paragraf}">Basic 18+</p>
                <div class="${styles.tickets__buttons}">
                    <button class="${styles.tickets__button}" type="button"
                        onclick="this.nextElementSibling.stepDown()">–</button>
                    <input class="${styles.tickets__button}  ${styles.tickets__button_number} ${styles.tickets__amount}" type="number"
                        id="countBasic" min="0" max="20" value="1" readonly>
                    <button class="${styles.tickets__button}" type="button">+</button>
                </div>
                <p class="s${styles.tickets__paragraf}">Senior 65+</p>
                <div class="${styles.tickets__buttons}">
                    <button class="${styles.tickets__button}" type="button">–</button>
                    <input class="${styles.tickets__button}  ${styles.tickets__button_number} ${styles.tickets__amount}" type="number"
                        id="countSenior" min="0" max="20" value="1" readonly>
                    <button class="${styles.tickets__button}" type="button">+</button>
                </div>
                <p class="${styles.tickets__paragraf}  ${styles.tickets__result}">Total €<output name="result">30</output></p>
                <button class="${styles.tickets__button} ${styles.tickets__button_buy}">Buy Now</button>
            </div>
        </form>
    </div>
</div>`;
