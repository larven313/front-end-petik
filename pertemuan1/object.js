// Membuat object: {} & new Object()
const user = {
  name: "Ucup",
  age: 20,
  major: "Web Development",
};

// Mengakses nilai
// console.log(user.name); // in PHP : user->name
// console.log(user["age"]);

// Looping object menggunakan for in
for (const key in user) console.log(user[key]);
