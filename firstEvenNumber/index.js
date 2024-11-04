// Trouver le premier nombre pair dans un tableau

const numbers = [1, 3, 7, 8, 10];
function findFirstEven(arr) {
  for (let i of arr) {
    if (i % 2 === 0) {
      return i;
    }
  }
  return null;
}

findFirstEven(numbers); // 8
console.log("~ 🐈‍⬛🐈 ~ findFirstEven:", findFirstEven(numbers));
