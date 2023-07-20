import { Component, ComponentProps } from "../../services/Component";
import { getTemplate } from "./template";
import s from "./Video.module.scss";
import {
  initProperties,
  removeVideo,
  setObserver,
  volumeScroll,
} from "./utiles";

export class Video extends Component {
  volumeProgress: HTMLProgressElement | null;

  progress: HTMLProgressElement | null;

  frame: HTMLVideoElement | null;

  btnBigPlay: HTMLButtonElement | null;

  btnPlay: HTMLButtonElement | null;

  btnMuted: HTMLButtonElement | null;

  currentValume: number;

  videoElementListeners: {
    [event: string]: EventListenerOrEventListenerObject;
  };

  constructor(target = "section", props: ComponentProps) {
    super(target, props);
    this.frame = null;
    this.volumeProgress = null;
    this.btnBigPlay = null;
    this.btnPlay = null;
    this.volumeProgress = null;
    this.progress = null;
    this.btnMuted = null;
    this.videoElementListeners = {};
    this.currentValume = 0.2;
  }

  markup() {
    this.addAttribute("id", "video");
    return getTemplate(s);
  }

  private _initPlayer() {
    initProperties.call(this);
  }

  end() {
    if (!this.frame) return;
    this.frame.play();
    setTimeout(() => this.playsToggle(), 10);
  }

  getVolume() {
    if (this.volumeProgress) {
      return this.volumeProgress.value / 100;
    }
    return 0;
  }

  volumeScroll() {
    volumeScroll.call(this);
  }

  videoScroll() {
    if (!this.progress || !this.frame) return;
    const { value } = this.progress;
    this.progress.style.background = `linear-gradient(to right,  var(--progress-el) 0%,  
    var(--progress-el) ${value / 100}%, var(--bt-gray) ${
  value / 100
}%, var(--bt-gray) 100%)`;
    const durationInSeconds = Math.floor(this.frame.duration);
    const roundedValue = Math.floor(value);
    const intermediateResult = (durationInSeconds * roundedValue) / 10000;
    this.frame.currentTime = Math.floor(intermediateResult) || 0;
  }

  videoProgress() {
    if (!this.progress || !this.frame) return;
    this.progress.value = (this.frame.currentTime / this.frame.duration) * 10000 || 0;
    this.progress.style.background = `linear-gradient(to right,  var(--progress-el) 0%,  var(--progress-el)
     ${this.progress.value / 100}%, var(--bt-gray) ${
  this.progress.value / 100
}%, var(--bt-gray) 100%)`;
  }

  playsToggle() {
    if (!this.frame) return;
    this.btnPlay?.classList.toggle(`${s["custom-player__button_type_pause"]}`);
    this.btnPlay?.classList.toggle(
      `${s["custom-player__button_type_littleplay"]}`,
    );
    this.btnBigPlay?.classList.toggle("animation_vanishing");

    if (this.frame.paused) {
      this.frame.volume = this.getVolume() || 0;
      this.frame.play();
    } else {
      this.frame.pause();
    }
  }

  toggleMute() {
    if (!this.frame || !this.volumeProgress) return;
    this.frame.muted = !this.frame.muted;

    if (!this.frame.muted) {
      this.btnMuted?.classList.add(`${s["custom-player__button_type_value"]}`);
      this.btnMuted?.classList.remove(`${s["custom-player__button_mute"]}`);
    } else {
      this.btnMuted?.classList.remove(
        `${s["custom-player__button_type_value"]}`,
      );
      this.btnMuted?.classList.add(`${s["custom-player__button_mute"]}`);
    }

    this.volumeProgress.value = this.frame.muted ? 0 : this.currentValume * 100;
    this.volumeScroll();
  }

  private _setObserver() {
    setObserver.call(this);
  }

  componentDidMount() {
    this._initPlayer();
    this._addVideoElementListeners();
    this._setObserver();
  }

  private _addVideoElementListeners() {
    Object.entries(this.videoElementListeners).forEach((item) => {
      if (!this.frame) return;
      const [event, callback] = item;
      this.frame.addEventListener(event, callback);
    });
  }

  remove() {
    removeVideo.call(this);
  }
}

export const video = new Video("section", {
  classes: s.video,
  events: {
    click(e: MouseEvent) {
      const target = e.target as HTMLElement;
      const { id } = target;
      if (
        target.dataset.btn === "play"
        || target.dataset.btn === "bigPlay"
        || id === "custom-player-video"
      ) {
        video.playsToggle();
      }
      if (target.dataset.btn === "mute") {
        video.toggleMute();
      }
    },
    input(e: InputEvent) {
      const target = e.target as HTMLInputElement;
      if (target.dataset.range === "volume") {
        video.volumeScroll();
      }
      if (target.dataset.range === "progress") {
        video.videoScroll();
      }
    },
  },
});
