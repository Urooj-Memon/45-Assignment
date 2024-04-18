//Making a function

function make_shirts (size: string = "Large", printMessage: string = "I love TypeScript"){
    console.log(`\nCreating a ${size} shirt with the ${printMessage} prints on shirt.`)
}

//calling a function with by-default values
make_shirts();

//calling a function now with medium size default message

make_shirts("Medium");

//calling a function small size and also different print message

make_shirts("Small", "I love Coding");

