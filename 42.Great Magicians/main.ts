//define a function to print each magician name from an array

function show_magicians(magician: string[]){
    magician.forEach(name => console.log(name));
}

//function to make magicians great through .map it will modify array
function make_great(magicians: string[]){
    return magicians.map(name => `The Great ${name}`);
}

//define an array containing magicians name
let magician_names = ["Harry Potter", "Hermione Granger", "Ron Weasley", "Albus Dumbledore"];


//calle make great function to modify magicians names
let great_magicians = make_great(magician_names);


//call show magicians that show modify list of magicians
show_magicians(great_magicians);