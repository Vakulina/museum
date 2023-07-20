import image1 from "../../assets/img/galery9_sl.jpg";
import image2 from "../../assets/img/galery4_sm.jpg";
import image3 from "../../assets/img/galery6_sl.jpg";
import image4 from "../../assets/img/galery13__ss.jpg";
import image5 from "../../assets/img/galery1_sm.jpg";
import image6 from "../../assets/img/galery8_sl.jpg";
import image7 from "../../assets/img/galery3_sl.jpg";
import image8 from "../../assets/img/galery5_sl.jpg";
import image9 from "../../assets/img/galery14_sl.jpg";
import image10 from "../../assets/img/galery7_sl.jpg";
import image11 from "../../assets/img/galery10_sm.jpg";
import image12 from "../../assets/img/galery15_sm.jpg";
import image13 from "../../assets/img/galery12_ss.jpg";
import image14 from "../../assets/img/galery11_sm.jpg";
import image15 from "../../assets/img/galery2_sl.jpg";
import styles from "./Gallery.module.scss";

const imagesLinks = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
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
    const imgUrl = link;
    img.dataset.src = imgUrl;
    const parts = `${imgUrl}`.split(".");
    const extension = parts.pop();
    const filename = parts.join(".");
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
