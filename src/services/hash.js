import { messageToUser } from '../utils/messageToUser.js';
import { OPERATION_FAILED } from '../constants/messageTypes.js';
import { createReadStream } from 'node:fs';
import { Transform } from 'node:stream';
const { createHmac } = await import('node:crypto');

export const calcHash = async (pathToFile) => {
  const readStream = createReadStream(pathToFile);
  const output = process.stdout;
  const data = 'I love node js!';
  const hashSHA256 = new Transform({
    transform(chunk, encoding, callback) {
      this.push(createHmac('sha256', chunk).update(data).digest('hex'));
      callback();
    },
  });
  readStream.on('error', () => messageToUser(OPERATION_FAILED));
  readStream.pipe(hashSHA256).pipe(output);
};
