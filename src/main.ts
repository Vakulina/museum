import "./assets/styles/styles.css";
import { Header } from "./modules/Header";
import { Welcome } from "./modules/Welcome";

document.querySelector<HTMLDivElement>("#app")!.prepend(Header);

document.querySelector<HTMLDivElement>("#content")!.append(Welcome);
