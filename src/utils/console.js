const colors = require('colors/safe');

module.exports = (port, env) => {
  const envDescription = colors.cyan('|  Env: ') + colors.yellow(env) + colors.cyan('    |');
  const portDescription = colors.cyan('  Port: ') + colors.yellow(port) + colors.cyan('           |');

  console.log(colors.blue('\n\n\n:::::....       ') + colors.gray('TODO API') + colors.blue('       ....:::::'));
  console.log(colors.cyan('├======================================┤'));
  console.log(envDescription + portDescription);
  console.log(colors.cyan('├======================================┤\n|                                      |'));
  console.log(colors.cyan('|  ') + colors.green('Server running on:                  |'));
  console.log(colors.cyan('|  ') + colors.yellow('http://localhost:' + port + '/') + colors.cyan('              |'));
  console.log(colors.cyan('└======================================┘\n'));
};
