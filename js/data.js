const product = {
  name: "Мотоблок 9 л.с.",
  specs: [
    { label: "Мощность", value: "9", unit: "л.с." },
    { label: "Охлаждение", value: "Водяное" },
    { label: "Стартер", value: "Электро" }
  ]
};

document.getElementById("product-name").innerText = product.name;

const specsContainer = document.getElementById("product-specs");

let html = "<ul>";
product.specs.forEach(spec => {
  html += `<li><strong>${spec.label}:</strong> ${spec.value} ${spec.unit || ""}</li>`;
});
html += "</ul>";

specsContainer.innerHTML = html;
