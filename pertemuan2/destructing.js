// Membuat array family
const family = ["Mikel", "Hannah", "Jonas", "Martha"];

const husband = family[0];
const wife = family[1];
const firstChild = family[2];
const lastChild = family[3];

console.log(husband, wife, firstChild, lastChild);

// Membuat object literal
const user = {
  name: "Aufa Billah",
  age: 20,
  major: "Informatics",
};

/**
 * Object Destructing.
 * Destructing object berdasarkan key.
 */
const { name, age, major } = user;

console.log(name, age, major);
