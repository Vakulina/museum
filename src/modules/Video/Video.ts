/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, ComponentProps } from "../../services/Component";
import { getTemplate } from "./template";
import s from "./Video.module.scss";
import { ObserverCallback, observer } from "../../services/Observer";

class Video extends Component {
  sliderElement: HTMLVideoElement | null;

  volumeProgress: HTMLProgressElement | null;

  frame: HTMLElement | null;

  btnBigPlay: HTMLButtonElement | null;

  btnPlay: HTMLButtonElement | null;

  constructor(target = "section", props: ComponentProps) {
    super(target, props);
    this.sliderElement = null;
    this.frame = null;
    this.volumeProgress = null;
    this.btnBigPlay = null;
    this.btnPlay = null;
  }

  markup() {
    this.addAttribute("id", "video");
    return getTemplate(s);
  }

  getVolume() {
    this.volumeProgress = document.querySelector(`.${s['custom-player__volume-scroll']}`);
    if (this.volumeProgress) {
      return this.volumeProgress.value / 100;
    }
    return null;
  }

  playsToggle() {
    this.frame = document.getElementById("custom-player-video");
    this.btnBigPlay = document.querySelector(`.${s['custom-player__button_type_play']}`);
    this.btnPlay = document.getElementById('play') as HTMLButtonElement;

    const frame = this.frame as HTMLVideoElement;
    if (!this.frame) return;
    this.btnPlay?.classList.toggle(`${s['custom-player__button_type_pause']}`);
    this.btnPlay?.classList.toggle(`${s['custom-player__button_type_littleplay']}`);
    this.btnBigPlay?.classList.toggle('animation_vanishing');

    if (frame.paused) {
      frame.volume = this.getVolume() || 0;
      frame.play();
    } else {
      frame.pause();
    }
  }

  initSlider() { }

  lazyInitSlider(): void { }

  componentDidMount() {
    "IntersectionObserver" in window
      ? this.lazyInitSlider()
      : this.initSlider();
  }
}

export const video = new Video("section", {
  classes: s.video,
  events: {
    click(e: MouseEvent) {
      const target = e.target as HTMLElement;
      const { id } = target;
      if (target.dataset.btn === "play" || target.dataset.btn === "bigPlay" || id === "custom-player-video") {
        video.playsToggle();
      }
    },
  },
});
