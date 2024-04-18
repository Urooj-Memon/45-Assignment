"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let userNames = ["Abdullah", "Tabish", "Affan", "Admin", "Sarim"];
userNames = [];
if (userNames.length === 0) {
    console.log("Your Array is Empty We need to find some user!");
}
else {
    //using ForEach loop on array
    userNames.forEach(oneUser => {
        if (oneUser === "Admin") {
            console.log(`Hellow ${oneUser}, would you like to see a stutus report?`);
        }
        else {
            console.log(`Hellow ${oneUser}, Thankyou for logging in again.`);
        }
    });
}
