import { Component, ComponentProps } from "../../services/Component";
import { getTemplate } from "./template";
import s from "./Gallery.module.scss";
import { ObserverCallback, observer } from "../../services/Observer";
import { getChildren, shuffledImagesLinks } from "./utiles";

class Gallery extends Component {
  constructor(target = "section", props: ComponentProps) {
    super(target, props);
  }

  markup() {
    const children = this.getInitChildren();
    this.addAttribute("id", "gallery");
    return getTemplate(s, children);
  }

  initImages() {}

  initGallery() {}

  lazyInitGallery(): void {}

  componentDidMount() {
    this.initGallery();
  }
}
const children = await getChildren();
export const gallery = new Gallery("section", {
  classes: s.gallery,
  children,
});
