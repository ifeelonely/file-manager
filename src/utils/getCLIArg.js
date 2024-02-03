const getCLIArg = (argName, args) => {
  if (!argName || !args) return;
  for (let i = 0; i < args.length; i++)
    if (args[i].startsWith(argName)) return args[i].split('=')[1];
  return null;
};

export { getCLIArg };
