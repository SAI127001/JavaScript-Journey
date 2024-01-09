let name = `Terukula Sai`;
let age = 20;
let cgpi = 9.8;
let email = `codesai127.0.0.1@gmail.com`;

console.log(`${name} is ${age} years old`);
console.log(`His CGPI is ${cgpi}`);
console.log(`Your email is ${email}`);

console.log(typeof name);
console.log(typeof cgpi);

// document.getElementById(`Ip1`).textContent = name;
document.getElementById(`Ip1`).textContent = `Your name is ${name}`;
document.getElementById(`Ip2`).textContent = age;
document.getElementById(`Ip3`).textContent = cgpi;
