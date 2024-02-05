
export const parseTwoPaths = (paths) => {
  const [path1, path2] = paths.split('" "');
  if(path1 && path2 && path1[0] === '"' && path2[path2.length - 1] === '"') {
    const tempPath1 = path1.substring(1);
    const tempPath2 = path2.substring(0, path2.length - 1);
    return [tempPath1, tempPath2]
  } else {
    return paths.split(' ');
  }
}