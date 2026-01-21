# Zajíček Holding - Vlastnická struktura

Interaktivní vizualizace holdingové struktury firem Radima Zajíčka.

## Funkce

- **Interaktivní graf** - D3.js vizualizace vlastnických vztahů
- **Drag & Drop** - Přetahování uzlů pro vlastní uspořádání
- **Automatické ukládání** - Pozice a změny se ukládají do localStorage
- **CRUD operace** - Přidávání, úprava, mazání firem a vazeb
- **Detail panel** - Kliknutím na firmu zobrazíte detaily
- **Přezdívky** - Dvojklik pro přidání vlastní poznámky k firmě
- **Zoom & Pan** - Kolečko myši pro zoom, tažení pro posun

## Typy firem

| Barva | Typ |
|-------|-----|
| 🟢 Zelená | Fyzická osoba |
| 🔴 Červená | Hlavní holding |
| 🟡 Žlutá | Sub-holding |
| 🟣 Fialová | Dceřiná firma |
| 💜 Světle fialová | Vnukovská firma |
| 🟩 Tmavě zelená | Přímo vlastněná |
| 🟠 Oranžová | Externí (mimo strukturu) |

## Použití

1. Otevřete `index.html` v prohlížeči
2. Klikněte na firmu pro zobrazení detailů
3. Dvojklik pro přidání přezdívky
4. Tlačítko `+` pro přidání nové firmy
5. V detail panelu: Upravit, Změnit vlastníka, Odpojit, Smazat

## Hostování

Soubor je dostupný na: `http://116.202.174.252:9090/`

## Technologie

- HTML5 / CSS3 / JavaScript
- D3.js v7 pro vizualizaci grafů
- localStorage pro persistenci dat
