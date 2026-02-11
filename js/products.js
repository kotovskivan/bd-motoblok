// У товара:
// uid — уникальный ID системы (внутренний, неизменный)
// sku_site — артикул товара для сайта (то, что ты называешь "Артикул")
// sku_supplier — артикул поставщика
// moysklad_code — код МойСклад

export const PRODUCTS = [
  {
    uid: "p_000001",
    sku_site: "MOT-001",
    sku_supplier: "SUP-MOT-001",
    moysklad_code: "MS-000001",

    alias: "/motocikl-motoleader-ml150street",
    brand: "MOTOLEADER",
    section: "Мотоциклы",
    color: "Черный",
    price: 0,
    currency: "UAH",
    available: "Нет в наличии",

    h1_ru: "Мотоцикл MOTOLEADER ML150 STREET",
    h1_ua: "Мотоцикл MOTOLEADER ML150 STREET",

    // ВНИМАНИЕ: характеристики храним по ключам, а не по RU/UA колонкам
    props: {
      klass_mototsikla: "Дорожный",
      obdvigatelya: "150 см³",
      tip_dvigatelya: "бензиновый, 4-х тактный",
      opis_cilindrov: "1-цилиндровый",
      max_moshnost: "12 л.с.",
      krutyashiy_moment: "11.3 Н.м.",
      tip_zapuska: "электростартер, ключ",
      ohla_dvig: "воздушное",
      vprysk_topliva: "карбюраторная",
      tip_kpp: "механическая",
      korobka_peredach: "5-ти ступенчатая",
      tormoza: "барабанный / барабанный",
      koleso_pered: "2,75 — 18 R",
      koleso_zad: "3,25 — 18 R",
      max_skorost: "120 км/ч",
      obem_baka: "14 л",
      rashod_topliva: "2.3 л/100км",
      ves_snaryazh: "132 кг",
      vysota_sidenya: "850 мм",
      garantiya: "12 месяцев",
      strana: "Китай"
    }
  },

  {
    uid: "p_000002",
    sku_site: "MOT-002",
    sku_supplier: "SUP-MOT-002",
    moysklad_code: "MS-000002",

    alias: "/motocikl-motoleader-ml200shark",
    brand: "MOTOLEADER",
    section: "Мотоциклы",
    color: "Красный",
    price: 0,
    currency: "UAH",
    available: "Нет в наличии",

    h1_ru: "Мотоцикл MOTOLEADER ML200 SHARK",
    h1_ua: "Мотоцикл MOTOLEADER ML200 SHARK",

    props: {
      klass_mototsikla: "Дорожный",
      obdvigatelya: "200 см³",
      tip_dvigatelya: "бензиновый, 4-х тактный",
      max_moshnost: "17 / 8000",
      krutyashiy_moment: "13 / 7500",
      tip_zapuska: "электростартер, ключ / кнопка",
      ohla_dvig: "воздушное",
      vprysk_topliva: "карбюраторная",
      korobka_peredach: "5-ти ступенчатая",
      tormoza: "дисковый / барабанный",
      koleso_pered: "2,75 — 18 R",
      koleso_zad: "3,25 — 18 R",
      kolesnaya_baza: "1340 мм",
      max_skorost: "120 км/ч",
      obem_baka: "12 л",
      rashod_topliva: "2.1 л/100км",
      ves_snaryazh: "120 кг",
      vysota_sidenya: "810 мм",
      garantiya: "12 месяцев",
      strana: "Китай"
    }
  },

  {
    uid: "p_000003",
    sku_site: "MOT-003",
    sku_supplier: "SUP-MOT-003",
    moysklad_code: "MS-000003",

    alias: "/motocikl-spark-sp150d-1",
    brand: "SPARK",
    section: "Мотоциклы",
    color: "Черно-белый",
    price: 0,
    currency: "UAH",
    available: "Нет в наличии",

    h1_ru: "Мотоцикл SPARK SP150D-1",
    h1_ua: "Мотоцикл SPARK SP150D-1",

    props: {
      klass_mototsikla: "Эндуро",
      obdvigatelya: "149 см³",
      tip_dvigatelya: "бензиновый, 4-х тактный",
      opis_cilindrov: "1-цилиндровый, 2-клапанный, SOHC, с верхним расположением распредвала",
      max_moshnost: "11 / 7500",
      krutyashiy_moment: "10 / 6500",
      tip_zapuska: "электростартер, ключ / кнопка",
      balans_val: "установлен",
      ohla_dvig: "воздушное",
      vprysk_topliva: "карбюраторная",
      tip_privoda: "цепной",
      sceplenie: "механическое, многодисковое, в масляной ванне",
      tormoza: "дисковый / барабанный",
      koleso_pered: "80 / 100 — 21 R",
      koleso_zad: "120 / 80 — 18 R",
      kolesnaya_baza: "1350 мм",
      dorozhniy_prosvet: "290 мм",
      max_skorost: "90 км/ч",
      obem_baka: "9.5 л",
      rashod_topliva: "2.4 л/100км",
      ves_snaryazh: "119 кг",
      vysota_sidenya: "840 мм",
      garantiya: "12 месяцев",
      strana: "Китай"
    }
  }
];
