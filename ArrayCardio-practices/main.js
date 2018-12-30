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
//////////////////sum all Primes///////////////
function sumPrimes(num) {
  var prime = [];
  for (var i = num; i > 0; i--) {
    for (var j = 2; j <= i; j++) {
      console.log(i, j);

      if (i === j) {
        prime.push(i);
      } else if (i % j === 0) {
        break;
      }
    }
  }
  return prime.reduce(function(a, b) {
    return a + b;
  }, 0);
}

sumPrimes(10);
///////////////Smallest common Multiple///////////////////
function smallestCommons(arr) {
  arr.sort((a, b) => (a > b ? 1 : -1));
  let [x, y] = arr;
  while (x <= arr[1]) {
    if (y % x === 0) {
      x++;
    } else {
      y += arr[1];
      x = arr[0];
    }
  }
  return y;
}

smallestCommons([1, 5]);

/////////////////Binary Agent//////////////////7
function binaryAgent(str) {
  return str
    .split(" ")
    .map(x => String.fromCharCode(parseInt(x, 2)))
    .join("");
}

binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);

///////////////////Everything Be True/////////////

function truthCheck(collection, pre) {
  // Is everyone being true?
  return collection.every(x => x[pre]);
}
truthCheck(
  [
    { user: "Tinky-Winky", sex: "male" },
    { user: "Dipsy", sex: "male" },
    { user: "Laa-Laa", sex: "female" },
    { user: "Po", sex: "female" }
  ],
  "sex"
);
//////////////Argument optional /////////////////
function addTogether() {
  // Function to check if a number is actually a number
  // and return undefined otherwise.
  var checkNum = function(num) {
    if (typeof num !== "number") {
      return undefined;
    } else return num;
  };

  // Check if we have two parameters, check if they are numbers
  // handle the case where one is not
  // returns the addition.
  if (arguments.length > 1) {
    var a = checkNum(arguments[0]);
    var b = checkNum(arguments[1]);
    if (a === undefined || b === undefined) {
      return undefined;
    } else {
      return a + b;
    }
  } else {
    // If only one parameter was found, returns a new function that expects two
    // Store first argument before entering the new function scope
    var c = arguments[0];

    // Check the number again, must be outside the function to about returning an object
    // instead of undefined.
    if (checkNum(c)) {
      // Return function that expect a second argument.
      return function(arg2) {
        // Check for non-numbers
        if (c === undefined || checkNum(arg2) === undefined) {
          return undefined;
        } else {
          // if numbers then add them.
          return c + arg2;
        }
      };
    }
  }
}

addTogether(2, 3);
//////////////Argument optional 2/////////////////777
function addTogether(a, b) {
  if (b) {
    if (typeof b === "string") {
      return undefined;
    }
    return a + b;
  }
  if (typeof a === "string") {
    return undefined;
  }

  return function(b) {
    if (typeof b !== "number") {
      return undefined;
    }
    return a + b;
  };
}
addTogether(2, 3);
addTogether(2)(3);
addTogether("http://bit.ly/IqT6zt");
addTogether(2)([3]);

////////////////////Make a person with this key ////////////////7
var Person = function(firstAndLast) {
  this.getFullName = function() {
    return firstAndLast;
  };
  this.getLastName = function() {
    return firstAndLast.split(" ")[1];
  };
  this.getFirstName = function() {
    return firstAndLast.split(" ")[0];
  };
  this.setFullName = function(name) {
    return (firstAndLast = name);
  };
  this.setLastName = function(name) {
    return (firstAndLast = firstAndLast.split(" ")[0] + " " + name);
  };
  this.setFirstName = function(name) {
    return (firstAndLast = name + " " + firstAndLast.split(" ")[1]);
  };
  return firstAndLast;
};

var bob = new Person("Bob Ross");
bob.getFullName();

///////////////orbitalPperiod////////////////7
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  for (var me in arr) {
    let you = Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(arr[me].avgAlt + earthRadius, 3) / GM)
    );
    delete arr[me].avgAlt;
    arr[me].orbitalPeriod = you;
  }
  return arr;
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
