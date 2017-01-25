# fagkveld_react_oppgaver

## Oppsett

Frontenden i prosjektet er laget med [create-react-app](https://github.com/facebookincubator/create-react-app).

Backenden i prosjektet bruker [HapiJS](https://hapijs.com).

## Komme i gang 
Du trenger to terminaler, én for frontend og én for backend.

* Terminal 1: Gå til prosjektmappen, deretter `cd trumpnews`, kjør `npm install` og så `npm start`.
* Terminal 2: Gå til prosjektmappen, deretter `cd trumpnews-server`, kjør `npm install` og så `npm start`.

Når du har kjørt `npm start` i terminal 1 vil nettsiden være tilgjengelig på http://localhost:3000/. Applikasjonen er satt opp med hot reloading, som gjør at de fleste endringer skal vises automatisk i nettleseren så fort du gjør endringer i koden.

## Oppgave 1
I denne oppgaven skal du sjekke at applikasjonen kjører som forventet.
Last ned repo ved å kjøre **git clone https://github.com/mesan/fagkveld_react_oppgaver.git**
Installer alle nødvendige pakker ved å kjøre kommandoen **npm install** for deretter å starte applikasjonen ved å kjøre **npm start**

Gjør endring i filen *src/App.js*:
Endre teksten fra **Velkommen til fagkveld!** til **It's gonna be great!**

Sjekk at endringene vises i nettleseren.

## Oppgave 2
Vi kan ikke skryte på oss at vi er et fantastisk nyhetsmagasin uten at vi har flashy titler på artiklene våre. Lag en komponent kalt `ArticleTitle` som tar imot tittel-teksten som et barn (child). Og husk, lag den flashy!

API:
```js
<ArticleTitle>
	Trump's order on abortion policy: What does it mean?
</ArticleTitle>
```

## Oppgave 3
Et kjent ordtak sier at et bilde sier mer enn tusen ord, og vi kan ikke ha en nyhetsside om Trump uten bilder! I denne oppgaven skal du lage en komponent kalt `ArticleImage` som tar i mot bilde-URL og beskrivelse. Den skal vise bildet motatt.

```js
<ArticleImage src={url} alt={description} />
```

## Oppgave 4
Selv om bildet sier mer enn tusen ord, trenger vi noen ekstra ord for å gjøre artikkelen komplett. Vi trenger en ingress og en brødtekst.

Lag en komponent kalt `ArticleLeadText` som tar imot ingressen som et barn.

API:
```js
<ArticleLeadText>
	A group of men standing around a desk: it is not the typical image that goes viral online.
</ArticleLeadText>
```

Lag deretter en komponent kalt `ArticleText` som tar imot brødteksten som et barn.

API:
```js
<ArticleText>
	The photograph in question was taken...
    Men making decisions about women's bodies...
</ArticleText>
````

Vi trenger også å vise kategorien som denne artikkelen ligger under. Lag en komponent kalt `Category` som tar imot kategorien som et barn.

API:
```js
<Category>Abortion</Category>
```

## Oppgave 5
Nå er du ferdig med alle komponentene som skal til for å vise innholdet for en artikkel. Nå er det på tide å sette disse sammen og bruke dem for å vise en liste med artikler. It's gonna be fantastic!

Eksempel på hvordan komponenthierarkiet kan se ut:
- Articles
    - Article
        - ArticleTitle
        - Category
        - ArticleLeadText
        - TrumpImage
        - ArticleText

## Oppgave 6
Nå er det dags for litt "ordentlige" data. Foreløpig har vi bare brukt _mockede_ artikler som er initialisert i frontend. Nå skal vi hente artikler fra backend. Til det bruker vi [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). Artiklene henter vi på denne måten:

```js
fetch('/news')
	.then(response => response.json())
    .then(news => /* gjør noe med artiklene */)
    .catch(err => console.error('Failed to get news. Totally fake.', err));
```

Artiklene skal hentes fra backend når App-komponenten legges til DOM-en (hint: componentDidUpdate).


## Oppgave 7
Styret har akkurat hatt møte og det ble besluttet at Trump produserer så mange nyhetsverdige historier at vi som høyt respektert nyhetsaktør er nødt til å følge med i timen og levere artikler raskere ut til kundene. Akkurat nå har vi dessverre ikke mulighet til å legge til artikler og styret er meget klar på at dette må på plass fort som fy.

Din oppgave er å lage et skjema for å legge til nye artikler. Disse skal lagres ved å kjøre et POST-kall mot backend. Backend-utvikleren er allerede ferdig med sin del av arbeidet, og gir deg følgende kodesnutt å gå etter:

```js
fetch('/news', {
	method: 'POST',
    headers: { Content: 'application/json' },
    body: JSON.stringify(article)
})
```
`article` er definert slik: 
```js
{
  title,
  imageUrl,
  leadText,
  text,
  category:
}
```

Legg gjerne til skjema for å opprette avtale under avtalelisten. Hvis du vil ha en litt større utfordring så kan du se på react-router og hvordan man legger til en egen side.

## Oppgave 8
Det blir bare flere og flere artikler, og flere og flere artikkelkategorier. Redaktøren innser at leserne må få presentert en liste over kategoriene som TrumpNews dekker på forsiden. Denne listen skal ligge ved siden av artikkel-listen. Hver kategori skal være klikkbar. Når en kategori blir klikket på, skal artikkel-listen filtreres, slik at bare artikler publisert i denne kategorien vises.

API:
```js
<Categories>
	<Category onCategoryChange={???}>Abortion</Category>
    <Category onCategoryChange={???}>Election</Category>
</Categories>
```

_Bonus-oppgave:_ Vis totalt antall artikler innenfor hver kategori sammen med kategorinavnet (med reelt antall, selvsagt).

API:
```js
<Category count={8}>Election</Category>
```

## Oppgave 9
Filtrering av artikler på kategori hjalp en stund, men nå har det blitt så mange artikler at brukerene sliter med å finne det de leter etter. Redaktøren ønsker derfor å utvide artikkelisten med søkemulighet. Hvor avansert du ønsker å lage søket får være opp til deg som utvikler, men i kravet står det spesifisert at det minimum må være et søk på tittel med contains.

Søkekomponenten skal inneholde et input-felt for å skrive inn søketekst. Komponenten kan fungere ved å enten:
	1. Legge til en søkeknapp for å trigge søket
	2. Oppdatere søket 'live' mens brukeren skriver

## Oppgave 10
Styret vil ikke la deg være i fred. Styremedlemmene har nå innsett at nyheter er levende saker, og de ser et behov for å kunne oppdatere nyhetssakene.

Din oppgave er å lage skjema for å oppdatere en artikkel (du må gjerne gjenbruke noe eller alt av skjemaet fra oppgave 7). Den oppdaterte artikkelen skal lagres til backend. Backend-utvikleren er allerede ferdig med sin del av arbeidet, og gir deg følgende kodesnutt å gå etter:

```js
fetch(`/news/${article.id}`, {
	method: 'PUT',
    headers: { Content: 'application/json' },
    body: JSON.stringify(article)
})
```
