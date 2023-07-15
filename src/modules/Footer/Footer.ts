import { Component } from "../../services/Component";
import { getTemplate } from "./template";
import s from "./Footer.module.scss";

class Footer extends Component {
  markup() {
    this.addAttribute("id", "footer");
    return getTemplate(s);
  }
}

export const footer = new Footer("footer", {
  classes: s.footer,
});
