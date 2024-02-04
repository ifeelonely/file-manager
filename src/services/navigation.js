import path from 'path';
import { messageToUser } from '../utils/messageToUser.js';
import { INVALID_INPUT, OPERATION_FAILED, PATH } from '../constants/messageTypes.js';
import { readdir } from 'fs/promises';

export const changeDirUp = () => {
  process.chdir(path.resolve(process.cwd(), '..'));
};

export const changeDirWithPath = (newPath) => {
  try {
    process.chdir(newPath);
  } catch (error) {
    messageToUser(INVALID_INPUT);
  }
};

export const listFiles = async () => {
  try {
    const filesAndDirs = await readdir(process.cwd(), { withFileTypes: true });
    const files = [];
    const dirs = [];
    for (let i = 0; i < filesAndDirs.length; i++) {
      const current = filesAndDirs[i];
      if (current.isDirectory())
        dirs.push({
          Name: current.name,
          Type: 'directory',
        });
      else files.push({ Name: current.name, Type: 'file' });
    }
    console.table([...dirs, ...files]);
  } catch (error) {
    messageToUser(OPERATION_FAILED);
  }
};
