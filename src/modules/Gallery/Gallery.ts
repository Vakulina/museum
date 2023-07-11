import { Component, ComponentProps } from "../../services/Component";
import { getTemplate } from "./template";
import s from "./Gallery.module.scss";
import { ObserverCallback, observer } from "../../services/Observer";
import { getChildren } from "./utiles";

class Gallery extends Component {
  constructor(target = "section", props: ComponentProps) {
    super(target, props);
  }

  markup() {
    const children = this.getInitChildren();
    this.addAttribute("id", "gallery");
    return getTemplate(s, children);
  }

  initImages() {
    const listElements = document.querySelectorAll(`.${s.gallery__image}`);
    const callback: ObserverCallback = (entry, observer) => {
      const target = entry.target as HTMLImageElement;
      if (entry.isIntersecting) {
        target.src = target.dataset.src || '';
        observer.unobserve(entry.target, callback);
        entry.target.classList.add("animation_scroll");
      }
    };

    listElements.forEach((item) => observer.observe(item, callback));
  }

  componentDidMount() {
    this.initImages();
  }
}
const children = await getChildren();
export const gallery = new Gallery("section", {
  classes: s.gallery,
  children,
});
