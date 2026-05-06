(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");

  function syncMenuState() {
    if (!toggle || !nav) return;
    var open = nav.classList.contains("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute(
      "aria-label",
      open ? "Close navigation menu" : "Open navigation menu",
    );
  }

  if (toggle && nav) {
    syncMenuState();
    toggle.addEventListener("click", function () {
      nav.classList.toggle("is-open");
      syncMenuState();
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        syncMenuState();
      });
    });
  }

  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = "© " + new Date().getFullYear();
  }
})();
