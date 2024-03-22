function sum(...numbers) {
  let hasil = 0;
  for (const number of numbers) {
    hasil = hasil + number;
  }
  console.log(hasil);
}

sum(10, 5, 9, 6, 8, 7, 5, 3, 2);
