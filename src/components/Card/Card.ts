import { Component } from "../../services/Component";
import { getTemplate } from "./template";
import s from "./Card.module.scss";

// TODO добавить окрытие модального окна с iframe google map
type PropsCard = {
  img: any;
  alt: string;
  title: string;
};
class Card extends Component {
  constructor(target = "div", props: PropsCard & Record<string, any>) {
    super(target, { classes: s.card, ...props });
  }

  markup() {
    const { img, alt, title } = this.props as PropsCard & Record<string, any>;
    return getTemplate({
      styles: s,
      img,
      alt,
      title,
    });
  }

  componentDidMount() {}
}

export { Card };
