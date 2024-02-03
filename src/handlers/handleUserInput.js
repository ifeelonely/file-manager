import { changeDirUp, changeDirWithPath, listFiles } from '../services/navigation.js';
import path from 'node:path';
//C:\Program Files\Honor
const handleUserInput = (input) => {
  const command = input.split(' ');
  
  switch (command[0]) {
    case 'up':
      changeDirUp();
      break;
    case 'cd':
      changeDirWithPath(command.splice(1).join(' '));
      break;
    case 'ls':
       listFiles();
      break;
    default:
      break;
  }
};
export { handleUserInput };
