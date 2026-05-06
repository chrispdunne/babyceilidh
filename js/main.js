(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Year
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = "© " + new Date().getFullYear();
  }

  // iFrame
  var iFrame = document.getElementById("myIframe");
  iFrame.contentWindow.document.body.style.backgroundColor = "red";
})();
