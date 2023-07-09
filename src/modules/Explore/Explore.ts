/* eslint-disable no-inner-declarations */
/* eslint-disable @typescript-eslint/no-use-before-define */
import { Component, ComponentProps } from "../../services/Component";
import { getTemplate } from "./template";
import s from "./Explore.module.scss";

class Explore extends Component {
  slider: HTMLElement | null;

  constructor(target = "section", props: ComponentProps) {
    super(target, props);
    this.slider = null;
  }

  markup() {
    this.addAttribute('id', 'explore');
    return getTemplate(s);
  }

  initSlider() {
    const overlay: HTMLElement | null = document.querySelector(`.${s["explore-slider__new-image"]}`);
    this.slider = document.querySelector(`.${s["explore-slider__separator"]}`);

    const compareImages = (img: HTMLElement) => {
      if (this.slider) {
        let clicked = 0;
        const w = img.offsetWidth;
        const wid = +window.getComputedStyle(this.slider as Element, null).getPropertyValue('width').slice(0, -2);
        img.style.width = `${(w / 2) + 20}px`;
        this.slider.addEventListener("pointerdown", slideReady);
        window.addEventListener("pointerup", slideFinish);

        function slideReady(evt: MouseEvent) {
          evt.preventDefault();
          clicked = 1;
          window.addEventListener("pointermove", slideMove);
        }

        function slideFinish() {
          clicked = 0;
        }

        function slideMove(evt: MouseEvent) {
          let pos;
          if (!clicked) {
            return null;
          }

          pos = getCursorPos(evt);

          if (pos < 0) {
            pos = 0;
          }
          if (pos > w) {
            pos = w;
          }
          slide(pos);
        }

        function getCursorPos(evt: MouseEvent) {
          let x = 0;
          evt = evt || window.event;
          const a = img.getBoundingClientRect();
          x = evt.pageX - a.left;
          x -= window.pageXOffset;
          return x;
        }

        const slide = (x: number) => {
          img.style.width = `${x}px`;
          if (this.slider) this.slider.style.left = `${img.offsetWidth - this.slider.offsetWidth / 2 + wid / 2 - 20}px`;
        };
      }
    };

    if (overlay) {
      compareImages(overlay);
    }
  }

  componentDidMount() {
    this.initSlider();
  }
}

export const explore = new Explore("section", {
  classes: s.explore,
});
