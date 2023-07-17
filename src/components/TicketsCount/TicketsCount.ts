import { Component, ComponentProps } from "../../services/Component";
import { getTemplate } from "./template";
import s from "./TicketsCount.module.scss";

class TicketCount extends Component {
  basicTickets: number;

  seniorTickets: number;

  constructor(target = "div", props: ComponentProps) {
    super(target, props);
    this.basicTickets = this.getBasicTicketsFromLocalStorage();
    this.seniorTickets = this.getSeniorTicketsFromLocalStorage();
  }

  public setBasicTickets(basicTickets: number) {
    if (basicTickets < 0 || basicTickets > 10) return;
    this.basicTickets = basicTickets;
    const countBasicInput = document.getElementById(
      "countBasic",
    ) as HTMLInputElement;
    countBasicInput.value = String(this.basicTickets);
    this.saveBasicTicketsToLocalStorage(basicTickets);
  }

  public setSeniorTickets(seniorTickets: number) {
    if (seniorTickets < 0 || seniorTickets > 10) return;
    this.seniorTickets = seniorTickets;
    const countSeniorInput = document.getElementById(
      "countSenior",
    ) as HTMLInputElement;
    countSeniorInput.value = String(this.seniorTickets);
    this.saveSeniorTicketsToLocalStorage(seniorTickets);
  }

  markup() {
    this.addAttribute("id", "tickets-count");
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
});
