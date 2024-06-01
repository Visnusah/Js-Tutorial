//************************************************************* */
function setUserName(username) {
  // complex DB calls
  this.username = username;
  console.log("called"); // for check the function is called or not
}

function createUser(username, email, password) {
  // setUserName(username); // not show the username from this setUserName function
  // use of call(read behin the scene)
  setUserName.call(this, username); // this is the object of the class
  this.password = password;
  this.email = email;
}
// not show the usename from this setUserName function 
const kamlesh = new createUser("kamlesh", "kamlesh@gmail.com", "&#&^$*#*HelloKamlesh");

console.log(kamlesh);
//************************************************************* */
