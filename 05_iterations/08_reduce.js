// Define an array 'mynum_01' with numbers 1, 2, and 3
const mynum_01 = [1, 2, 3];

// Using the reduce() method to calculate the sum of all elements in 'mynum_01' array
const myTotal = mynum_01.reduce((acc, curVal) => {
    // Output the accumulator and current value for each iteration
    console.log(`accumulator: ${acc} and currentValue: ${curVal}`);
    // Return the sum of accumulator and current value
    return acc + curVal;
}, 0); // Initial value of accumulator is set to 0

// Output the total sum calculated using reduce()
console.log(myTotal);

//************** */

// Another method of using reduce() without logging each iteration
const myTotal_01 = mynum_01.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(myTotal_01);

//************** */

// Add up all prices in the shopping cart data

// Define an array 'shoppingCart' with objects containing item names and prices
const shoppingCart = [
    {
        itemName: "Js course",
        price: 2999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "web dev course",
        price: 4999
    },
    {
        itemName: "py course",
        price: 1999
    }
];

// Using reduce() method to calculate the total price by summing up all item prices in 'shoppingCart'
const TotalPrice = shoppingCart.reduce((accumulator, item) => accumulator + item.price, 0);
console.log(TotalPrice);
