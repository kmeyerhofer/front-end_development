input:
string

output:
first & last swapped, ',' inserted between

algorithm

function swapName(string) {
  var regex = /(\w+)\s(\w+)/;
  return string.replace(regex, '$2, $1');
  //return name.split(' ').reverse().join(', ');
}

swapName('Joe Roberts');
