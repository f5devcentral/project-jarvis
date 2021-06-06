

import { command } from 'yargs'

export = command('get <source> [proxy]', 'make a get HTTP request', 
() => {
  // nothing
}, (argv: any) => {
  console.log('args', argv);

})


// function func1(argv) {
//   // do something with argv.
//   console.log('get-argv', argv);
// }