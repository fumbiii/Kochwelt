const btnElList = document.querySelectorAll(".menu-links");

btnElList.forEach((btnEl) => {
  btnEl.addEventListener("click", (e) => {
    document
      .querySelectorAll(".special")
      .forEach((el) => el.classList.remove("special"));

    btnEl.classList.add("special");
  });
});

function ensureActiveStyle() {
  if (document.getElementById("menu-active-style")) return;
  const style = document.createElement("style");
  style.id = "menu-active-style";
  style.textContent = `
        .special {
            color: #008000 !important;
            text-decoration-line: underline !important;
            text-decoration-thickness: 3px !important;
            text-underline-offset: 6px !important;
            font-weight: 600 !important;
        }
    `;
  document.head.appendChild(style);
}

function setActiveLinkOnLoad() {
  const currentFile = (
    location.pathname.split("/").pop() || "index.html"
  ).toLowerCase();
  ensureActiveStyle();
  document.querySelectorAll(".menu-links").forEach((link) => {
    const href = (link.getAttribute("href") || "")
      .split("/")
      .pop()
      .toLowerCase();
    if (!href) return;
    if (href === currentFile) {
      link.classList.add("special");
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setActiveLinkOnLoad);
} else {
  setActiveLinkOnLoad();
}
