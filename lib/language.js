export function emphasizeString(text, magn) {
    let ret = "!";
    for (let index = 0; index < magn; index++) {
      text += "!";
    }
  return ret + text;
}