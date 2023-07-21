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

import m_image1 from "../../assets/img/m_galery9_sl.jpg";
import m_image2 from "../../assets/img/m_galery4_sm.jpg";
import m_image3 from "../../assets/img/m_galery6_sl.jpg";
import m_image4 from "../../assets/img/m_galery13__ss.jpg";
import m_image5 from "../../assets/img/m_galery1_sm.jpg";
import m_image6 from "../../assets/img/m_galery8_sl.jpg";
import m_image7 from "../../assets/img/m_galery3_sl.jpg";
import m_image8 from "../../assets/img/m_galery5_sl.jpg";
import m_image9 from "../../assets/img/m_galery14_sl.jpg";
import m_image10 from "../../assets/img/m_galery7_sl.jpg";
import m_image11 from "../../assets/img/m_galery10_sm.jpg";
import m_image12 from "../../assets/img/m_galery15_sm.jpg";
import m_image13 from "../../assets/img/m_galery12_ss.jpg";
import m_image14 from "../../assets/img/m_galery11_sm.jpg";
import m_image15 from "../../assets/img/m_galery2_sl.jpg";
import styles from "./Gallery.module.scss";

type linksObjType = { link: string, shortlink: string };

const imagesLinks = [
  { link: image1, shortlink: m_image1 },
  { link: image2, shortlink: m_image2 },
  { link: image3, shortlink: m_image3 },
  { link: image4, shortlink: m_image4 },
  { link: image5, shortlink: m_image5 },
  { link: image6, shortlink: m_image6 },
  { link: image7, shortlink: m_image7 },
  { link: image8, shortlink: m_image8 },
  { link: image9, shortlink: m_image9 },
  { link: image10, shortlink: m_image10 },
  { link: image11, shortlink: m_image11 },
  { link: image12, shortlink: m_image12 },
  { link: image13, shortlink: m_image13 },
  { link: image14, shortlink: m_image14 },
  { link: image15, shortlink: m_image15 },
];

const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const shuffle = (arr:linksObjType[]) => {
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
  const postImage = async (linksObj: linksObjType) => {
    const { link, shortlink } = linksObj;
    const img = document.createElement("img");
    img.classList.add(`${styles.gallery__image}`);
    img.dataset.src = link;
    img.src = shortlink;
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
