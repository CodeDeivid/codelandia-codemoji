// Toggle Dark Mode
const toggleDarkMode = document.querySelector(".dark-mode-toggle");
const logo = document.querySelector(".logo");
const light = document.querySelector(".fa-lightbulb");
const title = document.querySelector(".logo-container h1");
const desc = document.querySelector("main section.second h2");
const buttons = document.querySelectorAll("main section.second .buttons button");

toggleDarkMode.addEventListener("click", () => {
  // Elementos Que Serão Alterados No Clique
  document.body.classList.toggle("dark");
  logo.classList.toggle("dark");
  light.classList.toggle("dark");
  title.classList.toggle("dark");
  desc.classList.toggle("dark");
  buttons.forEach((button => {
    button.classList.toggle("dark")
  }))
});
// END