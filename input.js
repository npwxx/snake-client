const {MOVE_UP_KEY, MOVE_LEFT_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY, MESSAGES_KEYS} = require('./constants')
let connection;
const handleUserInput = function(key) {
  
  switch (key) {
    case '\u0003':
      process.exit();
    case MOVE_UP_KEY:
      connection.write("Move: up")
      break;
    case MOVE_LEFT_KEY:
      connection.write("Move: left");
      break;
    case MOVE_DOWN_KEY:
      connection.write("Move: down");
      break;
    case MOVE_RIGHT_KEY:
      connection.write("Move: right");
      break;
    default:
      const msg = MESSAGES_KEYS[key];
      if (msg) {
        connection.write(`Say: ${msg}`)
      }
      break;
  }
}
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
}

module.exports = {setupInput};
