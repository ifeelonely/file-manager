import {
  EXIT,
  WELCOME,
  PATH,
  INVALID_INPUT,
} from '../constants/messageTypes.js';

const messageToUser = (mgsType, curDir, msg) => {
  const username = process.env['curUser'];
  switch (mgsType) {
    case WELCOME:
      console.log(`Welcome to the File Manager, ${username}!`);
      break;
    case EXIT:
      console.log(`Thank you for using File Manager, ${username}, goodbye!`);
      break;
    case PATH:
      console.log(`You are currently in ${curDir}`);
      break;
    case INVALID_INPUT:
      console.log('Invalid input');
      break;
    default:
      console.log(msg);
  }
};

export { messageToUser };
