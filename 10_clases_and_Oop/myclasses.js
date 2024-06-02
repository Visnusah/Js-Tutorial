// ES6 
class user {
  constructor(username, email, password){ // it's not important to write constructor everytime if neended then use it
    this.username = username;
    this.email = email;
    this.password = password;
  }
  encryptPassword(){
    // this.password = this.password.split("").map((char) => {
    //   return String.fromCharCode(char.charCodeAt(0) + 1);
    // }).join(""); // Convert array back to string
    
    return `${this.password}`
  }
  changeUsername(){
    return `${this.username.toUpperCase()}`
}
  
}

const kamlesh = new user("kamlesh", "kamlesh@gmail.com", "#$#54354kamlesh");
console.log(kamlesh.encryptPassword()); // Encrypt the password
console.log(kamlesh.changeUsername()); // Change the username to uppercase
console.log(kamlesh); // Now the password is encrypted and the object is logged correctly



// behind the scene with another example

function User01(username, email, password){
  this.username = username;
  this.email = email;
  this.password = password;
  
}


User01.prototype.encryptPassword = function(){
  return `${this.password}abc` // Encrypt the password
};
User01.prototype.changeUsername = function(){
  return `${this.username.toUpperCase()}` // Convert the username to uppercase
};
const info = new User01("kamlesh", "Example@google.com", "%#$%#%$ksksks");

console.log(info.encryptPassword()); //  Encrypt the password
console.log(info.changeUsername()); // Change the username to uppercase
