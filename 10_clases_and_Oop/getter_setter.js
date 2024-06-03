// *************************************************************************************************
// Class Definition with Getter and Setter Methods

// Incorrect implementation of a User class with getter and setter for email
class User {
  constructor(email, password) {
    this.email = email; // Initialize email directly
    this.password = password;
  }

  get email() {
    return this.email.toUpperCase(); // Attempt to return email in uppercase
  }

  set email(value) {
    this.email = value; // Incorrect: Causes a stack overflow due to recursive setter call
    // Correct approach would be to use a different internal property name like _email
  }
}

const kamlesh = new User("exa@google.com", "1234");
console.log(kamlesh.email); // This will cause a stack overflow error

// *************************************************************************************************
// Correct implementation of a User class with proper use of private properties for getters and setters

class User01 {
  constructor(email, password) {
    this._email = email; // Use _email to store the value internally
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase(); // Return the email in uppercase
  }

  set email(value) {
    this._email = value; // Correctly set the internal _email property
  }
}

const Visnu = new User01("visnu@google.com", "#KKKK");
console.log(Visnu.email); // Outputs: VISNU@GOOGLE.COM

// *************************************************************************************************

/**

### Explanation


In JavaScript, when using getters and setters, it's important to avoid naming 
conflicts between the property names and the methods used to access them.
In the first class (`User`), the use of the same property name for both 
the internal storage and the getter/setter methods leads to a recursive call,
causing a stack overflow error. This is because setting the property calls the
 setter again, which then tries to set the property again, and so on.



In the corrected class (`User01`), the internal storage of the email is done using
a different property name (`_email`), which is a common convention to indicate that
the property should not be accessed directly outside of the class methods. This avoids
the recursive issue and allows the getter and setter to function correctly, providing
controlled access to the property while encapsulating the actual data storage.
  
 */
