import { Header } from "../templates/Header";
import { Home } from "../pages/Home";
import { Character } from "../pages/Character";
import { Error404 } from "../pages/Error404";
import { getHash } from "../utils/getHash";
import { resolveRoutes } from "../utils/resolveRoutes";

const routes = {
  "/": Home,
  "/:id": Character,
  "/contact": "Contact",
};

const router = async () => {
  const header = null || document.getElementById("header");
  const content = null || document.getElementById("content");

  let hash = getHash();
  let route = await resolveRoutes(hash);
  let render = routes[route] ? routes[route] : Error404;

  header.innerHTML = await Header();
  content.innerHTML = await render();

  // Switch toggle
  const switchToggle = null || document.querySelector("#switch-toggle");
  const switchToggleText =
    null || document.querySelector("#switch-toggle-text");

  const swichTheme = (event) => {
    if (event.target.checked) {
      switchToggleText.innerText = "Light Mode";
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      switchToggleText.innerText = "Dark Mode";
      document.documentElement.setAttribute("data-theme", "light");
    }
  };
  console.log(document.documentElement);

  switchToggle.addEventListener("change", swichTheme, false);
};

export default router;
