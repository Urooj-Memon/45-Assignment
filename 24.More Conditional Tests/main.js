//define variable 
let apple = "apple";
let uppercaseApple = "APPLE";
let ten = 10;
let twenty = 20;
let fruits = ['kiwi', 'banana', 'mango', 'apple'];
//test for equality and inequality with string
console.log("Is apple is equal to apple?");
console.log(apple == "apple");
console.log("\nIs apple is  not equal to apple?");
console.log(apple != "apple");
//tests using lowercase funtion
console.log("\nIs APPLE is equal to apple after coverting to uppercase");
console.log(uppercaseApple.toLowerCase() == "apple");
console.log("\nIs APPLE is  not equal to apple after coverting to uppercase");
console.log(uppercaseApple.toLowerCase() != "apple");
//numerical tests
//equal to
console.log("\nIs ten is equal to twenty?");
console.log(ten == twenty);
//not equal to
console.log("\nIs ten is not equal to twenty?");
console.log(ten != twenty);
//greater than
console.log("\nIs ten is greater than zero?");
console.log(10 > 0);
//less than
console.log("\nIs twenty is less than ten?");
console.log(20 < 10);
//greater than or equal to
console.log("\nIs ten is greater than or equal to 5?");
console.log(10 >= 5);
//less than or equal to
console.log("\nIs twenty is less than or equal to 10?");
console.log(20 <= 10);
//test using "and" $ "or" operators
//using $$ (And)
console.log("\n twenty is not equal to 10 and twenty is greater than 10?");
console.log(twenty != 10 && twenty > 10);
console.log("\n twenty is not equal to 10 and twenty is greater than 30?");
console.log(twenty != 10 && twenty > 30);
//using || (OR)
console.log("\n twenty is greater than 50 OR 20 is equal to 20?");
console.log(20 > 50 || 20 == 20);
console.log("\n twenty is greater than 50 OR 20 is equal to 20?");
console.log(20 > 50 || 20 != 20);
//test whether an items is include in array 
console.log("\nIs kiwi include in my fruits array");
console.log(fruits.includes("kiwi"));
//not include
console.log("\nIs kiwi not include in  my fruits array");
console.log(!fruits.includes("kiwi"));
export {};
