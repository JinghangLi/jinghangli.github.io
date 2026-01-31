document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const toggle = document.getElementById("lang-toggle");
  if (!toggle) {
    return;
  }

  const stored = localStorage.getItem("site-lang");
  const initial = stored === "zh" ? "zh" : "en";
  root.setAttribute("data-lang", initial);
  toggle.textContent = initial === "en" ? "中文" : "EN";
  toggle.setAttribute("aria-pressed", initial === "zh" ? "true" : "false");

  toggle.addEventListener("click", (event) => {
    event.preventDefault();
    const current = root.getAttribute("data-lang") || "en";
    const next = current === "en" ? "zh" : "en";
    root.setAttribute("data-lang", next);
    localStorage.setItem("site-lang", next);
    toggle.textContent = next === "en" ? "中文" : "EN";
    toggle.setAttribute("aria-pressed", next === "zh" ? "true" : "false");
  });
});
