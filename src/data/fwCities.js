// FW_CITIES — Fernwärme-Städte mit detaillierten Infos
// dh = Fernwärmeanteil in %
// dhColor: >=50 → green, >=30 → amber, >=20 → blue, 0 → gray (geplant)
export function dhColor(dh) {
  if (dh === 0) return '#888aaa'
  if (dh >= 50) return '#5bd68a'
  if (dh >= 30) return '#e8a857'
  return '#5bafd6'
}

export function dhCategory(dh) {
  if (dh === 0) return 'fw-cities-lo'
  if (dh >= 50) return 'fw-cities-hi'
  if (dh >= 30) return 'fw-cities-mid'
  return 'fw-cities-lo'
}

export const FW_CITIES = [
  {n:'Berlin',c:'DE',lat:52.52,lng:13.40,dh:40,pop:3.7,op:'Vattenfall Wärme / Veolia',url:'https://www.vattenfall.de/waerme',contact:'info@vattenfall.de',src_mix:'Gas 45%, Müllverbrennung 30%, Biomasse 15%, Geothermie 10%',net_km:2000,status:'In Betrieb'},
  {n:'Hamburg',c:'DE',lat:53.55,lng:10.00,dh:22,pop:1.9,op:'Wärme Hamburg GmbH',url:'https://www.waerme.hamburg',contact:'info@waerme.hamburg',src_mix:'Gas 55%, Industrieabwärme 25%, Biomasse 10%, Kohle 10%',net_km:850,status:'In Betrieb'},
  {n:'Leipzig',c:'DE',lat:51.34,lng:12.37,dh:45,pop:0.6,op:'Stadtwerke Leipzig',url:'https://www.l.de/stadtwerke',contact:'kontakt@l.de',src_mix:'KWK Gas 60%, Braunkohle 25%, Erneuerbar 15%',net_km:330,status:'In Betrieb'},
  {n:'Dresden',c:'DE',lat:51.05,lng:13.74,dh:38,pop:0.56,op:'SachsenEnergie (DREWAG)',url:'https://www.sachsenenergie.de',contact:'info@sachsenenergie.de',src_mix:'Gas KWK 65%, Industrieabwärme 20%, Biomasse 15%',net_km:290,status:'In Betrieb'},
  {n:'Rostock',c:'DE',lat:54.09,lng:12.14,dh:55,pop:0.21,op:'Stadtwerke Rostock',url:'https://www.stadtwerke-rostock.de',contact:'info@stadtwerke-rostock.de',src_mix:'Gas KWK 50%, Biomasse 30%, Abwärme 20%',net_km:180,status:'In Betrieb'},
  {n:'Halle',c:'DE',lat:51.48,lng:12.00,dh:50,pop:0.24,op:'EVH GmbH',url:'https://www.evh.de',contact:'info@evh.de',src_mix:'Gas KWK 70%, Braunkohle 30%',net_km:150,status:'In Betrieb'},
  {n:'Cottbus',c:'DE',lat:51.76,lng:14.33,dh:60,pop:0.10,op:'LEAG (Lausitz Energie)',url:'https://www.leag.de',contact:'info@leag.de',src_mix:'Braunkohle KWK 75%, Gas 15%, Biomasse 10% — Transformation geplant',net_km:120,status:'In Betrieb (Umbau)'},
  {n:'Frankfurt (Oder)',c:'DE',lat:52.34,lng:14.55,dh:35,pop:0.06,op:'FEW GmbH',url:'https://www.few-frankfurt.de',contact:'info@few-frankfurt.de',src_mix:'Gas 80%, Biomasse 20%',net_km:111,status:'In Betrieb'},
  {n:'Köln',c:'DE',lat:50.94,lng:6.96,dh:14,pop:1.08,op:'RheinEnergie AG',url:'https://www.rheinenergie.com',contact:'info@rheinenergie.com',src_mix:'Gas KWK 70%, Müllverbrennung 20%, Klärgas 10%',net_km:380,status:'In Betrieb — BOWA HQ-Region'},
  {n:'Warschau',c:'PL',lat:52.23,lng:21.01,dh:55,pop:1.8,op:'Veolia Energia Warszawa',url:'https://www.veolia.pl',contact:'+48 22 523 60 00',src_mix:'Kohle KWK 55%, Gas 25%, Biomasse 10%, Abwärme 10%',net_km:1750,status:'In Betrieb'},
  {n:'Łódź',c:'PL',lat:51.76,lng:19.46,dh:62,pop:0.69,op:'EC Łódź S.A.',url:'https://www.eclodz.pl',contact:'+48 42 638 40 00',src_mix:'Kohle KWK 70%, Gas 20%, Biomasse 10%',net_km:500,status:'In Betrieb'},
  {n:'Poznań',c:'PL',lat:52.41,lng:16.93,dh:50,pop:0.55,op:'Veolia Energia Poznań',url:'https://www.veolia.pl',contact:'+48 61 858 47 00',src_mix:'Kohle 60%, Gas KWK 30%, Biomasse 10%',net_km:380,status:'In Betrieb'},
  {n:'Wrocław',c:'PL',lat:51.11,lng:17.04,dh:48,pop:0.64,op:'Fortum Wrocław',url:'https://www.fortum.com/pl',contact:'+48 71 324 57 00',src_mix:'Kohle KWK 65%, Gas 25%, Biomasse 10%',net_km:420,status:'In Betrieb'},
  {n:'Gdańsk',c:'PL',lat:54.35,lng:18.65,dh:42,pop:0.47,op:'Energa Ciepło Gdańsk',url:'https://www.energa.pl',contact:'+48 58 778 94 00',src_mix:'Gas 50%, Kohle 35%, Biomasse 15%',net_km:280,status:'In Betrieb'},
  {n:'Bydgoszcz',c:'PL',lat:53.12,lng:18.00,dh:52,pop:0.35,op:'MEC Bydgoszcz',url:'https://www.mec.bydgoszcz.pl',contact:'+48 52 30 15 100',src_mix:'Kohle KWK 70%, Gas 20%, Biomasse 10%',net_km:210,status:'In Betrieb'},
  {n:'Szczecin',c:'PL',lat:53.43,lng:14.55,dh:45,pop:0.40,op:'PGE Energia Ciepła',url:'https://www.pge-ec.pl',contact:'+48 91 460 70 00',src_mix:'Kohle 65%, Gas 25%, Biomasse 10%',net_km:250,status:'In Betrieb'},
  {n:'Amsterdam',c:'NL',lat:52.37,lng:4.90,dh:25,pop:0.87,op:'Vattenfall Warmte NL',url:'https://www.vattenfall.nl/warmte',contact:'warmte@vattenfall.nl',src_mix:'Müllverbrennung 45%, Industrieabwärme 30%, Gas 15%, Geothermie 10%',net_km:420,status:'In Betrieb'},
  {n:'Rotterdam',c:'NL',lat:51.92,lng:4.48,dh:28,pop:0.65,op:'HVC Warmte / Eneco',url:'https://www.eneco.nl',contact:'warmte@eneco.nl',src_mix:'Industrieabwärme Hafen 50%, Müllverbrennung 30%, Gas 20%',net_km:500,status:'In Betrieb'},
  {n:'Almere',c:'NL',lat:52.37,lng:5.22,dh:30,pop:0.21,op:'Vattenfall Warmte Almere',url:'https://www.vattenfall.nl/warmte',contact:'warmte@vattenfall.nl',src_mix:'Gas KWK 60%, Geothermie 25%, Aquathermie 15%',net_km:130,status:'In Betrieb'},
  {n:'Riga',c:'LV',lat:56.95,lng:24.11,dh:65,pop:0.63,op:'Riga Siltums (Latvenergo)',url:'https://www.latvenergo.lv',contact:'+371 6720 9900',src_mix:'Gas KWK 60%, Biomasse 25%, Abwärme 15%',net_km:480,status:'In Betrieb'},
  {n:'Tallinn',c:'EE',lat:59.44,lng:24.75,dh:70,pop:0.45,op:'Utilitas Tallinn',url:'https://www.utilitas.ee',contact:'+372 622 3620',src_mix:'Biomasse 45%, Gas 25%, Müllverbrennung 20%, Abwärme 10%',net_km:310,status:'In Betrieb — 70% CO₂-frei'},
  {n:'Vilnius',c:'LT',lat:54.69,lng:25.28,dh:58,pop:0.59,op:'Vilniaus Šilumos Tinklai',url:'https://www.silumos.lt',contact:'+370 5 278 5200',src_mix:'Biomasse 50%, Gas 30%, Abwärme 20%',net_km:390,status:'In Betrieb'},
  {n:'Kopenhagen',c:'DK',lat:55.68,lng:12.57,dh:65,pop:0.79,op:'HOFOR A/S',url:'https://www.hofor.dk',contact:'+45 33 63 63 63',src_mix:'Geothermie 15%, Wärmepumpen 20%, Müllverbrennung 30%, Biomasse 25%, Gas 10%',net_km:1200,status:'In Betrieb — Weltklasse-Netz'},
  // BOWA AKTIONSRAUM (Rheinisches Revier)
  {n:'Grevenbroich',c:'DE',lat:51.088,lng:6.588,dh:18,pop:0.065,op:'RWE Power AG',url:'https://www.rwe.com',contact:'info@rwe.com',src_mix:'Braunkohle-KWK 100% — Versorgung endet 2029. Nachfolgelösung gesucht.',net_km:15,status:'In Betrieb — Ausstieg 2029'},
  {n:'Düsseldorf',c:'DE',lat:51.227,lng:6.773,dh:18,pop:0.65,op:'Stadtwerke Düsseldorf',url:'https://www.swd-ag.de',contact:'info@swd-ag.de',src_mix:'Gas KWK 50%, Müllverbrennung 35%, Biomasse 15%',net_km:277,status:'In Betrieb — Ausbau geplant'},
  {n:'Neuss',c:'DE',lat:51.202,lng:6.701,dh:12,pop:0.16,op:'Stadtwerke Neuss',url:'https://www.stadtwerke-neuss.de',contact:'02131 531 0503',src_mix:'Industrieabwärme 100% — ALUNORF Aluminium-Walzwerk',net_km:8,status:'In Betrieb'},
  {n:'Leverkusen',c:'DE',lat:51.031,lng:7.002,dh:20,pop:0.168,op:'ewl Leverkusen',url:'https://www.ewl-leverkusen.de',contact:'info@ewl-leverkusen.de',src_mix:'Gas KWK 65%, Industrieabwärme Chempark 25%, Biomasse 10%',net_km:55,status:'In Betrieb'},
  {n:'Dinslaken',c:'DE',lat:51.566,lng:6.729,dh:30,pop:0.073,op:'Fernwärme Niederrhein GmbH',url:'https://www.fernwaerme-niederrhein.de',contact:'vertrieb@fernwaerme-niederrhein.de',src_mix:'Biomasse (DHE) 60%, Gas BHKW 30%, Biomasse-BHKW 10%',net_km:700,status:'In Betrieb — 700km Verbundnetz'},
  {n:'Mönchengladbach',c:'DE',lat:51.186,lng:6.441,dh:0,pop:0.261,op:'NEW Energie GmbH (Planung)',url:'https://www.new-energie.de',contact:'info@new-energie.de',src_mix:'Geplant — Kommunale Wärmeplanung Dez. 2024 beschlossen',net_km:0,status:'Geplant — Konzept 2024'},
]
