"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//creatind a array 
let userName = ["Abdullah", "Tabish", "Affan", "Admin", "Sarim"];
//using ForEAch loop on array
userName.forEach(oneUser => {
    if (oneUser === "Admin") {
        console.log(`Hellow ${oneUser}, would you like to see a stutus report?`);
    }
    else {
        console.log(`Hellow ${oneUser}, Thankyou for logging in again.`);
    }
});
