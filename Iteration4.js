// 4. Calcular el promedio

const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(array) {
  let average = sumAll(array) / array.length;
  return average;
}

console.log(average(numbers));
