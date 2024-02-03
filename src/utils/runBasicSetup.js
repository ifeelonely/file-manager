import { setEnvVar } from './setEnvVar.js';
import { messageToUser } from './messageToUser.js';
import { userHomeDir } from '../services/os.js';
import { WELCOME, PATH } from '../constants/messageTypes.js';

export const runBasicSetup = (USERNAME) => {
  setEnvVar('curUser', USERNAME);
  messageToUser(WELCOME);
  process.chdir(userHomeDir);
  messageToUser(PATH, userHomeDir);
};
