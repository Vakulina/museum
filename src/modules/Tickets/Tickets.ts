import { Component, ComponentProps } from "../../services/Component";
import { getTemplate } from "./template";
import { TicketType } from "../../utiles.ts/types";
import s from "./Tickets.module.scss";
import { Modal } from "../../components/Modal";
import { orderElement } from "../Order";
import { ticketsButtons } from "../../components/TicketsCount";
import { render } from "../../utiles.ts/renderDOM";

class Tickets extends Component {
  discountForSenior: number;

  ticketType: TicketType;

  listTicketsTypes: NodeListOf<Element> | null;

  result: HTMLFormElement | null;

  modalWithForm: Modal | null;

  constructor(target = "section", props: ComponentProps) {
    super(target, props);
    this.discountForSenior = 0.5;
    this.ticketType = this.getTicketTypeFromLocalStorage();
    this.listTicketsTypes = null;
    this.result = null;
    this.modalWithForm = null;
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
    this.element
      .querySelector("#ticketsContent")
      ?.replaceWith(ticketsButtons.element);
  }

  handleRadioChange() {
    let selectedType;
    this.listTicketsTypes?.forEach((radioButton) => {
      if (
        radioButton instanceof HTMLInputElement
        && radioButton.type === "radio"
        && radioButton.checked
      ) {
        selectedType = radioButton.id;
      }
    });
    if (selectedType) {
      this.setTicketType(selectedType);
      const selectElement = document.querySelector(
        `select[name="type-ticket"]`,
      ) as HTMLSelectElement;
      selectElement.value = selectedType;
      localStorage.setItem("ticketType", this.ticketType);
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
    const resultOutputs = document.querySelectorAll("#result");
    resultOutputs.forEach((item) => {
      if (item instanceof HTMLOutputElement) item.innerHTML = String(sum);
      if (item instanceof HTMLInputElement) item.value = String(sum);
    });
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
    const seniorTickets = Number(seniorTicketsInput?.value);
    const sum = price * basicTickets + price * this.discountForSenior * seniorTickets;
    this.setSum(sum);
    return sum;
  }

  markup() {
    this.addAttribute("id", "tickets");
    return getTemplate(s);
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
        if (!this.modalWithForm) {
          this.modalWithForm = new Modal("div", {}, orderElement.element);
          render("#content", [this.modalWithForm]);
        }
        this.modalWithForm.dispatchComponentDidMount();
        this.modalWithForm.activate();
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
