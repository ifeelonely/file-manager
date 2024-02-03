import { cliCommands } from '../commands/cliCommands.js';
import { EXIT, INVALID_INPUT } from '../constants/messageTypes.js';
import {
  changeDirUp,
  changeDirWithPath,
  listFiles,
} from '../services/navigation.js';
import { readFile } from '../services/files.js';
import { messageToUser } from '../utils/messageToUser.js';

//C:\Program Files\Honor
const handleUserInput = async (input) => {
  const command = input.split(' ');
  const { up, cd, ls, exit, cat } = cliCommands;

  switch (command[0]) {
    case up:
      changeDirUp();
      break;
    case cd:
      changeDirWithPath(command.splice(1).join(' '));
      break;
    case ls:
      await listFiles();
      break;
    case cat:
      await readFile(command.splice(1).join(' '));
      break;
    case exit:
      messageToUser(EXIT);
      process.exit(0);
    default:
      messageToUser(INVALID_INPUT);
      break;
  }
};
export { handleUserInput };
