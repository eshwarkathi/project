const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-theme");

  // Change button text for fun
  toggleBtn.textContent = body.classList.contains("dark-theme")
    ? "Toggle Light Mode"
    : "Toggle Dark Mode";
});
