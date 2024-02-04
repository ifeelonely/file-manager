import { cliCommands } from '../commands/cliCommands.js';
import { EXIT, INVALID_INPUT, PATH } from '../constants/messageTypes.js';
import {
  changeDirUp,
  changeDirWithPath,
  listFiles,
} from '../services/navigation.js';
import {
  copyFile,
  createFile,
  deleteFile,
  moveFile,
  readFile,
  renameFile,
} from '../services/files.js';
import { messageToUser } from '../utils/messageToUser.js';
import { parseTwoPaths } from '../utils/parseTwoPaths.js';

const handleUserInput = async (input) => {
  const [command, ...paths] = input.split(' ');
  const { up, cd, ls, exit, cat, add, rn, cp, mv, rm } = cliCommands;
  switch (command) {
    case up:
      changeDirUp();
      break;
    case cd:
      changeDirWithPath(paths.join(' '));
      break;
    case ls:
      await listFiles();
      break;
    case cat:
      await readFile(paths.join(' '));
      break;
    case add:
      await createFile(paths.join(' '));
      break;
    case rn:
      const [oldPath, newName] = parseTwoPaths(paths.join(' '));
      await renameFile(oldPath, newName);
      break;
    case cp:
      const [fromCopy, toCopy] = parseTwoPaths(paths.join(' '));
      await copyFile(fromCopy, toCopy);
      break;
    case mv:
      const [moveFrom, moveTo] = parseTwoPaths(paths.join(' '));
      await moveFile(moveFrom, moveTo);
      break;
    case rm:
      await deleteFile(paths.join(' '));
      break;
    case exit:
      messageToUser(EXIT);
      process.exit(0);
    default:
      messageToUser(INVALID_INPUT);
      break;
  }
  messageToUser(PATH, process.cwd());
};
export { handleUserInput };
