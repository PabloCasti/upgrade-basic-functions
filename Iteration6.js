// 6. Valores Únicos

const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potato",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];

function removeDuplicates(array) {
  let newElements = [];
  for (let i = 0; i < array.length; i++) {
    if (!newElements.includes(array[i])) {
      newElements.push(array[i]);
    }
  }
  return newElements;
}

console.log(removeDuplicates(duplicates));
