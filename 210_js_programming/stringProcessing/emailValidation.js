function isValidEmail(email) {
  // var splitEmail = email.split('@');
  // if (email.indexOf('@') === -1) {
  //   return false;
  // } else if (splitEmail[0].match(/[^a-zA-Z0-9]/) === null) {
  //   return false;
  // } else if (splitEmail[1].match(/[A-Za-z]+\.[A-Za-z]+/) === null) {
  //   return false;
  // } else {
  //   return true;
  // }
  return /^[a-z0-9]+@([a-z]+\.)+[a-z]+$/i.test(email);
}

isValidEmail('Foo@baz.com.ph');          // returns true
isValidEmail('Foo@mx.baz.com.ph');       // returns true
isValidEmail('foo@baz.com');             // returns true
isValidEmail('foo@baz.ph');              // returns true
isValidEmail('HELLO123@baz');            // returns false
isValidEmail('foo.bar@baz.to');          // returns false
isValidEmail('foo@baz.');                // returns false
isValidEmail('foo_bat@baz');             // returns false
isValidEmail('foo@bar.a12');             // returns false
isValidEmail('foo_bar@baz.com');         // returns false
isValidEmail('foo@bar.....com');         // returns false
