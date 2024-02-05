import { osArgs } from '../commands/cliCommands.js';
import {
  cpuArchitecture,
  EOL as curEOL,
  getCpus,
  sysHomedir,
  sysUsername,
} from '../services/os.js';

export const handleOsCommand = (command) => {
  const trimmed = command.replace(/-/g, '');
  const { EOL, cpus, homedir, username, architecture } = osArgs;

  switch (trimmed) {
    case EOL:
      console.log(curEOL);
      break;
    case cpus:
      getCpus();
      break;
    case homedir:
      console.log(sysHomedir);
      break;
    case username:
      console.log(sysUsername);
      break;
    case architecture:
      console.log(cpuArchitecture);
      break;
    default:
      break;
  }
};
