
// variabler du skal bruge i din kode...
const A = 10;
const B = 30;
const C = '30';
const D = 10;
const E = 40;

// Opgave 1: skriv et expression der viser true når A er lig med B eller A er lig med D.

if ( /*..dit expression Her*/ ) {
    console.log('statement true!');
}


//opgave 2: skrive en If then statement der bliver TRUE når  A er større end B og A er mindre end E.
let (A = 7);
let (B = 5);
let (E = 10);

if (A > B && A < E) {
  console.log("A er større end B OG mindre end E");
} else {
  console.log("A er enten ikke større end B eller ikke mindre end E");
}

//opgave 3: Skriv en If then statement med  && og  || der kun er sand når alle expressions er sande.
let A = 7;
let B = 5;
let C = 10;
let D = 2;
let E = 12;

if (A > B && A < E && B < C && D > B) {
  console.log("Alle betingelser er sande");
} else {
  console.log("Mindst én betingelse er ikke sand");
}
//opgave 4: Skriv en If then statement der kan finde ud af om F er "undefined" eller har en værdi, ved at bruge !.

let F;

if (!F) {
  console.log("Variablen F er undefined eller har ingen værdi");
} else {
  console.log("Variablen F har en værdi");
}
