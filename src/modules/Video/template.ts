import poster from "../../assets/img/poster0.jpg";
import video from "../../assets/video/video0.mp4";

export const getTemplate = (styles: any) => `
<div class="${styles.video__container}">
    <div class="${styles.video__text}">
        <h2 class="${styles.video__title}">Video journey</h2>
        <p class="${styles.video__paragraf}">Enter and visit one of the most famous museums in the
            world and enjoy masterpieces such as Mona Lisa or Hammurabi's Code</p>
    </div>

    <div class="${styles["custom-player"]}">
        <video id="custom-player-video" class="${styles["custom-player__video"]}" preload='none' src='${video}'
            poster="${poster}"> </video>

        <button class="${styles["custom-player__button"]}   ${styles["custom-player__button_type_play"]}"  data-btn='bigPlay'></button>


        <div class="${styles["custom-player__control-panel"]}">
            <button
                class="${styles["custom-player__button"]} 
                ${styles["custom-player__button_type_pause"]} 
                ${styles["custom-player__button_hidden"]}"
                data-btn='pause'
                type="button"/>
            <button 
            class="${styles["custom-player__button"]} 
            ${styles["custom-player__button_type_littleplay"]}"
            data-btn='play'
            id="play"
            type="button"></button>
            <input class="${styles["custom-player__progress"]}" type="range" value="0" min="0" max="10000" step="1">
            <button class="${styles["custom-player__button"]} ${styles["custom-player__button_type_value"]}" type="button"></button>
            <input class="${styles["custom-player__volume-scroll"]}" type="range" value="20" min="0" max="100" step="1">
            <button class="${styles["custom-player__button"]} ${styles["custom-player__button_full-screen"]}"
                type="button"></button>
        </div>
    </div>

</div>
`;
