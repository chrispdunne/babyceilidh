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

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        syncMenuState();
        toggle.focus();
      }
    });
  }

  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = "© " + new Date().getFullYear();
  }

  var EO_FORM_ID = "9eb335b6-4962-11f1-b8a4-79a83926c823";
  var eoEmbed = document.querySelector(".newsletter-embed");

  function loadNewsletterForm() {
    if (!eoEmbed || eoEmbed.getAttribute("data-eo-loaded") === "true") return;
    eoEmbed.setAttribute("data-eo-loaded", "true");
    var s = document.createElement("script");
    s.async = true;
    s.src =
      "https://eocampaign1.com/form/" + EO_FORM_ID + ".js";
    s.setAttribute("data-form", EO_FORM_ID);
    eoEmbed.appendChild(s);
  }

  if (eoEmbed) {
    if ("IntersectionObserver" in window) {
      var newsletterObserver = new IntersectionObserver(
        function (entries, observer) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              loadNewsletterForm();
              observer.disconnect();
            }
          });
        },
        { rootMargin: "200px 0px", threshold: 0 },
      );
      newsletterObserver.observe(eoEmbed);
    } else {
      loadNewsletterForm();
    }
  }
})();
