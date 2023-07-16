import { Component, ComponentProps } from "../../services/Component";
import { getTemplate } from "./template";
import { TicketType } from "../../utiles.ts/types";
import s from "./Tickets.module.scss";

class Tickets extends Component {
  basicTickets: number;

  seniorTickets: number;

  discountForSenior: number;

  ticketType: TicketType;

  listTicketsTypes: NodeListOf<Element> | null;

  result: HTMLFormElement | null;

  constructor(target = "section", props: ComponentProps) {
    super(target, props);
    this.basicTickets = 1;
    this.seniorTickets = 0;
    this.discountForSenior = 0.5;
    this.ticketType = "permanent-type";
    this.listTicketsTypes = null;
    this.result = null;
  }

  protected componentDidMount(): void {
    this.listTicketsTypes = document.querySelectorAll(`.${s.tickets__radio}`);
    this.calculation();
    this.result = this.element.querySelector('#result') as HTMLFormElement;
  }

  handleRadioChange() {
    let selectedType;
    this.listTicketsTypes?.forEach((radioButton) => {
      if (radioButton instanceof HTMLInputElement && (radioButton.type === 'radio') && (radioButton.checked)) {
        selectedType = radioButton.id;
      }
    });
    if (selectedType) this.ticketType = selectedType as TicketType;
    this.calculation();
  }

  public setBasicTickets(basicTickets: number) {
    if (basicTickets < 0 || basicTickets > 10) return;
    this.basicTickets = basicTickets;
    const countBasicInput = this.element.querySelector('#countBasic') as HTMLInputElement;
    countBasicInput.value = String(this.basicTickets);
  }

  public setSeniorTickets(seniorTickets: number) {
    if (seniorTickets < 0 || seniorTickets > 10) return;
    this.seniorTickets = seniorTickets;
    const countSeniorInput = this.element.querySelector('#countSenior') as HTMLInputElement;
    countSeniorInput.value = String(this.seniorTickets);
  }

  setTicketType(ticketType: TicketType) {
    this.ticketType = ticketType;
  }

  getPrice() {
    return Number((this?.element?.querySelector(`input[id="${this.ticketType}"]`) as HTMLInputElement).value);
  }

  setSum(sum: number) {
    if (this.result) this.result.value = sum;
  }

  calculation() {
    const price = this.getPrice();
    const sum = price * this.basicTickets + price * this.discountForSenior * this.seniorTickets;
    this.setSum(sum);
    return sum;
  }

  markup() {
    this.addAttribute("id", "tickets");
    return getTemplate(s, this.basicTickets, this.seniorTickets);
  }
}

export const tickets = new Tickets("section", {
  classes: s.tickets,
  events: {
    click(e: MouseEvent) {
      if (!(e.target instanceof HTMLElement)) return;

      if (e.target.id === "decreaseBasicTicketsButton") {
        const nextSibling = e.target?.nextElementSibling as HTMLInputElement;
        tickets.setBasicTickets(Number(nextSibling.value) - 1);
      }
      if (e.target.id === "increaseBasicTicketsButton") {
        const prevSibling = e.target?.previousElementSibling as HTMLInputElement;
        tickets.setBasicTickets(Number(prevSibling.value) + 1);
      }
      if (e.target.id === "decreaseSeniorTicketsButton") {
        const nextSibling = e.target?.nextElementSibling as HTMLInputElement;
        tickets.setSeniorTickets(Number(nextSibling.value) - 1);
      }
      if (e.target.id === "increaseSeniorTicketsButton") {
        const prevSibling = e.target?.previousElementSibling as HTMLInputElement;
        tickets.setSeniorTickets(Number(prevSibling.value) + 1);
      }
      tickets.calculation();
    },
    change(e: InputEvent) {
      if (!(e.target instanceof HTMLInputElement)) return;
      if (e.target.name === 'type-ticket') {
        tickets.handleRadioChange();
      }
    },
  },
});
