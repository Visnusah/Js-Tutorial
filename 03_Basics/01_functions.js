// console.log("K");
// console.log("A");
// console.log("M");
// console.log("L");
// console.log("E");
// console.log("s");
// console.log("H");

console.log(" ");
function Name(){
    console.log("K");
    console.log("A");
    console.log("M");
    console.log("L");
    console.log("E");
    console.log("s");
    console.log("H");
}

// Name()

//************** ****************************//

function addTwonumber( num1, num2){
    // console.log(num1 + num2);
}

addTwonumber(2,3)
const result = addTwonumber(6, 3)
// console.log(result);


//************** ****************************//
// other method to declare a function

function multiply(num1, num2){

   let gunna = num1 * num2
    return gunna
    console.log("kamlesh");
}

const abc = multiply(2, 5)
// console.log("Multiplication of two no: ", abc);

//************** ****************************//

function addnumbers(number1, number2){
    return number1 + number2
}
const output = addnumbers(2, 8);
// console.log("result: ", output);

//************** ****************************//

function loginUserMessage(username){
    return `${username} just logged in`
}

// console.log(loginUserMessage("kamlesh"));

//************** ****************************//

function loginId(id){
    if(id === undefined){
        console.log("please enter ID of the user");
        return
    }
    return `${id} is Logged In.`
}

// console.log(loginId());
// console.log(loginId("kamlesh"));


//************** ****************************//
function loginId(id){
    if(!id){
        console.log("please enter ID of the user");
        return
    }
    return `${id} is Logged In.`
}

// console.log(loginId());
// console.log(loginId("kamlesh"));

//************** ****************************//

