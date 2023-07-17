import { Component, ComponentProps } from "../../services/Component";
import { getTemplate } from "./template";
import s from "./TicketsCount.module.scss";

class TicketCount extends Component {
  basicTickets: number;

  id: string;

  seniorTickets: number;

  constructor(target = "div", props: ComponentProps) {
    super(target, props);
    this.id = this.props?.id || "tickets-count";
    this.basicTickets = this.getBasicTicketsFromLocalStorage();
    this.seniorTickets = this.getSeniorTicketsFromLocalStorage();
  }

  public setBasicTickets(basicTickets: number) {
    if (basicTickets < 0 || basicTickets > 10) return;
    this.basicTickets = basicTickets;
    const countBasicInputs = document.querySelectorAll("#countBasic");
    countBasicInputs.forEach((item) => {
      if (item instanceof HTMLInputElement) item.value = String(this.basicTickets);
    });
    this.saveBasicTicketsToLocalStorage(basicTickets);
  }

  public setSeniorTickets(seniorTickets: number) {
    if (seniorTickets < 0 || seniorTickets > 10) return;
    this.seniorTickets = seniorTickets;
    const countSeniorInputs = document.querySelectorAll("#countSenior");
    countSeniorInputs.forEach((item) => {
      if (item instanceof HTMLInputElement) item.value = String(this.seniorTickets);
    });
    this.saveSeniorTicketsToLocalStorage(seniorTickets);
  }

  markup() {
    this.addAttribute("id", this.id);
    return getTemplate(s, this.basicTickets, this.seniorTickets);
  }

  private saveBasicTicketsToLocalStorage(basicTickets: number) {
    localStorage.setItem("basicTickets", String(basicTickets));
  }

  private saveSeniorTicketsToLocalStorage(seniorTickets: number) {
    localStorage.setItem("seniorTickets", String(seniorTickets));
  }

  private getBasicTicketsFromLocalStorage() {
    return parseInt(localStorage.getItem("basicTickets") || "1", 10);
  }

  private getSeniorTicketsFromLocalStorage() {
    return parseInt(localStorage.getItem("seniorTickets") || "0", 10);
  }
}

export const ticketCount = new TicketCount("div", {
  classes: s.tickets,
  events: {
    click(e: MouseEvent) {
      if (!(e.target instanceof HTMLElement)) return;
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
    },
  },
  id: 'orderTickets',
});

export const ticketsButtons = new TicketCount("div", {
  classes: s.tickets,
  events: {
    click(e: MouseEvent) {
      if (!(e.target instanceof HTMLElement)) return;
      if (e.target.id === "decreaseBasicTicketsButton") {
        const nextSibling = e.target?.nextElementSibling as HTMLInputElement;
        ticketsButtons.setBasicTickets(Number(nextSibling.value) - 1);
      }
      if (e.target.id === "increaseBasicTicketsButton") {
        const prevSibling = e.target
          ?.previousElementSibling as HTMLInputElement;
        ticketsButtons.setBasicTickets(Number(prevSibling.value) + 1);
      }
      if (e.target.id === "decreaseSeniorTicketsButton") {
        const nextSibling = e.target?.nextElementSibling as HTMLInputElement;
        ticketsButtons.setSeniorTickets(Number(nextSibling.value) - 1);
      }
      if (e.target.id === "increaseSeniorTicketsButton") {
        const prevSibling = e.target
          ?.previousElementSibling as HTMLInputElement;
        ticketsButtons.setSeniorTickets(Number(prevSibling.value) + 1);
      }
    },
  },
  id: 'ticketsButtons',
});
