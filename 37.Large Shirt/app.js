//Making a function
function make_shirts(size = "Large", printMessage = "I love TypeScript") {
    console.log(`\nCreating a ${size} shirt with the ${printMessage} prints on shirt.`);
}
//calling a function with by-default values
make_shirts();
//calling a func now with medium size default message
make_shirts("Medium");
//calling a func small size and also diff print message
make_shirts("Small", "I love Coding");
export {};
