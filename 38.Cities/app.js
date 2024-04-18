"use strict";
//describe a function
Object.defineProperty(exports, "__esModule", { value: true });
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}`);
}
//calling the function
describe_city("Karachi");
describe_city("Lahore");
describe_city("Berlin", "Germany");
