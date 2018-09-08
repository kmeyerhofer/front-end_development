function displayNameGenerator() {
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var name = '';
  var i;
  for (i = 0; i < 16; i += 1) {
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return name;
}

var Account = {
  passCheck: function(password) {
    if (password === this.userPassword) {
      return true;
    } else {
      return 'Invalid Password';
    }
  },
  verification: function(password, property) {
    var check = this.passCheck(password);
    if (property === 'displayName' && check === true) {
      return this[property] = displayNameGenerator();
    } else if (check === true) {
      return this[property];
    } else {
      return check;
    }
  },
  init: function(email, password, firstName, lastName){
    this.userEmail = email;
    this.userPassword = password;
    this.userFirstName = firstName;
    this.userLastName = lastName;
    this.displayName = displayNameGenerator();
  },
  reanonymize: function(password) {
    return this.verification(password, 'displayName');
  },
  resetPassword: function(oldPass, newPass) {
    var check = this.passCheck(oldPass);
    if (check === true) {
      this.userPassword = newPass;
    }
    return check;
  },
  firstName: function(password) {
    return this.verification(password, 'userFirstName');
  },
  lastName: function(password) {
    return this.verification(password, 'userLastName');
  },
  email: function(password) {
    return this.verification(password, 'userEmail');
  },
  displayName: function() {
    return this.displayName;
  },
};

var fooBar = Object.create(Account);
fooBar.init('foo@bar.com', '123456', 'foo', 'bar');
