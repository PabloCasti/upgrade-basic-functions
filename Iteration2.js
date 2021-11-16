// 2. Buscar la palabra más larga

const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

function findLongestWord(param) {
  let longestWord = param[0];

  for (let i = 0; i < longestWord.length; i++) {
    if (param[i] && param[i].length > longestWord.length) {
      longestWord = param[i];
    }
  }
  console.log(findLongestWord);
}

findLongestWord(avengers);
