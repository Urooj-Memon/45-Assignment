"use strict";
//creating a function with parameter which return value in string
Object.defineProperty(exports, "__esModule", { value: true });
function city_country(city, country) {
    return `${city} , ${country}`;
}
//calling a function and print the returend value
city_country("Karachi", "pakistan");
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Berlin", "Garmany"));
