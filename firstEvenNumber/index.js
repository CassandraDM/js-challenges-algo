// Trouver le premier nombre pair dans un tableau

const numbers = [1, 3, 7, 8, 10];
function findFirstEven() {
  for (let i of numbers) {
    if (i % 2 === 0) {
      return i;
    } else {
      i += 1;
    }
  }
}

findFirstEven(numbers); // 8
console.log("~ 🐈‍⬛🐈 ~ findFirstEven:", findFirstEven(numbers));
