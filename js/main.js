(function() {
  var root = document.documentElement;
  var meta = document.getElementById("theme-color");
  var themeButtons = [
    document.getElementById("theme-toggle"),
    document.getElementById("theme-toggle-mobile"),
    document.getElementById("theme-toggle-nav")
  ].filter(Boolean);
  var fontButton = document.getElementById("font-toggle-nav");
  var navToggle = document.getElementById("nav-toggle");
  var scrollToTop = document.getElementById("scroll-to-top");

  function persist(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      return;
    }
  }

  function toggleTheme() {
    root.classList.add("no-transitions");
    root.classList.toggle("dark");

    if (meta) {
      meta.content = root.classList.contains("dark") ? "rgb(32, 32, 32)" : "#fff";
    }

    persist("theme", root.classList.contains("dark") ? "dark" : "light");

    requestAnimationFrame(function() {
      requestAnimationFrame(function() {
        root.classList.remove("no-transitions");
      });
    });
  }

  function toggleFont() {
    root.classList.toggle("sans-serif");
    persist("font", root.classList.contains("sans-serif") ? "sans-serif" : "serif");
  }

  themeButtons.forEach(function(button) {
    button.addEventListener("click", toggleTheme);
  });

  if (fontButton) {
    fontButton.addEventListener("click", toggleFont);
  }

  if (navToggle) {
    navToggle.addEventListener("click", function() {
      var nav = this.parentElement;
      var isOpen = nav.classList.toggle("open");
      this.setAttribute("aria-expanded", String(isOpen));
    });
  }

  if (scrollToTop) {
    scrollToTop.addEventListener("click", function(event) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      var target = document.getElementById("top");
      if (target) {
        target.focus({ preventScroll: true });
      }
    });
  }
})();
