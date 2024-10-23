const arr = [1, 2, 3, 4, 4, 5, 6, 6, 7];

// Écris une fonction qui prend un tableau en argument et retourne un tableau contenant uniquement des valeurs uniques.
function uniqueValues() {
  for (i of arr) {
    for (number of arr) {
      number += 1;
      sameNumber = arr.find(number === i);
      sameNumber.pop(arr);
    }
  }
  return arr;
}

uniqueValues(arr); // [1, 2, 3, 4, 5, 6, 7]
console.log("~ 🐈‍⬛🐈 ~ uniqueValues(arr):", uniqueValues(arr));
