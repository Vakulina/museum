import "./assets/styles/styles.css";
import { header } from "./modules/Header";
import { welcome } from "./modules/Welcome";
import { visiting } from "./modules/Visiting";
import { explore } from "./modules/Explore";
import { render } from "./utiles.ts/renderDOM";
import { video } from "./modules/Video";

document.querySelector<HTMLDivElement>("#app")!.prepend(header.element);

render("#content", welcome);
render("#content", visiting);
render("#content", explore);
render("#content", video);
