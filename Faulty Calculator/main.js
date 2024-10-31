/* creating a faulty calculator using js

1.it takes 2 numbers as input from the user
2.it performs wrong operations sometimes (10% times)

*/

let randomNumber = Math.random() * 100;
let a = prompt("Enter your first number: ");
let b = prompt("Enter your second number: ");
let c = prompt("Enter Operation you want to perform: ");

let wrongOperation = {
    "+": "-",
    "-": "+",
    "*": "/",
    "/": "*"
}

if (randomNumber <= 10) {
    //perform wrong operation
    c = wrongOperation[c];
}
else {
    //perform right operation
    alert(eval(`${a} ${c} ${b}`));
}