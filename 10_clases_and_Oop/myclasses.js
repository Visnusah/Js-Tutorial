// ES6 
class user {
  constructor(username, email, password){ // it's not important to write constructor everytime if neended then use it
    this.username = username;
    this.email = email;
    this.password = password;
  }
  encryptPassword(){
    // return `${this.password}abc`
    this.password = this.password.split("").map((char) => {
      return char.charCodeAt(0) + 1;
    });
  }
}

const kamlesh = new user("kamlesh", "kamlesh@gmail.com", "#$#54354kamlesh");
console.log(kamlesh.encryptPassword());
console.log(kamlesh); // password is encrypted
