import { getCLIArg } from "./utils/getCLIArg.js";
import { getDir } from "./utils/getDir.js";

console.log(getDir(import.meta.url))
console.log(await getCLIArg('--username', process.argv))