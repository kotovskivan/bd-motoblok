async function loadTemplate(id, file) {
  const response = await fetch(file);
  const html = await response.text();
  document.getElementById(id).innerHTML = html;
}

loadTemplate("header", "templates/header.html");
loadTemplate("footer", "templates/footer.html");
