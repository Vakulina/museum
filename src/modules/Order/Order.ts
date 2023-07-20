/* eslint-disable prefer-destructuring */
import { Component, ComponentProps } from "../../services/Component";
import { getTemplate } from "./template";
import { TicketType } from "../../utiles.ts/types";
import s from "./Order.module.scss";
import { ticketCount } from "../../components/TicketsCount";
import { OrderFormValidator } from "./OrderFormValidator";
import { visitorList } from "../VisitorList";

class Order extends Component {
  ticketType: TicketType;

  discountForSenior: number;

  result: HTMLFormElement | null;

  validation: OrderFormValidator | null;

  constructor(target = "div", props: ComponentProps) {
    super(target, props);
    this.discountForSenior = 0.5;
    this.ticketType = this.getTicketTypeFromLocalStorage();
    this.result = null;
    this.validation = null;
  }

  private getTicketTypeFromLocalStorage(): TicketType {
    return (
      (localStorage.getItem("ticketType") as TicketType) || "permanent-type"
    );
  }

  markup(): string {
    this.addAttribute("id", "order");
    return getTemplate(s, this.ticketType);
  }

  componentDidMount(): void {
    const ticketContent = document.querySelector<HTMLDivElement>("#ticketContent");
    ticketContent?.replaceWith(ticketCount.element);
    const orderTickets = document.querySelector("#orderTickets");
    orderTickets?.classList.add(`${s.order__count}`);
    this.result = this.element.querySelector("#result");
    const form = document.getElementById("orderForm");

    if (form) {
      this.validation = new OrderFormValidator("orderForm");
      const secondColumn = form.lastElementChild;
      if (secondColumn instanceof Element) {
        secondColumn.prepend(visitorList.element);
      }
      const handleFormSubmit = () => {
        this.submit(this.validation!);
        document.querySelector("#modal")?.remove();
      };
      form
        .querySelector("#submit")
        ?.addEventListener("click", handleFormSubmit);
    }
  }

  private submit(validation: OrderFormValidator): void {
    const intermediateResult = validation.handleSubmit.apply(validation);
    const result = {
      ...intermediateResult,
      visitors: visitorList.getVisitors(),
    };
    console.log("SUBMIT:", result);
  }

  setSum(sum: number): void {
    const resultOutputs = document.querySelectorAll("#result");
    resultOutputs.forEach((item) => {
      if (item instanceof HTMLOutputElement) item.innerHTML = String(sum);
      if (item instanceof HTMLInputElement) item.value = String(sum);
    });
  }

  setSelectedRadioButton(radioButtonId: TicketType): void {
    const radioButton = document.querySelector(
      `#${radioButtonId}`,
    ) as HTMLInputElement;
    if (radioButton) {
      radioButton.checked = true;
    }
  }

  setTicketType(): void {
    const selectElement = this.element.querySelector(
      `.${s.order__select_types}`,
    ) as HTMLSelectElement;
    this.ticketType = selectElement.value as TicketType;

    this.setSelectedRadioButton(this.ticketType);

    localStorage.setItem("ticketType", this.ticketType);
  }

  get price(): number | undefined {
    const optionElements = this.element.querySelectorAll(
      `.${s.order__select} option`,
    );
    let selectedOption: HTMLOptionElement | undefined;
    optionElements.forEach((option) => {
      if (
        option instanceof HTMLOptionElement
        && option.value === this.ticketType
      ) {
        selectedOption = option;
      }
    });

    const dataValue = selectedOption?.dataset.value;
    return dataValue ? parseFloat(dataValue) : undefined;
  }

  calculation(): number | null {
    const price = this.price;
    const basicTicketsInput = document.getElementById(
      "countBasic",
    ) as HTMLInputElement;
    const basicTickets = Number(basicTicketsInput?.value);
    const seniorTicketsInput = document.getElementById(
      "countSenior",
    ) as HTMLInputElement;
    const seniorTickets = Number(seniorTicketsInput.value);

    if (typeof price === "number") {
      const sum = price * basicTickets + price * this.discountForSenior * seniorTickets;
      this.setSum(sum);
      return sum;
    }
    console.error("Error with price!");
    return null;
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
