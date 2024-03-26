const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

//   mencari angka >= 3
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//   if (angka[i] >= 3) {
//     newAngka.push(angka[i]);
//   }
// }
// console.log(newAngka);

// const newAngka = angka.filter(function (a) {
//   return a >= 3; // 8, 9
// });

//   const newAngka = angka.filter((a) => a >= 3);

// console.log(newAngka);

// kalikan semua angka dengan 2
const newAngka = angka.map(function (a) {
  return a * 2;
});

// const newAngka = angka.map((a) => a * 2);

//   console.log(newAngka);

//   jumlahkan semua elemen pada array angka
//  0, -1, 8, 9, 1, 4, -5, -4, 3, 2, 9
// const newAngka = angka.reduce(function (accumulator, currentValue) {
//   return accumulator + currentValue;
// });

// console.log(newAngka);

//   const newAngka = angka.reduce((a, b) => a + b);

// Chaining
const angka2 = [4, -5, 8, 3, 7, 9, -8, 5, -1, 6];
//   cari angka >= 5
// kalikan 3
// jumlahkan;
const hasil = angka2
  .filter((a) => a >= 5)
  .map((a) => a * 3)
  .reduce((acc, curr) => acc + curr);
console.log(hasil);
