class User {
  constructor(username){
    this.username = username;
  }
  
  logMe(){
    console.log(`USERNAME is ${this.username}`);
  } 
}


class Teacher extends User {
  constructor(username, email, password){
    super(username) // Call the constructor of the parent class (User) and pass the username to it
    this.email = email; 
    this.password = password;
  }

  addCourse(course){
    console.log(`A new course was added by ${this.username}`);
  }
}
// **************************************Team******************************************************************************

const team = new Teacher("kamlesh", "new@google.com", "&*^*&ksml");
team.addCourse(); // A new course was added by kamlesh

// ******************************************Team1**************************************************************************

const team1 = new User("LusentSaga");
// team1.addCourse();
// Error: addCourse is not a function because the User class does not have the addCourse method

// ********************************************************************************************************************

// The Teacher class inherits the properties and methods of the User class. It also has its own properties and methods.
// The Teacher class can access the properties and methods of the User class using the super keyword.
// The super keyword is used to call the constructor of the parent class.
// The super keyword is also used to call the methods of the parent class.

// ********************************************************************************************************************

team1.logMe(); // USERNAME is LusentSaga

console.log(team == team1); // false because they are different objects
console.log(team instanceof Teacher); // true because team is an instance of the Teacher class
console.log(team instanceof User); // true because team is an instance of the User class