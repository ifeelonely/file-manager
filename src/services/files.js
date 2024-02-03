import { createReadStream } from 'node:fs';
import { OPERATION_FAILED } from '../constants/messageTypes.js';
import { messageToUser } from '../utils/messageToUser.js';

export const readFile = async (filePath) => {
  const readStream = createReadStream(filePath);
  const output = process.stdout;
  readStream.on('error', (err) => messageToUser(OPERATION_FAILED));
  readStream.pipe(output);
};
