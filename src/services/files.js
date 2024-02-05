import { createReadStream, createWriteStream } from 'node:fs';
import { INVALID_INPUT, OPERATION_FAILED } from '../constants/messageTypes.js';
import { messageToUser } from '../utils/messageToUser.js';
import { rename, writeFile } from 'node:fs/promises';
import { unlink } from 'node:fs/promises';
import path from 'node:path';

export const readFile = async (filePath) => {
  const readStream = createReadStream(filePath);
  const output = process.stdout;
  readStream.on('error', (err) => messageToUser(OPERATION_FAILED));
  readStream.pipe(output);
};

export const createFile = async (fileName) => {
  try {
    await writeFile(fileName, '');
  } catch (error) {
    messageToUser(INVALID_INPUT);
  }
};

export const renameFile = async (oldPath, newFileName) => {
  try {
    await rename(oldPath, newFileName);
  } catch (error) {
    messageToUser(OPERATION_FAILED);
  }
};

export const copyFile = async (oldPath, newPath) => {
  const destinationFile = path.basename(oldPath);
  const readStream = createReadStream(oldPath);
  const writeStream = createWriteStream(path.join(newPath, destinationFile));

  readStream.on('error', (err) => messageToUser(OPERATION_FAILED));
  writeStream.on('error', (err) => messageToUser(OPERATION_FAILED));
  readStream.pipe(writeStream);
};
//D:\Диплом\материалы\jopa.txt D:\Диплом\материалы
export const moveFile = async (oldPath, newPath) => {
  await copyFile(oldPath, newPath);
  try {
    await unlink(oldPath);
  } catch (error) {
    messageToUser(OPERATION_FAILED);
  }
};

export const deleteFile = async (pathToDelete) => {
  try {
    await unlink(pathToDelete);
  } catch (error) {
    messageToUser(OPERATION_FAILED);
  }
};
