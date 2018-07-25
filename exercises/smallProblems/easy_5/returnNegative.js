input:
num
output:
negative number

if num < 0
return num
else
return num * -1

function negative(num) {
  return num < 0 ? num : num * -1;
  // if (num < 0) {
  //   return num;
  // } else {
  //   return num * -1;
  // }
}

negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0
