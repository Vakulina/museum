import { Component, ComponentProps } from "../../services/Component";
import { getTemplate } from "./template";
import { TicketType } from "../../utiles.ts/types";
import s from "./Tickets.module.scss";
import { Modal } from "../../components/Modal";
import { orderElement } from "../Order";
import { ticketCount } from "../../components/TicketsCount";

export const modalWithForm = new Modal("div", {
  children: [orderElement],
});
class Tickets extends Component {
  discountForSenior: number;

  ticketType: TicketType;

  listTicketsTypes: NodeListOf<Element> | null;

  result: HTMLFormElement | null;

  constructor(target = "section", props: ComponentProps) {
    super(target, props);
    this.discountForSenior = 0.5;
    this.ticketType = this.getTicketTypeFromLocalStorage();
    this.listTicketsTypes = null;
    this.result = null;
  }

  protected componentDidMount(): void {
    this.listTicketsTypes = document.querySelectorAll(`.${s.tickets__radio}`);
    this.calculation();
    this.result = this.element.querySelector("#result") as HTMLFormElement;
    this.listTicketsTypes.forEach((radio) => {
      if (radio.id === this.ticketType) {
        radio.setAttribute("checked", "true");
      }
    });
  }

  handleRadioChange() {
    let selectedType;
    this.listTicketsTypes?.forEach((radioButton) => {
      if (
        radioButton instanceof HTMLInputElement &&
        radioButton.type === "radio" &&
        radioButton.checked
      ) {
        selectedType = radioButton.id;
      }
    });
    if (selectedType) {
      this.setTicketType(selectedType);
    }
    this.calculation();
  }

  private saveTicketTypeToLocalStorage(ticketType: TicketType) {
    localStorage.setItem("ticketType", ticketType);
  }

  setTicketType(ticketType: TicketType) {
    this.ticketType = ticketType;
    this.saveTicketTypeToLocalStorage(ticketType);
  }

  getPrice() {
    return Number(
      (
        this?.element?.querySelector(
          `input[id="${this.ticketType}"]`,
        ) as HTMLInputElement
      ).value,
    );
  }

  setSum(sum: number) {
    if (this.result) this.result.value = String(sum);
  }

  calculation() {
    const price = this.getPrice();
    const basicTicketsInput = document.getElementById(
      "countBasic",
    ) as HTMLInputElement;
    const basicTickets = Number(basicTicketsInput.value);
    const seniorTicketsInput = document.getElementById(
      "countSenior",
    ) as HTMLInputElement;
    const seniorTickets = Number(seniorTicketsInput.value);
    const sum =
      price * basicTickets + price * this.discountForSenior * seniorTickets;
    this.setSum(sum);
    return sum;
  }

  markup() {
    this.addAttribute("id", "tickets");
    return getTemplate(s, ticketCount.element);
  }

  private getTicketTypeFromLocalStorage() {
    return (
      (localStorage.getItem("ticketType") as TicketType) || "permanent-type"
    );
  }
}

export const tickets = new Tickets("section", {
  classes: s.tickets,
  events: {
    click(e: MouseEvent) {
      if (!(e.target instanceof HTMLElement)) return;
      if (e.target.id === "buyBtn") {
        modalWithForm.activate();
      }
      if (e.target.id === "decreaseBasicTicketsButton") {
        const nextSibling = e.target?.nextElementSibling as HTMLInputElement;
        ticketCount.setBasicTickets(Number(nextSibling.value) - 1);
      }
      if (e.target.id === "increaseBasicTicketsButton") {
        const prevSibling = e.target
          ?.previousElementSibling as HTMLInputElement;
        ticketCount.setBasicTickets(Number(prevSibling.value) + 1);
      }
      if (e.target.id === "decreaseSeniorTicketsButton") {
        const nextSibling = e.target?.nextElementSibling as HTMLInputElement;
        ticketCount.setSeniorTickets(Number(nextSibling.value) - 1);
      }
      if (e.target.id === "increaseSeniorTicketsButton") {
        const prevSibling = e.target
          ?.previousElementSibling as HTMLInputElement;
        ticketCount.setSeniorTickets(Number(prevSibling.value) + 1);
      }
      tickets.calculation();
    },
    change(e: InputEvent) {
      if (!(e.target instanceof HTMLInputElement)) return;
      if (e.target.name === "type-ticket") {
        tickets.handleRadioChange();
      }
    },
  },
});
