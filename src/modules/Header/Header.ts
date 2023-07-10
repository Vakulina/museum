import { Component } from "../../services/Component";
import { getTemplate } from "./template";
import s from "./Header.module.scss";

class Header extends Component {
  markup() {
    this.addAttribute("id", "header");
    return getTemplate(s);
  }
}

export const header = new Header("header", {
  classes: s.header,
  events: {
    click(e: MouseEvent) {
      if ((e.target as HTMLElement).dataset.btn === "toogle-burger") {
        header.toogleClass(`${s.header_open}`);
      }
      if ((e.target as HTMLElement).dataset.btn !== "toogle-burger") {
        header.removeClass(`${s.header_open}`);
      }
    },
  },
});
