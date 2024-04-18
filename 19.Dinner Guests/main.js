"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guest_list = ['Saad', 'Zaid', 'Ayyan', 'Tabish',];
// for(let i=0 ; i<guest_list.length; i++){ 
//     console.log('Respected sir/' + guest_list[i] +',\nWe invited you on dinner tommorow.\nThank you\n');
// };
let not_present = 'Zaid';
let new_guest = 'Rayyan';
guest_list[1] = new_guest;
// for(let i=0 ; i<guest_list.length; i++){ 
//     console.log('Respected sir/' + guest_list[i] +',\nWe invited you on dinner tommorow.we found big table so we decide to invite 3 more guest.\nThank you\n');
// };
// console.log(`mr. ${not_present} will not coming tommorow dinner.`);
guest_list.unshift('Affan', 'Shayyan', 'Umair');
// for(let i=0 ; i<guest_list.length; i++){ 
//     console.log('Respected sir/' + guest_list[i] +',\nWe invited you on dinner tommorow.we found big table so we decide to invite 3 more guest.\nThank you\n');
// };
//console.log('\nUnfortunately we can not arrang big table , only Two peoples will be invited.');
while (guest_list.length > 2) {
    let remove_guest = guest_list.pop();
    // console.log(`Sorry sir/ ${remove_guest} You are not invited for dinner.`);
}
//for(let i=0 ; i<guest_list.length; i++){ 
// console.log('Respected sir/' + guest_list[i] +',\nyes you are still invited on tommorrow dinner.\nThank you\n');};
guest_list.splice(0, 2);
console.log(guest_list);
console.log(`Total number of guest are: ${guest_list.length}`);
