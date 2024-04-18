let guest_list : string [] = ['Saad','Zaid','Ayyan','Tabish',];
for(let i=0 ; i<guest_list.length; i++){ 
    console.log('Respected sir/' + guest_list[i] +',\nWe invited you on dinner tommorow.\nThank you\n');
};

let not_present : string = 'Zaid';
let new_guest : string = 'Rayyan';
guest_list[1] = new_guest;
for(let i=0 ; i<guest_list.length; i++){ 
    console.log('Respected sir/' + guest_list[i] +',\nWe invited you on dinner tommorow.\nThank you\n');
};
console.log(`mr. ${not_present} will not coming tommorow dinner.`);