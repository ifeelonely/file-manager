import { fileURLToPath } from 'node:url';
import { dirname } from 'path';

const getDir = (currentPath) => {
  if(!currentPath) return;
  const __filename = fileURLToPath(currentPath);
  const __dirname = dirname(__filename);
  return __dirname;
};

export { getDir };
