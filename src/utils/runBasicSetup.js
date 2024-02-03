import { setEnvVar } from './setEnvVar.js';
import { messageToUser } from './messageToUser.js';
import { userHomeDir } from '../services/os.js';

export const runBasicSetup = (USERNAME) => {
  setEnvVar('curUser', USERNAME);
  messageToUser('welcome');
  process.chdir(userHomeDir);
  messageToUser('path', userHomeDir);
};
