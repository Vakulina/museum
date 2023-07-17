import { Component, ComponentProps } from "../../services/Component";
import { getTemplate } from "./template";
import { TicketType } from "../../utiles.ts/types";
import s from "./Order.module.scss";
import { ticketCount } from "../../components/TicketsCount";

// export const modalWithForm = new Modal("div", {});
/* ДОБАВЛЯТЬ И УДАЛЯТЬ TOOL когда задано время
 const isValiTime = () => {

  if (timeInput.validity.valid) {
document.querySelector('.time-input').classList.add('tool');
  }
  else{
    document.querySelector('.time-input').classList.remove('tool');
  }
}; */

class Order extends Component {
  ticketType: TicketType;

  discountForSenior: number;

  result: HTMLFormElement | null;

  constructor(target = "div", props: ComponentProps) {
    super(target, props);
    this.discountForSenior = 0.5;
    this.ticketType = this.getTicketTypeFromLocalStorage();
    this.result = null;
  }

  private getTicketTypeFromLocalStorage() {
    return (
      (localStorage.getItem("ticketType") as TicketType) || "permanent-type"
    );
  }

  markup() {
    this.addAttribute("id", "order");
    return getTemplate(s, this.ticketType);
  }

  componentDidMount(): void {
    document.querySelector<HTMLDivElement>("#ticketContent")?.replaceWith(ticketCount.element);
    document.querySelector('#orderTickets')?.classList.add(`${s.order__count}`);
    this.result = this.element.querySelector("#result") as HTMLFormElement;
  }

  setSum(sum: number) {
    const resultOutputs = document.querySelectorAll("#result");
    resultOutputs.forEach((item) => {
      if (item instanceof HTMLOutputElement) item.innerHTML = String(sum);
      if (item instanceof HTMLInputElement) item.value = String(sum);
    });
  }

  setSelectedRadioButton(radioButtonId: TicketType) {
    const radioButton = document.querySelector(`#${radioButtonId}`) as HTMLInputElement;
    if (radioButton) {
      radioButton.checked = true;
    }
  }

  setTicketType() {
    const selectElement = this.element.querySelector(
      `.${s.order__select_types}`,
    ) as HTMLSelectElement;
    this.ticketType = selectElement.value as TicketType;

    this.setSelectedRadioButton(this.ticketType);

    localStorage.setItem("ticketType", this.ticketType);
  }

  getPrice() {
    const optionElements = this.element.querySelectorAll(`.${s.order__select} option`);
    let selectedOption: HTMLOptionElement | undefined;
    optionElements.forEach((option) => {
      if ((option instanceof HTMLOptionElement) && option.value === this.ticketType) {
        selectedOption = option;
      }
    });

    const dataValue = selectedOption?.dataset.value;
    return dataValue;
  }

  calculation() {
    const price = this.getPrice();
    const basicTicketsInput = document.getElementById(
      "countBasic",
    ) as HTMLInputElement;
    const basicTickets = Number(basicTicketsInput?.value);
    const seniorTicketsInput = document.getElementById(
      "countSenior",
    ) as HTMLInputElement;
    const seniorTickets = Number(seniorTicketsInput.value);
    const sum = price && (typeof price === 'number') ? price * basicTickets + price * this.discountForSenior * seniorTickets : 0;
    this.setSum(sum);
    return sum;
  }
}

export const orderElement = new Order("div", {
  classes: s.order,
  events: {
    click(e: MouseEvent) {
      if (!(e.target instanceof HTMLElement)) return;

      orderElement.calculation();
    },
    change(e: InputEvent) {
      if (!(e.target instanceof HTMLSelectElement)) return;
      if (e.target.name === "type-ticket") {
        orderElement.setTicketType();
      }
    },
  },
});
