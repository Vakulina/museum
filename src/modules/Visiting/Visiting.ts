import { Component } from "../../services/Component";
import { getTemplate } from "./template";
import s from "./Visiting.module.scss";
import { Card } from "../../components/Card";
import { Modal } from "../../components/Modal";
import { render } from "../../utiles.ts/renderDOM";
import { cardList } from "./constants";

const children = cardList.map(
  (item) => {
    const card = new Card("button", {
      ...item,
      events: {
        click(e: MouseEvent) {
          if (!(e.target instanceof HTMLElement)) return;
          const modalContent = card.getFrameTemplate();
          const modal = new Modal("div", { id: `${item.id}`, postfix: 'visiting' }, modalContent);
          render(`.${s.visiting__cards}`, [modal]);
          modal.activate();
        },
      },
    });
    return card.element;
  },
);

class Visiting extends Component {
  markup() {
    this.addAttribute("id", "visiting");
    return getTemplate(s);
  }

  protected componentDidMount(): void {
    const container = this.element.querySelector(`.${s.visiting__cards}`);
    if (container) {
      children.forEach((child) => container.appendChild(child));
    }
  }
}

const visiting = new Visiting("section", {
  classes: s.visiting,
  children,
});

export { visiting };
