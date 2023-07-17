/* eslint-disable no-useless-escape */
import louvreImg from "../../assets/img/overview_louvre.jpg";

export const getTemplate = (
  styles: any,
  type = "permanent-type",
) => `
<form class="${styles.order__form}" id="orderForm">
    <div class="${styles.order__column}">
    <div class="${styles.order__header}">
        <div class="${styles.order__logo}"></div>
        <h2 class="${styles.order__title}">Booking tickets</h2>
        <p class="${styles.order__paragraf}">Tour to Louvre</p>
        <div class="${styles.order__line}"></div>
    </div>
    <fieldset class="${styles.order__fieldset}  ${styles.order__fieldset_type_detailes}">
        <div class="${styles.order__detailes}">

        <div class="${styles.order__date}">
            <input  type="date" class="${styles.order__input} ${styles.order__input_type_date}" data-placeholder="Date" id="input-date" required>
            <span class="${styles.order__error} ${styles.order__error_select}" id="input-date-error">
            Choose a date no earlier than tomorrow</span>
            </div>
       
        <div class="${styles.order__time}">
            <select class="${styles.order__input} ${styles.order__input_type_time}" required id="input-time"
            data-placeholder="Time">
            <option value="">&nbsp;</option>
            <option value="9:00">9:00</option>
            <option value="9:30">9:30</option>
            <option value="10:00">10:00</option>
            <option value="10:30">10:30</option>
            <option value="11:00">11:00</option>
            <option value="11:30">11:30</option>
            <option value="12:00">12:00</option>
            <option value="12:30">12:30</option>
            <option value="13:00">13:00</option>
            <option value="13:30">13:30</option>
            <option value="14:00">14:00</option>
            <option value="14:30">14:30</option>
            <option value="15:00">15:00</option>
            <option value="15:30">15:30</option>
            <option value="16:00">16:00</option>
            <option value="16:30">16:30</option>
            <option value="17:00">17:00</option>
            <option value="17:30">17:30</option>
            <option value="18:00">18:00</option>
            </select>

            <div class="${styles.order__arrow}"></div>
            <span class="${styles.order__error} ${styles.order__error_select}" id="input-time-error"></span>
        </div>
        
        </div>


        <div class="${styles.order__text}">
        <input type="text" id="name" class="${styles.order__input} ${styles.order__input_type_text}"
            placeholder="Name" pattern="[a-zа-яA-ZА-Я\s]{3,15}" required>
        </div>

        <span class="${styles.order__error}" id="name-error">
        Please use only letters of the Russian or English alphabet and spaces (min 3, max 15 characters)
        </span>

        <div class="${styles.order__email}">
        <input class="${styles.order__input} ${styles.order__input_type_email}" placeholder="E-mail"
            id="email" required type='email' >
        </div>
        <span class="${styles.order__error}" id="email-error">Enter an address in the following format:
        username@example.com </span>

        <div class="${styles.order__tel}">
        <input type="text" class="${styles.order__input} ${styles.order__input_type_tel}" placeholder="Phone"
            id="phone"  pattern='^[+]{0,1}[0-9]{11,15}$' required />
        </div>
        <span class="${styles.order__error}" id="phone-error">
        Enter the phone number in a convenient format: without separators, using a hyphen or space (up to 10 digits)
        </span>

        <div class="${styles.order__types}">
            <select class="${styles.order__select} ${styles.order__select_types}" name = "type-ticket" id="tycket-type">
                <option value='permanent-type' data-value='20' ${type === "permanent-type" && 'selected'}>Permanent exhibition</option>
                <option value='temporary-type' data-value='25' ${type === "temporary-type" && 'selected'}>Temporary exhibition</option>
                <option value='combined-type'  data-value='40' ${type === "combined-type" && 'selected'}>Combined Admission</option>
            </select>
        <div class="${styles.order__arrow}"></div>
        </div>

    </fieldset>
    <fieldset class="${styles.order__fieldset}  ${styles.order__fieldset_type_tickets}">
        <h3 class="${styles.order__subtitle}">Entry ticket</h3>
        <div class="${styles.order__line}"></div>
        <div class="${styles.order__payment}">
        <div class="${styles.order__overview}">
            <p class="${styles["order__overview-title"]}">Overview</p>
            <p class="${styles["order__overview-subtitle"]}">Tour to Louvre</p>
            <output name="overview-date"
            class="${styles["order__overview-paragraf"]} ${styles["order__overview-paragraf_type_date"]}">Friday,
            August
            19</output>
            <output name="overview-time"
            class="${styles["order__overview-paragraf"]} ${styles["order__overview-paragraf_type_time"]}">16 :
            30</output>
            <p class="${styles["order__overview-paragraf"]} ${styles["order__overview-paragraf_type_operations"]}">
            Temporary
            exhibition</p>
        </div>
        <img class="${styles.order__image}" alt="louvre" src="${louvreImg}">
        </div>
        <div class="${styles.order__columns}">
        <div id='ticketContent'>
       
        </div>
        <div   class=${styles.order__result}>
            <div class="${styles.order__line}"></div>
            <p class="${styles.order__paragraf}">
            Total €
            <output name="result" id="result">0</output>
            </p>  
        </div>
        </div>

    </fieldset>

    </div>
    <div class="${styles.order__column}">
    <button type="submit" class="popup__button submit">Book</button>
    </div>
</form>`;
