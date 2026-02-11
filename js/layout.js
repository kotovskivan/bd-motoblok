async function loadTemplate(id, file) {
  const response = await fetch(file, { cache: "no-store" });
  const html = await response.text();
  const el = document.getElementById(id);
  el.innerHTML = html;
  return el;
}

function applyHeaderOffset(headerEl) {
  if (!headerEl) return;
  const h = headerEl.querySelector(".site-header");
  if (!h) return;

  const set = () => {
    const height = h.offsetHeight || 0;
    document.documentElement.style.setProperty("--header-h", `${height}px`);
  };

  set();
  window.addEventListener("resize", set);
}

(async () => {
  const headerEl = await loadTemplate("header", "templates/header.html");
  await loadTemplate("footer", "templates/footer.html");
  applyHeaderOffset(headerEl);
})();
