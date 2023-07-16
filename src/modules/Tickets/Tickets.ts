import { Component } from "../../services/Component";
import { getTemplate } from "./template";
import s from "./Tickets.module.scss";

class Tickets extends Component {
  markup() {
    this.addAttribute("id", "tickets");
    return getTemplate(s);
  }
}

export const tickets = new Tickets("section", {
  classes: s.tickets,
});
