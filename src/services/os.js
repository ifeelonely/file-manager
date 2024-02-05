import os from 'node:os';

const userHomeDir = os.homedir();
const EOL = JSON.stringify(os.EOL);
const sysHomedir = `Home directory: ${os.homedir()}`;
const sysUsername = `The system user name is: ${os.userInfo().username}`;
const cpuArchitecture = `The CPU architecture for which Node.js binary has been compiled is: ${os.arch()}`;
const getCpus = () => {
  const cpus = os.cpus().map((el) => {
    return { model: el.model, Ghz: el.speed };
  });
  console.log('Overall amount of cpus:', cpus.length);
  console.table(cpus);
};
export { userHomeDir, EOL, getCpus, sysHomedir, sysUsername, cpuArchitecture };
