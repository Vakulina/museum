import venereImg from "../../assets/img/venere.jpg";

export const getTemplate = (styles: any, countBasic:string | number, countSenior:string | number) => `
<div class="${styles.tickets__container}">
    <h2 class="${styles.tickets__title}">Buy tickets</h2>
    <div class="${styles["tickets__two-columns"]}">
        <img class="${styles.tickets__image}" src="${venereImg}" alt="Venus with the shild">
        <form class="${styles.tickets__form}">
            <div class="${styles.tickets__column}">
                <h4 class="${styles.tickets__subtitle}">Ticket Type</h4>
                <div>
                    <input class="${styles.tickets__radio}" type="radio" name="type-ticket" id="permanent-type" value="20"
                        checked>
                    <label class="${styles["tickets__type-exibition"]}" for="permanent-type">Permanent exhibition</label>
                </div>
                <div>
                    <input class="${styles.tickets__radio}" type="radio" name="type-ticket" id="temporary-type" value="25">
                    <label class="${styles["tickets__type-exibition"]}" for="temporary-type">Temporary exhibition</label>
                </div>
                <div>
                    <input class="${styles.tickets__radio}" type="radio" name="type-ticket" id="combined-type" value="40">
                    <label class="${styles["tickets__type-exibition"]}" for="combined-type">Combined Admission</label>
                </div>
            </div>

            <div class="${styles.tickets__column} ${styles.tickets__column_amount}">
                <h4 class="${styles.tickets__subtitle} ${styles.tickets__subtitle_amount}">Amount</h4>
                <p class="${styles.tickets__paragraf}">Basic 18+</p>
                <div class="${styles.tickets__buttons}">
                    <button class="${styles.tickets__button}" id="decreaseBasicTicketsButton" type="button">–</button>
                    <input class="${styles.tickets__button}  ${styles.tickets__button_number} ${styles.tickets__amount}" type="number"
                        id="countBasic" min="0" max="10" value="${countBasic}" readonly>
                    <button class="${styles.tickets__button}" type="button" id="increaseBasicTicketsButton">+</button>
                </div>
                <p class="s${styles.tickets__paragraf}">Senior 65+</p>
                <div class="${styles.tickets__buttons}">
                    <button class="${styles.tickets__button}" id="decreaseSeniorTicketsButton" type="button">–</button>
                    <input class="${styles.tickets__button}  ${styles.tickets__button_number} ${styles.tickets__amount}" type="number"
                        id="countSenior" min="0" max="10" value="${countSenior}" readonly>
                    <button class="${styles.tickets__button}" type="button" id="increaseSeniorTicketsButton">+</button>
                </div>
                <p class="${styles.tickets__paragraf}  ${styles.tickets__result}">Total €<output name="result" id="result">0</output></p>
                <button class="${styles.tickets__button} ${styles.tickets__button_buy}">Buy Now</button>
            </div>
        </form>
    </div>
</div>`;
