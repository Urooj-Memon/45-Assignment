//define a function to print each magician name from an array
function show_magicians(magician) {
    magician.forEach(name => console.log(name));
}
//function to make magicians great through .map it will modify array
function make_great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
//define an array containing magicians name
let magician_names = ["Harry Potter", "Hermione Granger", "Ron Weasley", "Albus Dumbledore"];
// making a copy of original array through .slice() function 
let copy_magician_names = magician_names.slice();
//modify the copied array to inculde "The Great"with their names
let copy_great_magicians = make_great(copy_magician_names);
// ahow both array of orignal and copied
//original
console.log("\nOriginal Array!\n");
show_magicians(magician_names);
//copied
console.log("\nCopied Array!\n");
show_magicians(copy_great_magicians);
export {};
