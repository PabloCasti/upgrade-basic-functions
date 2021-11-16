// 5. Calcular promedio de strings

const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];
function averageWord(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "string") {
      count += array[i].length;
    } else {
      count += array[i];
    }
  }
  return count;
}

console.log(averageWord(mixedElements));
