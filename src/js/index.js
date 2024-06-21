import { homeTab } from "./home";

const pageContent = (function() {
  const contentDiv = document.querySelector('#content');
  homeTab(contentDiv);
})();