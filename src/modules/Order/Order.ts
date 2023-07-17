import { Component, ComponentProps } from "../../services/Component";
import { getTemplate } from "./template";
import { TicketType } from "../../utiles.ts/types";
import s from "./Order.module.scss";
import { Modal } from "../../components/Modal";
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
  markup() {
    this.addAttribute("id", "order");
    return getTemplate(s);
  }

  componentDidMount(): void {
    document.querySelector<HTMLDivElement>("#ticketContent")?.replaceWith(ticketCount.element);
    document.querySelector('#orderTickets')?.classList.add(`${s.order__count}`);
  }
}

export const orderElement = new Order("div", {
  classes: s.order,
}).element;
