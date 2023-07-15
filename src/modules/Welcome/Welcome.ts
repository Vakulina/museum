import Swiper from "swiper/bundle";
import "swiper/css";
import { Component, ComponentProps } from "../../services/Component";
import { getTemplate } from "./template";
import s from "./Welcome.module.scss";

class Welcome extends Component {
  welcomeSlider: any;

  constructor(target = "div", props: ComponentProps) {
    super(target, props);
    this.welcomeSlider = null;
  }

  markup() {
    return getTemplate(s);
  }

  initSlider() {
    this.welcomeSlider = new Swiper(`.${s.welcome__swiper}`, {
      autoHeight: true,
      loop: true,
      navigation: {
        nextEl: `.${s["image-pagination__right-arrow"]}`,
        prevEl: `.${s["image-pagination__left-arrow"]}`,
      },
      pagination: {
        el: `.${s["image-pagination__bullets"]}`,
        clickable: true,
        bulletClass: `${s["image-pagination__bullet"]}`,
        bulletActiveClass: `${s["image-pagination__bullet_active"]}`,
        type: "bullets",
      },
    });

    const totalCounterWelcomeSlides = this.element.querySelector(
      `.${s["image-pagination__total"]}`,
    );
    const currentWelcomeSlides = this.element.querySelector(
      `.${s["image-pagination__current"]}`,
    );

    if (totalCounterWelcomeSlides) {
      totalCounterWelcomeSlides.innerHTML = String(
        this.welcomeSlider.slides.length,
      ).padStart(2, "0");
    }

    this.welcomeSlider.on("slideChange", () => {
      let currentSlide = this.welcomeSlider.realIndex + 1;
      currentSlide = String(currentSlide).padStart(2, "0");
      currentWelcomeSlides!.innerHTML = currentSlide;
    });
  }

  componentDidMount() {
    this.addAttribute("id", "welcome");
    this.initSlider();
  }
}

const welcome = new Welcome("section", {
  classes: s.welcome,
  id: "welcome",
});

export { welcome };
