"use strict";
//array of current users
Object.defineProperty(exports, "__esModule", { value: true });
let current_users = ["Usman", "Ali", "Areeba", "Zain", "osama"];
//array of new users
let new_users = ["Hamza", "Ayesha", "Ali", "Mahad", "Areeba"];
//loop through new_users to cheak usernames availbility
new_users.forEach(new_one_user => {
    //making a conditions for username already exist and save in our_condition variable
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase());
    //print different message using If Else statement
    if (our_condition) {
        console.log(`Sorry ${new_one_user} is already taken!`);
    }
    else {
        console.log(`This username ${new_one_user} is available.`);
    }
    ;
});
