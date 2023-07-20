import { Component, ComponentProps } from "../../services/Component";
import { getTemplate } from "./template";
import { TicketType } from "../../utiles.ts/types";
import s from "./Tickets.module.scss";
import { Modal } from "../../components/Modal";
import { orderElement } from "../Order";
import { ticketsButtons } from "../../components/TicketsCount";
import { render } from "../../utiles.ts/renderDOM";

class Tickets extends Component {
  private discountForSenior: number;

  private ticketType: TicketType;

  private listTicketsTypes: NodeListOf<Element> | null;

  private modalWithForm: Modal | null;

  constructor(target = "section", props: ComponentProps) {
    super(target, props);

    this.discountForSenior = 0.5;
    this.ticketType = this.getTicketTypeFromLocalStorage();
    this.listTicketsTypes = null;
    this.modalWithForm = new Modal("div", {}, orderElement.element);
    if (this.modalWithForm) render("#content", [this.modalWithForm]);
  }

  protected componentDidMount(): void {
    this.listTicketsTypes = document.querySelectorAll(`.${s.tickets__radio}`);
    this.updateTicketTypeRadio();
    this.calculatePrice();
    this.element.querySelector("#ticketsContent")?.replaceWith(ticketsButtons.element);
  }

  handleClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (target.id === "buyBtn") {
      this.showOrderModal();
    }
    this.calculatePrice();
  }

  handleInputChange(event: InputEvent): void {
    const target = event.target as HTMLInputElement;
    if (target.name === "type-ticket") {
      this.handleRadioChange();
    }
  }

  private getTicketTypeFromLocalStorage(): TicketType {
    return (localStorage.getItem("ticketType") as TicketType) || "permanent-type";
  }

  private updateTicketTypeRadio(): void {
    this.listTicketsTypes?.forEach((radio) => {
      if (radio.id === this.ticketType) {
        radio.setAttribute("checked", "true");
      }
    });
  }

  private handleRadioChange(): void {
    let selectedType: TicketType | undefined;
    this.listTicketsTypes?.forEach((radioButton) => {
      if (
        radioButton instanceof HTMLInputElement
        && radioButton.type === "radio"
        && radioButton.checked
      ) {
        selectedType = radioButton.id as TicketType;
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
    this.calculatePrice();
  }

  private setTicketType(ticketType: TicketType): void {
    this.ticketType = ticketType;
  }

  private getPrice(): number {
    return Number(
      (this?.element?.querySelector(`input[id="${this.ticketType}"]`) as HTMLInputElement)
        .value,
    );
  }

  private setSum(sum: number): void {
    const resultOutputs = document.querySelectorAll("#result");
    resultOutputs.forEach((item) => {
      if (item instanceof HTMLOutputElement) item.innerHTML = String(sum);
      if (item instanceof HTMLInputElement) item.value = String(sum);
    });
  }

  private calculatePrice(): number {
    const price = this.getPrice();
    const basicTicketsInput = document.getElementById("countBasic") as HTMLInputElement;
    const basicTickets = Number(basicTicketsInput?.value);
    const seniorTicketsInput = document.getElementById("countSenior") as HTMLInputElement;
    const seniorTickets = Number(seniorTicketsInput?.value);
    const sum = price * basicTickets + price * this.discountForSenior * seniorTickets;
    this.setSum(sum);
    return sum;
  }

  private showOrderModal(): void {
    if (!this.modalWithForm) {
      this.modalWithForm = new Modal("div", {}, orderElement.element);
      render("#content", [this.modalWithForm]);
    }
    this.modalWithForm.dispatchComponentDidMount();
    this.modalWithForm.activate();
  }

  markup(): string {
    this.addAttribute("id", "tickets");
    return getTemplate(s);
  }
}

export const tickets = new Tickets("section", {
  classes: s.tickets,
  events: {
    click(e: MouseEvent) {
      if (!(e.target instanceof HTMLElement)) return;
      tickets.handleClick(e);
    },
    change(e: InputEvent) {
      if (!(e.target instanceof HTMLInputElement)) return;
      tickets.handleInputChange(e);
    },
  },
});
