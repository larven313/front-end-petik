// const numbers = [3, -5, 8, 1, 2, 9, 7, -1, 6];
// filter, map, reduce
// mencari angka > 3

// const filterNumber = numbers.filter((number) => number > 3);
// console.log(filterNumber);

// const mapNumber = numbers.map((number) => number * 2);
// console.log(mapNumber);

const numbers = [3, -5, 8, 1, 2, 9, 7, -1, 6];
// 0 + 3 = 3
// 3 + (-5) = -2
// -2 + 8 = 6
// 6 + 1 = 7
// 7 + 2 = 9
// 9 + 9 = 18
// 18 + 7 = 25
// 25 +(-1) = 24
// 24 + 6 = 30
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
// accumulator = nilai hasil penjumlahan
// currentValue = nilai saat ini
console.log(sum);
