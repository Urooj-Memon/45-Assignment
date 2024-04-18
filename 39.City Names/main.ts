  //creating a function with parameter which return value in string

function city_country (city: string, country: string) : string{
    return `${city} , ${country}`;
}

//calling a function and print the returend value
city_country ("Karachi", "pakistan");

console.log(city_country("Karachi", "Pakistan"));

console.log(city_country("Tokyo", "Japan"));

console.log(city_country("Berlin", "Garmany"));