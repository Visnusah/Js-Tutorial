// Define a class named 'User'
class User {
  // Constructor method to initialize new User objects
  constructor(username) {
    this.username = username; // Each user has a username
  }

  // Method to log the username of the user
  Logme() {
    console.log(`username is ${this.username}`);
  }

  // Incorrectly labeled as a static method; this is actually an instance method
  createId_test() {
    return `123`
  }

  // Correct static method that does not depend on any instance properties
  static createId() {
    return `123` 
  }
}

// Creating an instance of User
const kamlesh = new User("kamlesh");
console.log(kamlesh.createId_test()); // Outputs: 123
// The following line would throw an error because createId is a static method and should be called on the class itself
// console.log(kamlesh.createId()); // Error: kamlesh.createId is not a function

// Define a class named 'Teacher' that extends 'User'
class Teacher extends User {
  // Constructor method to initialize new Teacher objects
  constructor(username, email) {
    super(username); // Call the parent class constructor
    this.email = email; // Each teacher also has an email
  }
}

// Creating an instance of Teacher
const team = new Teacher("kamlesh", "team@google.com");
team.Logme(); // Outputs: username is kamlesh
console.log(team.createId_test()); // Outputs: 123
// The following line would throw an error because createId is a static method and should be called on the class itself
console.log(team.createId()); //TypeError: team.createId is not a function