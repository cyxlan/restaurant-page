import { homeTab } from "./home";
import "../css/reset.css";
import "../css/index.css";

const pageContent = (function() {
  const contentDiv = document.querySelector('#content');
  homeTab(contentDiv);
})();