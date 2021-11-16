// 7. Buscador de nombres

const nameFinder = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];
 
function finderName(array) {
  let result;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === name) {
      return i;
    }
  }
  return "No existe";
}

console.log(finderName(nameFinder, "Pablo"));
