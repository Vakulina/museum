import { Component } from "../../services/Component";
import { getTemplate } from "./template";
import s from "./Parralax.module.scss";

class Parralax extends Component {
  markup() {
    this.addAttribute("id", "parralax");
    return getTemplate(s);
  }
}

export const parallax = new Parralax("section", {
  classes: s.parralax,
});
