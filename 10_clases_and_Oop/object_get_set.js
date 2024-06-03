const User = {
  _email: "Kaml@google.com",
  _password: "kjkjkjk123",
  
  get email(){
    return this._email.toUpperCase();
  },

  set email(value){
    this._email = value;
  },
}

const team = Object.create(User);
console.log(team.email); // Outputs: KAML@GOOGLE.COM
