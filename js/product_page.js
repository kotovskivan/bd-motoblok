import { PRODUCTS } from "../data/products.js";
import { PROPS } from "../data/props_catalog.js";
import { SITES } from "../data/site_profiles.js";

function esc(s){
  return String(s ?? "")
    .replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;")
    .replaceAll('"',"&quot;");
}

function getProductBySku(sku){
  return PRODUCTS.find(p => p.sku_site === sku) || PRODUCTS[0];
}

function getSite(siteKey){
  return SITES[siteKey] || SITES.vse_motobloki;
}

function propLabel(key, lang){
  const item = PROPS[key];
  if (!item) return key; // если ключа нет в справочнике — покажем ключ
  return item[lang] || item.ru || key;
}

function renderProductsList(activeSku, siteKey){
  const list = document.getElementById("products-list");
  if (!list) return;

  list.innerHTML = PRODUCTS.map(p => {
    const active = p.sku_site === activeSku ? " is-active" : "";
    return `
      <a class="pitem${active}" href="product.html?site=${encodeURIComponent(siteKey)}&sku=${encodeURIComponent(p.sku_site)}">
        <div class="pitem__top">
          <div class="pitem__sku">${esc(p.sku_site)}</div>
          <div class="pitem__brand">${esc(p.brand)}</div>
        </div>
        <div class="pitem__name">${esc(p.h1_ru || p.h1_ua || p.sku_site)}</div>
        <div class="pitem__meta"><span>${esc(p.color)}</span><span>•</span><span>${esc(p.available)}</span></div>
      </a>
    `;
  }).join("");
}

function renderProduct(p, site){
  const lang = site.lang;

  document.getElementById("product-name").textContent = (lang === "ua" ? p.h1_ua : p.h1_ru) || p.h1_ru || p.h1_ua || p.sku_site;

  // IDs
  document.getElementById("ids").innerHTML = `
    <div class="chips">
      <span class="chip"><strong>UID:</strong> ${esc(p.uid)}</span>
      <span class="chip"><strong>Артикул (site):</strong> ${esc(p.sku_site)}</span>
      <span class="chip"><strong>Артикул (supplier):</strong> ${esc(p.sku_supplier)}</span>
      <span class="chip"><strong>МойСклад:</strong> ${esc(p.moysklad_code)}</span>
    </div>
  `;

  // meta
  document.getElementById("product-meta").innerHTML = `
    <div class="chips">
      <span class="chip">${esc(p.brand)}</span>
      <span class="chip">${esc(p.section)}</span>
      <span class="chip">${esc(p.color)}</span>
      <span class="chip">${esc(p.available)}</span>
      <span class="chip">${esc(p.currency)} ${esc(p.price)}</span>
    </div>
    <div class="muted">Алиас: <span class="mono">${esc(p.alias)}</span></div>
    <div class="muted">Профиль сайта: <span class="mono">${esc(site.name)}</span></div>
  `;

  // specs by site profile (showKeys)
  const ul = site.showKeys.map(key => {
    const val = p.props?.[key];
    if (!val) return "";
    const label = propLabel(key, lang);
    return `<li><strong>${esc(label)}:</strong> ${esc(val)}</li>`;
  }).filter(Boolean).join("");

  document.getElementById("product-specs").innerHTML = `<ul class="specs">${ul}</ul>`;
}

(function init(){
  const params = new URLSearchParams(location.search);
  const siteKey = params.get("site") || "vse_motobloki";
  const sku = params.get("sku") || PRODUCTS[0].sku_site;

  const site = getSite(siteKey);
  const p = getProductBySku(sku);

  renderProductsList(p.sku_site, siteKey);
  renderProduct(p, site);
})();
