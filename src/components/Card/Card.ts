import { Component } from "../../services/Component";
import { getTemplate } from "./template";
import s from "./Card.module.scss";

// TODO добавить окрытие модального окна с iframe google map
type PropsCard = {
  img: any;
  alt: string;
  title: string;
  src: string;
};
class Card extends Component {
  constructor(target = "button", props: PropsCard & Record<string, any>) {
    super(target, { classes: s.card, ...props });
  }

  markup() {
    const {
      img, alt, title, src,
    } = this.props as PropsCard & Record<string, any>;
    return getTemplate({
      styles: s,
      img,
      alt,
      title,
      src,
    });
  }

  getFrameTemplate() {
    const itemElement = this.element?.querySelector<HTMLTemplateElement>("#frame-template")?.content.querySelector('div')?.cloneNode(true);
    return itemElement as HTMLElement;
  }

  componentDidMount() { }
}

export { Card };
