// 3. Calcular la suma

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(array) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result;
}

console.log(sumAll(numbers));
