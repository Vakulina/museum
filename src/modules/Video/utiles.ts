import { ObserverCallback, observer } from "../../services/Observer";
import s from "./Video.module.scss";

export function removeVideo(this: any) {
  if (!this) return;
  Object.entries(this.videoElementListeners).forEach((item) => {
    if (!this.frame) return;
    const [event, callback] = item;
    this.frame.removeEventListener(event, callback);
  });
  this.dispatchComponentWillUnmount();
}

export function volumeScroll(this: any) {
  if (this.volumeProgress && this.frame) {
    if (this.frame.muted && this.getVolume() !== 0) this.toggleMute();
    if (!this.frame.muted && this.getVolume() === 0) this.toggleMute();
    this.volumeProgress.style.background = `linear-gradient(to right,
           var(--progress-el) 0%, var(--progress-el) ${this.volumeProgress.value}%, var(--bt-gray) ${this.volumeProgress.value}%, var(--bt-gray) 100%)`;
    this.frame.volume = this.getVolume();
    this.frame.muted = this.getVolume() === 0;
  }
}

export function initProperties(this: any) {
  this.frame = document.getElementById("custom-player-video") as HTMLVideoElement;
  this.btnBigPlay = document.querySelector(`.${s['custom-player__button_type_play']}`);
  this.btnPlay = document.getElementById('play') as HTMLButtonElement;
  this.volumeProgress = document.querySelector(`.${s['custom-player__volume-scroll']}`);
  this.btnMuted = document.querySelector(`.${s['custom-player__button_type_value']}`);
  this.progress = document.querySelector(`.${s['custom-player__progress']}`);
  this.videoElementListeners = { ...this.videoElementListeners, timeupdate: this.videoProgress.bind(this), ended: this.end.bind(this) };
}

export function setObserver(this: any) {
  if (!this.frame) return;
  const callback: ObserverCallback = (entry, oserver) => {
    if ((!entry.isIntersecting) && (!this.frame.paused)) {
      this.playsToggle();
    }
  };

  observer.observe(this.frame as Element, callback);
}
