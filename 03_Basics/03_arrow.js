const user = {
    userName : "kamlesh",
    price : 299,

    welcomeMessage : function() {
        console.log(`${this.userName}, Welcome to the course!`);
        // console.log(this);
    }


}
// user.welcomeMessage()

// user.userName = "tuntun"
// user.welcomeMessage()

// console.log(this);


function newName (){
    let username = "visnu"
    console.log(this.username);
}

// newName()


//*** */

function newName1 (){
    console.log(this);
}

// newName1()

//** */

const newName2 = () => {
    let name = "Tunku_hmr!"
    console.log(this);
}

// newName2()


/**      */

const addNum = (num1, num2) => {
    return num1 + num2
}

// console.log(addNum(2 ,3 ));

/** */

const addNumAnotherNum_01 = (num1, num2) => num1 + num2

// console.log(addNumAnotherNum_01(2 ,8));

/** */
const addNumAnotherNum_02 = (num1, num2) => (num1 + num2)

// console.log(addNumAnotherNum_02(5 ,8));

/** */

const username_01 = (Name, email) => ({username: "Kamlesh_Sah"})

// console.log(username_01());
// console.log(typeof username_01)
// console.log(typeof username_01());

/** */
