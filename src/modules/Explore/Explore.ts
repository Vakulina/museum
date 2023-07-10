import { Component, ComponentProps } from "../../services/Component";
import { getTemplate } from "./template";
import s from "./Explore.module.scss";
import { ObserverCallback, observer } from "../../services/Observer";

class Explore extends Component {
  sliderElement: HTMLElement | null;

  overlayElement: HTMLElement | null;

  constructor(target = "section", props: ComponentProps) {
    super(target, props);
    this.sliderElement = null;
    this.overlayElement = null;
  }

  markup() {
    this.addAttribute("id", "explore");
    return getTemplate(s);
  }

  initSlider() {
    const compareImages = (imageElement: HTMLElement) => {
      let clicked = 0;
      function slideFinish() {
        clicked = 0;
      }
      const imageWidth = imageElement.offsetWidth;
      const sliderWidth = this.sliderElement
        ? Number(
          window
            .getComputedStyle(this.sliderElement, null)
            .getPropertyValue("width")
            .slice(0, -2),
        )
        : null;

      function getCursorPos(evt: MouseEvent) {
        let x = 0;
        evt = evt || window.event;
        const elementRect = imageElement.getBoundingClientRect();
        x = evt.clientX - elementRect.left;
        return x;
      }

      const slide = (x: number) => {
        imageElement.style.width = `${x}px`;
        if (this.sliderElement && sliderWidth) {
          this.sliderElement.style.left = `${
            imageElement.offsetWidth
            - this.sliderElement.offsetWidth / 2
            + sliderWidth / 2
            - 20
          }px`;
        }
      };

      function slideMove(evt: MouseEvent) {
        let pos;

        if (!clicked) {
          return null;
        }

        pos = getCursorPos(evt);

        if (pos < 0) {
          pos = 0;
        }
        if (pos > imageWidth) {
          pos = imageWidth;
        }
        slide(pos);
      }
      function slideReady(evt: MouseEvent) {
        evt.preventDefault();
        clicked = 1;
        window.addEventListener("pointermove", slideMove);
      }

      if (this.sliderElement) {
        imageElement.style.width = `${imageWidth / 2 + 20}px`;

        this.sliderElement.addEventListener("pointerdown", slideReady);
        window.addEventListener("pointerup", slideFinish);
      }
    };

    if (this.overlayElement) {
      compareImages(this.overlayElement);
    }
  }

  lazyInitSlider(): void {
    this.overlayElement = document.querySelector(
      `.${s["explore-slider__new-image"]}`,
    );
    this.sliderElement = document.querySelector(
      `.${s["explore-slider__separator"]}`,
    );
    const callback: ObserverCallback = (entry, observer) => {
      if (!entry.isIntersecting) return;
      this.initSlider();
      observer.unobserve(entry.target, callback);
    };

    if (this.overlayElement) observer.observe(this.overlayElement, callback);
  }

  componentDidMount() {
    "IntersectionObserver" in window
      ? this.lazyInitSlider()
      : this.initSlider();
  }
}

export const explore = new Explore("section", {
  classes: s.explore,
});
