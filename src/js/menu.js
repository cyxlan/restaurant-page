import { createEl } from "./tab";
import "../css/menu.css";

import imgWolfhookJuice from "../img/Wolfhook_Juice.webp";
import imgBerryMintBurst from "../img/Berry_Mint_Burst.webp";
import imgAppleCider from "../img/Apple_Cider.webp";
import imgSparklingBerryJuice from "../img/Sparkling_Berry_Juice.webp";
import imgFruitsOfTheFestival from "../img/Fruits_of_the_Festival.webp";

const itemDatas = [
  {
    "name": "Wolfhook Juice",
    "img": imgWolfhookJuice,
    "desc": "A freshly squeezed, fashionable, and fruity non-alcoholic beverage. Iced Wolfhook juice mixed with a pinch of other ingredients, forming a dreamy shade of violet.",
    "cost": "1,500"
  },
  {
    "name": "Berry & Mint Burst",
    "img": imgBerryMintBurst,
    "desc": "A freshly squeezed, fashionable, and fruity non-alcoholic beverage. A refreshing burst of Mint with Berries to sweeten the deal, it has an exquisite aroma.",
    "cost": "1,500"
  },
  {
    "name": "Apple Cider",
    "img": imgAppleCider,
    "desc": "A freshly squeezed, fashionable, and fruity non-alcoholic beverage. Said to have a strong sobering effect, tavern patrons often order this as the last drink of the night.",
    "cost": "1,500"
  },
  {
    "name": "Sparkling Berry Juice",
    "img": imgSparklingBerryJuice,
    "desc": "An all-new non-alcoholic beverage. Valberries of varying ripeness add layers of sour-to-sweet to this juice while the cooling sparkling water refreshes the soul — a fine companion for a pleasant and leisurely time.",
    "cost": "1,500"
  },
  {
    "name": "Fruits of the Festival",
    "img": imgFruitsOfTheFestival,
    "desc": "A brightly colored non-alcoholic beverage. Freshly squeezed Sunsettia and Wolfhook juices have been poured into a cup in a specific order. The cool and refreshing flavor and vibrant color remind people of the beautiful holiday times.",
    "cost": "6,450"
  }
]

const menuItems = createEl("div", "", ["menu-items-wrap"])
itemDatas.forEach((itemData) => {
  const item = createEl("article", "", ["menu-item"]);
  const itemInfo = createEl("div", "", ["item-info"]);
  itemInfo.append(
    createEl("h3", itemData.name, ["item-name"]),
    createEl("p", itemData.cost, ["item-cost"]),
    createEl("p", itemData.desc, ["item-desc"])
  )
  item.append (
    createEl("img", itemData.img, ["item-img"]),
    itemInfo
  )
  menuItems.append(item);
})

export function menuTab(contentDiv) {
  const container = createEl("div", "", ["container", "light"]);
  container.append(
    createEl("h2", "Menu"),
    menuItems
  );
  contentDiv.append(container);
}
