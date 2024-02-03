import readline from 'node:readline';
import { getCLIArg } from './utils/getCLIArg.js';
import { messageToUser } from './utils/messageToUser.js';
import { stdin, stdout } from 'node:process';
import { handleUserInput } from './handlers/handleUserInput.js';
import { runBasicSetup } from './utils/runBasicSetup.js';

const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});

const USERNAME = getCLIArg('--username', process.argv) || 'Anonymous';
runBasicSetup(USERNAME);

rl.on('line', (line) => {
  handleUserInput(line);
});

rl.on('close', () => {
  messageToUser('exit');
  process.exit(0);
});
