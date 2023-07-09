import { Component, ComponentProps } from "../../services/Component";
import { getTemplate } from "./template";
import s from "./Explore.module.scss";

class Explore extends Component {
  welcomeSlider: any;

  constructor(target = "section", props: ComponentProps) {
    super(target, props);
    this.welcomeSlider = null;
  }

  markup() {
    this.addAttribute('id', 'explore');
    return getTemplate(s);
  }

  initSlider() {
  }

  componentDidMount() {
    this.initSlider();
  }
}

const explore = new Explore("section", {
  classes: s.explore,
});

export { explore };
