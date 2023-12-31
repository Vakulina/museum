import "./assets/styles/styles.css";
import { header } from "./modules/Header";
import { welcome } from "./modules/Welcome";
import { visiting } from "./modules/Visiting";
import { explore } from "./modules/Explore";
import { render } from "./utiles.ts/renderDOM";
import { video } from "./modules/Video";
import { gallery } from "./modules/Gallery";
import { tickets } from "./modules/Tickets";
import { parallax } from "./modules/Parralax";
import { contacts } from "./modules/Contacts";
import { footer } from "./modules/Footer";

document.querySelector<HTMLDivElement>("#app")!.prepend(header.element);

render("#content", [
  welcome,
  visiting,
  explore,
  video,
  gallery,
  tickets,
  parallax,
  contacts,
  footer,
]);
