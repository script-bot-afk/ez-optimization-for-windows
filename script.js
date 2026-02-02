const button = document.getElementById("actionBtn");
const output = document.getElementById("output");

button.addEventListener("click", () => {
  output.textContent = "Have Fun!!";

  window.open(
    "https://github.com/script-bot-afk/ez-optimizations",
    "_blank"
  );
});