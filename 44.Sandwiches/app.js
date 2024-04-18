function make_sandwiches(item) {
    console.log(`\nMaking your sandwich with:`);
    item.forEach(Element => console.log("-" + Element));
    console.log(`Enjoy your sandwich !\n`);
}
make_sandwiches(['cheese', 'Ham', 'lettuce']);
make_sandwiches(['Becon', 'Turkey']);
make_sandwiches(['Jelly', 'Peanut Butter']);
export {};
