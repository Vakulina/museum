import { Component, ComponentProps } from "../../services/Component";
import { getTemplate } from "./template";
import s from "./Video.module.scss";
import { ObserverCallback, observer } from "../../services/Observer";

class Video extends Component {
  sliderElement: HTMLElement | null;

  constructor(target = "section", props: ComponentProps) {
    super(target, props);
    this.sliderElement = null;
  }

  markup() {
    this.addAttribute("id", "video");
    return getTemplate(s);
  }

  initSlider() {}

  lazyInitSlider(): void {}

  componentDidMount() {
    "IntersectionObserver" in window
      ? this.lazyInitSlider()
      : this.initSlider();
  }
}

export const video = new Video("section", {
  classes: s.video,
});
