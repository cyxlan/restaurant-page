import { homeTab } from "./home";
import { menuTab } from "./menu";
import { contactTab } from "./contact";
import "../css/index.css";

const pageContent = (function() {
  const contentDiv = document.querySelector('#content');
  const tabBtns = document.querySelectorAll('.tab-btn');

  const switchTab = (btn) => {
    contentDiv.textContent = "";
    btn.classList.add("selected");
    if (btn.id === "home") {
      homeTab(contentDiv);
    } else if (btn.id === "menu") {
      menuTab(contentDiv);
    } else if (btn.id === "contact") {
      contactTab(contentDiv);
    }
  }

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      switchTab(btn);
    })
  })

  // default to home tab on page load
  switchTab(tabBtns[0]);
})();