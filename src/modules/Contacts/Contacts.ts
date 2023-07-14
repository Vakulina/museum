import { Component } from "../../services/Component";
import { getTemplate } from "./template";
import s from "./Contacts.module.scss";

class Contacts extends Component {
  markup() {
    this.addAttribute("id", "contacts");
    return getTemplate(s);
  }
}

export const contacts = new Contacts("section", {
  classes: s.contacts,
});
