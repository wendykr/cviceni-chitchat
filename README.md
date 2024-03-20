# Cvičení: Aplikace ChitChat

Kurz Základy TypeScriptu

V tomto cvičení vytvoříme jednoduchou aplikaci pro chatování podobnou například Slacku. Abychom se přiblížili reálnému světu, budeme pracovat s daty z API serveru.

Finální aplikace bude vypadat nějak takto:
![Ukázka možného výsledku](https://kodim.cz/cms/assets/kurzy/zaklady-ts/lekce/nastaveni/cviceni/chitchat.png)


## 1. Založení projektu
Pro založení projektu pro aplikaci ChitChat budeme vycházet z šablony pro vanilla TypeScript. Postupujte podle následujících kroků:

1. Založte si nový vanilla TypeScript projekt pomocí šablony `kodim-app`:
    ```
    npm init kodim-app@latest cviceni-chitchat vanilla-ts
    ```

    Tento příkaz vytvoří nový adresář chitchat, který si otevřete ve VS Code editoru.

2. V [připraveném](https://github.com/kodim-vyuka/cviceni-chitchat-zadani) repozitáři máte k dispozici soubory `index.html` a `styles.css`, ve kterých je vytvořená kostra aplikace s ukázkovým obsahem. Tento repozitář si nemusíte klonovat, stačí si stáhnout soubory přímo z prohlížeče a vložit je do složky `src` ve vašem projektu.
3. Spusťte vývojový server příkazem
    ```
    npm run dev
    ```
    a otevřete si aplikaci v prohlížeči. Měli byste vidět kostru aplikace s ukázkovým obsahem.
4. Tentokrát budeme pracovat s REST API serverem, který bude poskytovat obsah pro kanály, zprávy a vlákna. Tento server je již připravený v [tomto repozitáři](https://github.com/kodim-vyuka/chitchat-api). Repozitář si naklonujte a otevřete si jej v **novém okně** VS Code editoru. Server se spustí příkazem
    ```
    npx jsonhost@latest
    ```
    Server pak bude běžet na adrese `http://localhost:4000`. Více informací o API najdete přímo v README repozitáře.

5. Všimněte si, že nyní vám na počítači běží dva lokální servery. Jeden vývojový pro frontend a druhý pro backend API.
6. Prohlédněte si dobře data, která API vrací. Pro tato data bude později potřeba vytvořit datový model v TypeScriptu. Zatím model nevytvářejte, ale zkuste si udělat hrubou představu, jak by mohl vypadat.


## 2. Seznam kanálů
V aplikaci ChitChat budeme pracovat s kanály, které budou zobrazené v levém sloupci. V tomto cvičení si stáhneme data o kanálech z API serveru a zobrazíme je na stránce.

Jelikož nemáme React nebo jiný frontend framework, který umí pracovat se stavem, celý obsah aplikace vždy znova vykreslíme při každém načtené stránky. Všechna data je tedy potřeba stáhnout na začátku a poté z nich vytvořit HTML obsah stránky.

Podobně jako ve cvičení s kalendářem si na začátku vyberte, zda budete obsah stránky tvořit čistě pomocí `innerHTML` nebo pomocí DOM API a `createElement`. Je zcela na vás, který postup je vám bližší.

1. Nejdříve je potřeba vytvořit část datového modelu pro kanály. Založte soubor `data-model.ts` a vytvořte příslušné datové typy.
2. Nyní už můžete po načtení stránky fetchnout data z API a dle dat vytvořit obsah levého sloupce s kanály.
Pokud se vám toto povedlo, máte v podstatě vyhráno, zbytek aplikace je velmi analogický.


## 3. Zprávy a vlákna
Dokončíme aplikaci ChitChat tím, že zobrazíme zprávy a vlákna ve prostředním a pravém sloupci.

Zásadní věc, kterou si musíme rozmyslet je, odkud zjistíme, kterou zprávu zobrazit a jaké vlákno máme zobrazit. Kdybychom pracovali v Reactu, měli bychom tuto informaci uloženou někde ve stavu. Ve vanilla projektu si vypomůžeme search parametry v URL adrese.

Pokud chceme například zobrazit obsah kanálu s `id` 1, URL adresa bude vypadat takto:

```
http://localhost:8080/?channel=1
```
Když chceme navíc zobrazit obsah vlákna u zprávy s `id` 2, URL adresa bude vypadat takto:

```
http://localhost:8080/?channel=1&thread=2
```
Pokud si nejste jistí jak získat search parametry z URL adresy, můžete se podívat na příklady použití třídy [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams#examples).

### Zobrazení zpráv a vláken
Jakmile máte k dispozici všechny informace o tom, který kanál, případně které vlákno je třeba zobrazit, stačí opět

1. vytvořit příslušný datový model pro data z API,
2. stáhnout data z API podle toho, co je v URL adrese,
3. zobrazit data na stránce vámi zvoleným způsobem.

Pokračujte v tomto duchu, dokud nebude aplikace funkční, úžasná, krásná, a dokud nepocítíte hřejivý pocit z dobře odvedené práce. Samozřejmě se můžete rozvášnit a přidat nějaké bonusové featury nebo si dokonce pohrát s API serverem a přidat nějaká vlastní data. Představivosti se meze nekladou.