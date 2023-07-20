/* eslint-disable max-len */
import { Component } from "../../services/Component";
import { getTemplate } from "./template";
import s from "./Visiting.module.scss";
import tour2Img from "../../assets/img/basrelief.jpg";
import tour3Img from "../../assets/img/italianhall.jpg";
import tour4Img from "../../assets/img/collumns.jpg";
import tour5Img from "../../assets/img/sculpture.jpg";
import tour6Img from "../../assets/img/MonaLisa.jpg";
import tour7Img from "../../assets/img/ChristinGlory.jpg";
import { Card } from "../../components/Card";
import { Modal } from "../../components/Modal";
import { render } from "../../utiles.ts/renderDOM";

const cardList = [
  {
    img: tour2Img,
    id: Date.now().toString(),
    alt: "gorgeous bas-relief of the ceiling in Royal Palace",
    title: "Royal Palace",
    src: 'https://www.google.com/maps/embed?pb=!4v1632087245777!6m8!1m7!1sCAoSLEFGMVFpcE1aOVlnbkFyYndFSWJUREFOZVNRWUZ1OWdOcXBXXzJTdjhGQnZZ!2m2!1d48.8606881835717!2d2.335679134426641!3f328.36!4f-2.450000000000003!5f0.4000000000000002',
  },
  {
    img: tour3Img,
    id: Date.now().toString(),
    alt: "exhibition of the italian hall",
    title: "Denon Wing",
    src: "https://www.google.com/maps/embed?pb=!4v1632087328419!6m8!1m7!1sCAoSLEFGMVFpcE5Sal9Dd1A0Y29ETVlkQ0hqNnFIZUJlSnBJMlZ4VTVCVXNPWDRG!2m2!1d48.8563254!2d2.3352706!3f0!4f0!5f0.7820865974627469",
  },
  {
    img: tour4Img,
    id: Date.now().toString(),
    alt: "view of the colonnade",
    title: "Colonnade Perrault",
    src: "https://www.google.com/maps/embed?pb=!4v1632087355535!6m8!1m7!1sCAoSLEFGMVFpcE5NWkdRdUVBLXBBVXZJR19lUF8yZjNnV1RLWkVKNlhMVkotUGdi!2m2!1d48.8601723!2d2.3395439!3f322.04!4f-5.75!5f0.440292882915489",
  },
  {
    img: tour5Img,
    id: Date.now().toString(),
    alt: "Google Street Panorama View",
    title: "Greek hall",
    src: "https://www.google.com/maps/embed?pb=!4v1632087384944!6m8!1m7!1sCAoSLEFGMVFpcFA3dUZablRJVFJlLTdBRVZBZ0hBZnFpQ0wtMDNndkJIY1lXZ0Yz!2m2!1d48.86018303140322!2d2.335615591987402!3f177.69!4f5.609999999999999!5f0.4000000000000002",
  },
  {
    img: tour6Img,
    id: Date.now().toString(),
    alt: "a fragment of picture 'Mona Lisa'",
    title: "Mona Lisa",
    src: "https://www.google.com/maps/embed?pb=!4v1632087405760!6m8!1m7!1sCAoSLEFGMVFpcE8xd2tVVWJ5enBQamotT1IwbVI1ZXRaSlQteGwtNDBYSzhyRFEz!2m2!1d48.85987877384653!2d2.335515730085149!3f7.53!4f4!5f0.5970117501821992",
  },
  {
    img: tour7Img,
    id: Date.now().toString(),
    alt: "a fragment of picture 'Christ in Glory with the Saints'",
    title: "Night Palace",
    src: "https://www.google.com/maps/embed?pb=!4v1632087430196!6m8!1m7!1sCAoSLEFGMVFpcFBwR0Fvd1lhdFZ5azNNTUduWkFhUWtZbTJFVWstRGxjYTA2U1M1!2m2!1d48.8563254!2d2.3352706!3f21.26!4f-10.090000000000003!5f0.4000000000000002",
  },
];

const children = cardList.map(
  (item) => {
    const card = new Card("button", {
      ...item,
      events: {
        click(e: MouseEvent) {
          if (!(e.target instanceof HTMLElement)) return;
          const modalContent = card.getFrameTemplate();
          const modal = new Modal("div", { id: `${item.id}` }, modalContent);
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
