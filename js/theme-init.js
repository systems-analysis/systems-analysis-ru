(function() {
  var root = document.documentElement;
  var theme = null;
  var font = null;
  var meta = document.getElementById("theme-color");
  var prefersDark = false;

  try {
    theme = localStorage.getItem("theme");
    font = localStorage.getItem("font");
  } catch (error) {
    theme = null;
    font = null;
  }

  if (typeof window.matchMedia === "function") {
    prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  if (theme === "dark" || (!theme && prefersDark)) {
    root.classList.add("dark");
    if (meta) {
      meta.content = "rgb(32, 32, 32)";
    }
  }

  if (font === "sans-serif") {
    root.classList.add("sans-serif");
  }
})();
