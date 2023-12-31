export const getTemplate = (
  styles: any,
) => {
  return `
<p class="${styles.ticketsCount__paragraf}">Basic 18+</p>
<div class="${styles.ticketsCount__buttons}">
    <button class="${styles.ticketsCount__button}" id="decreaseBasicTicketsButton" type="button">–</button>
    <input class="${styles.ticketsCount__button}  ${styles.ticketsCount__button_number} ${styles.ticketsCount__amount} basic" type="number"
        id="countBasic" min="0" max="10" value="" readonly>
    <button class="${styles.ticketsCount__button}" type="button" id="increaseBasicTicketsButton">+</button>
</div>
<p class="s${styles.ticketsCount__paragraf}">Senior 65+</p>
<div class="${styles.ticketsCount__buttons}">
    <button class="${styles.ticketsCount__button}" id="decreaseSeniorTicketsButton" type="button">–</button>
    <input class="${styles.ticketsCount__button}  ${styles.ticketsCount__button_number} ${styles.ticketsCount__amount}" type="number"
        id="countSenior" min="0" max="10" value="" readonly>
    <button class="${styles.ticketsCount__button}" type="button" id="increaseSeniorTicketsButton">+</button>
</div>
`;
};
