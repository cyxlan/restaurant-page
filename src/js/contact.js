import { createEl } from "./tab";
import "../css/contact.css";

import imgAngelsShare from "../img/Angels_Share.png";

const contactWrap = createEl("div", "", ["contact-wrap"]);
const contactInfo = createEl("div", "", ["contact-info"]);
contactInfo.append(
  createEl("h3", "Address"),
  createEl("p", "Mondstadt City"),
  createEl("p", "Starfell Valley, Mondstadt"),
  createEl("h3", "Hours"),
  createEl("p", "12:00 - 02:00"),
  createEl("p", "Sunday to Saturday"),
  createEl("h3", "Head Office"),
  createEl("p", "Dawn Winery"),
  createEl("p", "Windwail Highland, Mondstadt")
)
contactWrap.append(
  createEl("img", imgAngelsShare, ["building-img"]),
  contactInfo
)

export function contactTab(contentDiv) {
  const container = createEl("div", "", ["container", "light"]);
  container.append(
    createEl("h2", "Contact"),
    contactWrap
  );
  contentDiv.append(container);
}