function minilang(commands) {
  var stack = [];
  var register = 0;
  var i;
  var processCommands = commands.split(' ');
  for (i = 0; i < processCommands.length; i += 1) {
    if (/\d/.test(processCommands[i])) {
      register = Number(processCommands[i]);
    } else if (processCommands[i] === 'PUSH') {
      stack.push(register);
    } else if (processCommands[i] === 'POP') {
      register = stack.pop();
    } else if (processCommands[i] === 'PRINT') {
      console.log(register);
    } else if (processCommands[i] === 'ADD') {
      register += stack.pop();
    } else if (processCommands[i] === 'SUB') {
      register -= stack.pop();
    } else if (processCommands[i] === 'MULT') {
      register *= stack.pop();
    } else if (processCommands[i] === 'DIV') {
      register = Math.floor(register / stack.pop());
    } else if (processCommands[i] === 'MOD') {
      register = Math.floor(register % stack.pop());
    }
  }
}





minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 MOD MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)
