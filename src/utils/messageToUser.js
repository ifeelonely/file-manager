import { EXIT, WELCOME, PATH } from '../constants/messageTypes.js';

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
    default:
      console.log(msg);
  }
};

export { messageToUser };
