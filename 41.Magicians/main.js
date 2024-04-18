"use strict";
//define a function to print each magician name from an array
Object.defineProperty(exports, "__esModule", { value: true });
function show_magicians(magician) {
    magician.forEach(name => console.log(name));
}
//define an array containing magicians name
let magician_names = ["Harry Potter", "Hermione Granger", "Ron Weasley", "Albus Dumbledore"];
//call the function to print each magicians name
show_magicians(magician_names);
