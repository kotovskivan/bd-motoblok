// 3 сайта: разные языки и разные наборы ключей на вывод

export const SITES = {
  vse_motobloki: {
    name: "Все-Мотоблоки",
    lang: "ru",
    showKeys: [
      "klass_mototsikla","obdvigatelya","tip_dvigatelya","opis_cilindrov",
      "max_moshnost","krutyashiy_moment","tip_zapuska","balans_val",
      "ohla_dvig","vprysk_topliva","tip_kpp","korobka_peredach","opis_kpp",
      "tip_privoda","sceplenie","tormoza","abs","podveska_pered","podveska_zad",
      "koleso_pered","koleso_zad","kolesnaya_baza","dorozhniy_prosvet",
      "max_skorost","obem_baka","rashod_topliva","ves_snaryazh",
      "vysota_sidenya","garantiya","strana","gabarity","gruzopodemnost"
    ]
  },

  ua_motors: {
    name: "UA Motors",
    lang: "ru", // если надо RU — оставь ru, если UA — поставь ua
    showKeys: [
      "obdvigatelya","max_moshnost","ohla_dvig","vprysk_topliva",
      "korobka_peredach","tormoza","abs","max_skorost","obem_baka",
      "ves_snaryazh","garantiya","strana"
    ]
  },

  moto_master: {
    name: "Moto Master",
    lang: "ua",
    showKeys: [
      // пример: на MotoMaster показываем только то, что нужно
      "obdvigatelya","tip_dvigatelya","max_moshnost","ohla_dvig",
      "korobka_peredach","tormoza","abs","max_skorost","obem_baka",
      "ves_snaryazh","vysota_sidenya","garantiya","strana"
    ]
  }
};
