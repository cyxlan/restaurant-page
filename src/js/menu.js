import { createEl } from "./tab";

export function menuTab(contentDiv) {
  const els = [
    createEl("h2", "Menu"),
    createEl("p", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium reiciendis, doloremque consequatur sed ex sint tenetur! Sint impedit error pariatur exercitationem, delectus inventore magnam doloremque, debitis aliquam sunt quam nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum fuga qui laudantium alias, hic accusantium facere veritatis quae ipsam natus reprehenderit similique ipsa nisi. Cupiditate, sint. Odio sunt omnis natus?")
  ];
  const container = createEl("div", "", "container");
  container.append(...els);
  contentDiv.append(container);
}
