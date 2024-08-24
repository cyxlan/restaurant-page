import { createEl } from "./tab";

export function homeTab(contentDiv) {
  const els = [
    createEl("h2", "Restaurant"),
    createEl("p", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex rem dignissimos, non ad explicabo saepe animi dolor similique laudantium unde maiores quis nostrum expedita commodi dolore nihil fugit numquam aperiam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga eum, mollitia numquam animi dolore illum harum iusto quo sit dolor molestias nam nulla quia, quis ducimus ipsam deserunt pariatur corrupti.")
  ];
  contentDiv.append(...els);
}
