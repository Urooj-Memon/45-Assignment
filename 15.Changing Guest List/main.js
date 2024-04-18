"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guest_list = ['Saad', 'Zaid', 'Ayyan', 'Tabish',];
for (let i = 0; i < guest_list.length; i++) {
    console.log('Respected sir/' + guest_list[i] + ',\nWe invited you on dinner tommorow.\nThank you\n');
}
;
let not_present = 'Zaid';
let new_guest = 'Rayyan';
guest_list[1] = new_guest;
for (let i = 0; i < guest_list.length; i++) {
    console.log('Respected sir/' + guest_list[i] + ',\nWe invited you on dinner tommorow.\nThank you\n');
}
;
console.log(`mr. ${not_present} will not coming tommorow dinner.`);
