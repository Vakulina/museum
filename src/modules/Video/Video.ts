/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, ComponentProps } from "../../services/Component";
import { getTemplate } from "./template";
import s from "./Video.module.scss";
import { ObserverCallback, observer } from "../../services/Observer";

class Video extends Component {
  sliderElement: HTMLVideoElement | null;

  volumeProgress: HTMLProgressElement | null;

  frame: HTMLVideoElement | null;

  btnBigPlay: HTMLButtonElement | null;

  btnPlay: HTMLButtonElement | null;

  btnMuted: HTMLButtonElement | null;

  currentValume: number;

  constructor(target = "section", props: ComponentProps) {
    super(target, props);
    this.sliderElement = null;
    this.frame = null;
    this.volumeProgress = null;
    this.btnBigPlay = null;
    this.btnPlay = null;
    this.volumeProgress = null;
    this.btnMuted = null;
    this.currentValume = 0.2;
  }

  markup() {
    this.addAttribute("id", "video");
    return getTemplate(s);
  }

  private _initPlayer() {
    this.frame = document.getElementById("custom-player-video") as HTMLVideoElement;
    this.btnBigPlay = document.querySelector(`.${s['custom-player__button_type_play']}`);
    this.btnPlay = document.getElementById('play') as HTMLButtonElement;
    this.volumeProgress = document.querySelector(`.${s['custom-player__volume-scroll']}`);
    this.btnMuted = document.querySelector(`.${s['custom-player__button_type_value']}`);
  }

  private _getVolume() {
    if (this.volumeProgress) {
      return this.volumeProgress.value / 100;
    }
    return null;
  }

  volumeScroll() {
    if (this.volumeProgress && this.frame) {
      this.volumeProgress.style.background = `linear-gradient(to right,   $progress-el 0%,    $progress-el  ${this.volumeProgress.value}%,
           $bt-gray ${this.volumeProgress.value}%, $bt-gray 100%)`;
      if ('volume' in this.frame) this.frame.volume = (this.volumeProgress.value) / 100;
    }
  }

  playsToggle() {
    if (!this.frame) return;
    this.btnPlay?.classList.toggle(`${s['custom-player__button_type_pause']}`);
    this.btnPlay?.classList.toggle(`${s['custom-player__button_type_littleplay']}`);
    this.btnBigPlay?.classList.toggle('animation_vanishing');

    if (this.frame.paused) {
      this.frame.volume = this._getVolume() || 0;
      this.frame.play();
    } else {
      this.frame.pause();
    }
  }

  mute() {
    if (!this.frame || !this.volumeProgress) return;
    this.frame.muted = !this.frame.muted;
    this.btnMuted?.classList.toggle(`${s['custom-player__button_type_value']}`);
    this.btnMuted?.classList.toggle(`${s['custom-player__button_mute']}`);
    this.volumeProgress.value = (this.frame.muted) ? 0 : this.currentValume * 100;
    this.volumeScroll();
  }

  initSlider() { }

  lazyInitSlider(): void { }

  componentDidMount() {
    this._initPlayer();
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
      if (target.dataset.btn === "mute") {
        video.mute();
      }
    },
  },
});
