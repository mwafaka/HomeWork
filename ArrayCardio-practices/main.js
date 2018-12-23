const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isacc", last: "newton", year: 1643, passed: 1727 },
  { first: "Galilio", last: "galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "curie", year: 1867, passed: 1934 },
  { first: "Johanes", last: "kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 }
];

const people = [
  "Beck,Glenn ",
  "Becker,Carl",
  "Beckett,Samuel",
  "Beddoes,Mick",
  "Beecher,Henry",
  "Beethoven,Ludwig",
  "Begin,Menachem",
  "Belloc,Hilaire",
  "Benjamin,Walter",
  "Benn,Tony",
  "Bennington,Chester",
  "benson,Leana",
  "bent,Silas",
  "Bentsen,LIoyd",
  "Berger,ric",
  "Bergman,Ingmar",
  "Berio,Luciano",
  "Berle,Milton",
  "Berlin,Irving",
  "Berne,Eric",
  "Bernhard,Sandra",
  "Berra,Yogi",
  "Berry,Halle",
  "Berry,Wendell"
];

///filter for those who were born in the 1500///
const arr = inventors.filter(m => m.year >= 1500 && m.year < 1600);
//console.table(arr);

//////////////map the full name////////
const full = inventors.map(f => `${f.first} ${f.last}`);
//console.table(full);

/////////////sort the oldest to youngest/////////////
const old = inventors.sort((a, b) => a.year > b.year);
//console.table(old);

////////reduce///////////
const totaly = inventors.reduce((a, b) => {
  return a + (b.passed - b.year);
}, 0);
//console.log(totaly);

/////////////sort by  years leaved///////////////
const oldest = inventors.sort((a, b) => {
  const last = a.passed - a.year;
  const next = b.passed - b.year;
  return last > next ? -1 : 1;
});
//console.table(oldest);

/////////////////some//////////////////
const isOld = inventors.some(person => {
  const currentYear = new Date().getFullYear();
  if (currentYear - person.year >= 500) {
    return true;
  }
});
console.log(isOld);

///////////////every/////////////

const allOld = inventors.every(person => {
  const currentYear = new Date().getFullYear();
  if (currentYear - person.year >= 500) {
    return true;
  }
});
console.log(allOld);

//////////////find//////////////
const comment = inventors.find(x => {
  if (x.year == 1473) {
    return true;
  }
});
console.log(comment);

///////////findIndex///////////////////
const index = inventors.findIndex(m => {
  m.first == "Albert";
});
console.log(index);
