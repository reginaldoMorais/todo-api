var colors = require('colors/safe');

module.exports = (port, env) => {
  console.log(colors.blue('\n\n\n:::::....           ') + colors.gray('TODO API') + colors.blue('          ....:::::'));
  console.log(colors.cyan('├=============================================┤'));
  console.log(colors.cyan('|  Env: ') + colors.yellow(env) + colors.cyan('    |') + colors.cyan('   Port: ') + colors.yellow((port +'') + colors.cyan('                 |')));
  console.log(colors.cyan('├=============================================┤\n|                                             |'));
  console.log(colors.cyan('|  ') + colors.green('Server running on: http://localhost:' + port + '/') + colors.cyan('  |'));
  console.log(colors.cyan('└=============================================┘\n'));
}
