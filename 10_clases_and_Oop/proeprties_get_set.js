// old method of using get and set


function User(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (value) {
      this._email = value;
    },
  });
  Object.defineProperty(this, "password", {
    get: function () {
      return this._password.toUpperCase();
    },
    set: function (value) {
      this._password = value;
    },
  });
}

const team = new User("kamlesh@googlr.com", "kamalakoCode");
console.log(team.email); // Outputs:  KAMLESH@GOOGLR.COM
console.log(team.password); // Outputs: KAMALAKOCODE
