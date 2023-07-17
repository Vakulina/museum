import venereImg from "../../assets/img/venere.jpg";

export const getTemplate = (styles: any, ticketCount: HTMLElement) => `
<div class="${styles.tickets__container}">
    <h2 class="${styles.tickets__title}">Buy tickets</h2>
    <div class="${styles["tickets__two-columns"]}">
        <img class="${styles.tickets__image}" src="${venereImg}" alt="Venus with the shild">
        <form class="${styles.tickets__form}">
            <div class="${styles.tickets__column}">
                <h4 class="${styles.tickets__subtitle}">Ticket Type</h4>
                <div>
                    <input class="${styles.tickets__radio}" type="radio" name="type-ticket" id="permanent-type" value="20"
                        >
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
            <div class= "${styles.ticketsCount__column}">
            <h4 class="${styles.tickets__subtitle} ${styles.tickets__subtitle_amount}">Amount</h4>
                ${ticketCount.innerHTML}    
                <p class="${styles.tickets__paragraf}  ${styles.tickets__result}">Total €<output name="result" id="result">0</output></p>
                <button class="${styles.tickets__button} ${styles.tickets__button_buy}" id='buyBtn' type='button'>Buy Now</button>     
            </div>
        </form>
    </div>
</div>`;
