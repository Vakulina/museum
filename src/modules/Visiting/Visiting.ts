import { Component, ComponentProps } from "../../services/Component";
import { getTemplate } from "./template";
import s from "./Visiting.module.scss";
import tour2Img from "../../assets/img/basrelief.jpg";
import tour3Img from "../../assets/img/italianhall.jpg";
import tour4Img from "../../assets/img/collumns.jpg";
import tour5Img from "../../assets/img/sculpture.jpg";
import tour6Img from "../../assets/img/MonaLisa.jpg";
import tour7Img from "../../assets/img/ChristinGlory.jpg";
import { Card } from "../../components/Card";

const cardList = [
  {
    img: tour2Img,
    alt: "gorgeous bas-relief of the ceiling in Royal Palace",
    title: "Royal Palace",
  },
  {
    img: tour3Img,
    alt: "exhibition of the italian hall",
    title: "Denon Wing",
  },
  {
    img: tour4Img,
    alt: "view of the colonnade",
    title: "Colonnade Perrault",
  },
  {
    img: tour5Img,
    alt: "Google Street Panorama View",
    title: "Greek hall",
  },
  {
    img: tour6Img,
    alt: "a fragment of picture 'Mona Lisa'",
    title: "Mona Lisa",
  },
  {
    img: tour7Img,
    alt: "a fragment of picture 'Christ in Glory with the Saints'",
    title: "Night Palace",
  },
];

const children = cardList.map(
  (item) => new Card("article", {
    ...item,
  }).element,
);

class Visiting extends Component {
  markup() {
    const children = this.getInitChildren();
    this.addAttribute('id', 'visiting');
    return getTemplate(s, children);
  }
}

const visiting = new Visiting("section", {
  classes: s.visiting,
  children,
});

export { visiting };
