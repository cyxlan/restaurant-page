import { createEl } from "./tab";
import "../css/home.css";

export function homeTab(contentDiv) {
  const container = createEl("div", "", ["container", "dark"]);
  container.append(
    createEl("p", "Shine True", ["motto"]),
    createEl("p", "Fine wines and drinks served in the heart of Mondstadt.")
  );
  contentDiv.append(container);
}
