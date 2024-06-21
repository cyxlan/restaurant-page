import { homeTab } from "./home";
import "../css/index.css";

const pageContent = (function() {
  const contentDiv = document.querySelector('#content');
  const tabBtns = document.querySelectorAll('.tab-btn');

  const switchTab = (btn) => {
    contentDiv.textContent = "";
    btn.classList.add("selected");
    if (btn.id === "home") {
      homeTab(contentDiv);
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