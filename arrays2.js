/**Task1
 * isArrayLengthOdd(numbers):
 * - receives array `numbers`
 * - returns true if array has an odd number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthOdd([1, 2, 3]) -> true
 * isArrayLengthOdd([1, 2, 3, 4]) -> flase
 */

function isArrayLengthOdd(numbers) {
  // Your code here
  if (numbers.length % 2 == 0) {
    return false;
  } else {
    return true;
  }
}

let numbers = [1, 2, 3, 4, 5];
console.log(isArrayLengthOdd([1, 2, 3, 4]));

/**Task2
 * isArrayLengthEven(numbers):
 * - receives array `numbers`
 * - returns true if array has an even number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthEven([1, 2, 3]) -> false
 * isArrayLengthEven([1, 2, 3, 4]) -> true
 */
function isArrayLengthEven(numbers) {
  // Your code here
  if (numbers.length % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isArrayLengthEven([1, 2, 3, 4]));

/**task3
 * addLailaToArray(instructors):
 * - receives array `instructors`
 * - returns a new array that's a copy of array `instructors` with additional string "Laila"
 *
 * e.g.
 * addLailaToArray(["Mshary", "Hasan"]) -> ["Mshary", "Hasan", "Laila"]
 */

let names = ["Meshary", "Hasan"];

function addLailaTonames(names) {
  // Your code here
  names.push("laila");
  return names;
}
let updatenames = addLailaTonames(names);
console.log(updatenames);

/**Task4
 * eliminateTeam(teams):
 * - receives array `teams`
 * - removes the last element from the array and return it
 *
 * e.g.
 * eliminateTeam(["Brazil", "Germany", "Italy"]) -> "Italy"
 */
let teams = ["Brazil", "Germany", "Italy"];

function eliminateTeam(teams) {
  // Your code here
  let last = teams.pop();
  return last;
}
let eliminateTeams = eliminateTeam(teams);
console.log(eliminateTeams);

/**challenge1
 * secondHalfOfArrayIfItIsEven(fruits):
 * - receives array `fruits`
 * - returns a new array that's the second half of the original array if it has an even number of elements
 * - returns an empty array if it has an odd number of elements
 *
 * e.g.
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]) -> ["banana", "kiwi"]
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]) -> []
 */
let fruits = ["apple", "orange", "banana", "kiwi"];

function secondHalfOfArrayIfItIsEven(fruits) {
  // Your code here
  if (fruits.length % 2 == 0) {
    return fruits.slice(fruits.length / 2);
  } else {
    return [];
  }
}
console.log(secondHalfOfArrayIfItIsEven(fruits));
