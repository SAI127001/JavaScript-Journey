// How to accept user input

// 1. Easy way = window prompt
// 2. Professional Way = HTML TextBox

// let username;
// username = window.prompt("What's your user name");
// console.log(username);

document.getElementById(`Ih1`).textContent = `Welcome`;

let username;

document.getElementById(`myButton`).onclick = function () {
  username = document.getElementById(`myText`).value;

  console.log(username);
};
