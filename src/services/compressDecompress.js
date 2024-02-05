import { createReadStream, createWriteStream } from 'node:fs';
import { createBrotliCompress, createBrotliDecompress, unzip } from 'node:zlib';
import { messageToUser } from '../utils/messageToUser.js';
import { INVALID_INPUT, OPERATION_FAILED } from '../constants/messageTypes.js';
import { pipeline } from 'node:stream/promises';

export const compressFile = async (pathToFile, pathToDest) => {
  if (!pathToFile || !pathToDest) {
    messageToUser(INVALID_INPUT);
    return;
  }
  try {
    const gzip = createBrotliCompress();
    const readStream = createReadStream(pathToFile);
    const writeStream = createWriteStream(pathToDest);
    await pipeline(readStream, gzip, writeStream);
  } catch (error) {
    messageToUser(OPERATION_FAILED);
  }
};

export const decompressFile = async (pathToFile, pathToDest) => {
  if (!pathToFile || !pathToDest) {
    messageToUser(INVALID_INPUT);
    return;
  }
  try {
    const readStream = createReadStream(pathToFile);
    const writeStream = createWriteStream(pathToDest);
    const upzip = createBrotliDecompress();
    await pipeline(readStream, unzip, writeStream);
  } catch (error) {
    messageToUser(OPERATION_FAILED);
  }
};
