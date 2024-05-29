// *********************************object literal********************************************************
const user = {
  username : 'kamlesh',
  loginCount : 5,
  signin : true,
  
  getUserDetails: function() {
    console.log('Got the user details from database'); 
  }
}

// console.log(user.username);
// console.log(user.getUserDetails());


// ****************************************************************************************


const user01  = {
  username : 'kamlesh_Sah',
  loginCount : 98,
  signin : true,
  
  getUserDetails: function() {
    // console.log(`Usaername: ${username}`); // error, username is not defined
    console.log(`Usaername: ${this.username}`); // this will work

    // for understanding this keyword
    console.log(this);
  }
}


// console.log(user01.username);
// console.log(user01.getUserDetails());
// console.log(this); // this will refer to global object{Contest} (window object in browser and global object in nodejs)


// ***********************************Constructor function******************************************************

// new keyword is a constactor function
// new keyword creates a new object and binds it to this keyword

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  return this // this is not required, because new keyword will return this object
}

// importance of new keyword

// user001 gives the same output as user002 but we print user001
const user001 =  User('kamlesh', 5, true);
const user002 =  User('kamlesh_Sah', 98, false);
console.log(user001); // {username: 'kamlesh_Sah', loginCount: 98, isLoggedIn: false}


// when we use new keyword, it will create a new object and bind it to this keyword
const userONE = new User('kamlesh', 5, true);
const userTWO = new  User('kamlesh_Sah', 98, false);
console.log(userONE); // {username: 'kamlesh', loginCount: 5, isLoggedIn: true}