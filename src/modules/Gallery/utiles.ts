import styles from "./Gallery.module.scss";

const imagesLinks = [
  "../../assets/img/galery9_sl.jpg",
  "../../assets/img/galery4_sm.jpg",
  "../../assets/img/galery6_sl.jpg",
  "../../assets/img/galery13__ss.jpg",
  "../../assets/img/galery1_sm.jpg",
  "../../assets/img/galery8_sl.jpg",
  "../../assets/img/galery3_sl.jpg",
  "../../assets/img/galery5_sl.jpg",
  "../../assets/img/galery14_sl.jpg",
  "../../assets/img/galery7_sl.jpg",
  "../../assets/img/galery10_sm.jpg",
  "../../assets/img/galery15_sm.jpg",
  "../../assets/img/galery12_ss.jpg",
  "../../assets/img/galery11_sm.jpg",
  "../../assets/img/galery2_sl.jpg",
];

const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const shuffle = (arr: string[]) => {
  const result = [];

  while (arr.length > 0) {
    const random = getRandomInt(0, arr.length - 1);
    const elem = arr.splice(random, 1)[0];
    result.push(elem);
  }
  return result;
};
export const shuffledImagesLinks = shuffle(imagesLinks);

export const getChildren = async () => {
  const postImage = async (link: string) => {
    const img = document.createElement("img");
    img.classList.add(`${styles.gallery__image}`);
    const imgUrl = new URL(link, import.meta.url).href;
    img.dataset.src = `${imgUrl}`;

    const parts = `${imgUrl}`.split('.');
    const extension = parts.pop();
    const filename = parts.join('.');
    const newFilename = `${filename}_m.${extension}`;

    img.src = newFilename;

    img.alt = "";
    return img;
  };

  const result = await Promise.all(
    shuffledImagesLinks.map(async (link) => {
      return postImage(link);
    }),
  );

  return result;
};
