// switch statement
// switch (expression) {
//     case value1:
//         // code
//         break;
//     case value2:
//         // code
//         break;
//     default:
//         // code
//         break;
// }
// example

const balance_02 = 2000;

switch (balance_02) {
    case 1000:
        console.log(`You have 1000`);
        break;
    case 2000:
        console.log(`You have 2000`);
        break;
    case 3000:
        console.log(`You have 3000`);
        break;
    default:
        console.log(`enter a valid amount`);
}
// if not using break in the switch statement it will execute all the cases after the matching case but not the default case

const balance_03 = 2000;

switch (balance_02) {
    case 1000:
        console.log(`You have 1000`);
        break;
    case 2000:
        console.log(`You have 2000`);
        // break;
    case 3000:
        console.log(`You have 3000`);
        break;
    default:
        console.log(`enter a valid amount`);
}

