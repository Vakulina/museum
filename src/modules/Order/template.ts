import louvreImg from "../../assets/img/overview_louvre.jpg";

export const getTemplate = (
  styles: any,
  type = "permanent-type",
) => `
<form class="${styles.order__form}">
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
            <input type="date" class="${styles.order__input} ${styles.order__input_type_date}" data-placeholder="Date"
            required>

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
        <input type="text" class="${styles.order__input} ${styles.order__input_type_email}" placeholder="E-mail"
            id="email" required pattern="^[a-zA-Z0-9_-]{3,15}@[a-zA-Z0-9-]{4,}\.[a-zA-Z]{2,}$">
        </div>
        <span class="${styles.order__error}" id="email-error">Enter an address in the following format:
        username@example.com </span>

        <div class="${styles.order__tel}">
        <input type="tel" class="${styles.order__input} ${styles.order__input_type_tel}" placeholder="Phone"
            id="phone" pattern="^([\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$" required>
        </div>
        <span class="${styles.order__error}" id="phone-error">
        Enter the phone number in a convenient format: without separators, using a hyphen or space (up to 10 digits)
        </span>

        <div class="${styles.order__types}">
        <select class="${styles.order__select} ${styles.order__select_types}">
            <option value='permanent-type'>Permanent exhibition</option>
            <option value='temporary-type'>Temporary exhibition</option>
            <option value='combined-type'>Combined Admission</option>
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
        </div>

    </fieldset>

    </div>
    <div class="${styles.order__column}">
    </div>
</form>`;
