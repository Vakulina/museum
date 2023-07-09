import "./assets/styles/styles.css";
import { header } from "./modules/Header";
import { welcome } from "./modules/Welcome";
import { visiting } from "./modules/Visiting";
import { render } from "./utiles.ts/renderDOM";

document.querySelector<HTMLDivElement>("#app")!.prepend(header.element);

render("#content", welcome);
render("#content", visiting);
