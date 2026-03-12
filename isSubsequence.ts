function isSubsequence(s: string, t: string): boolean {
  let sArray = s.split("");
  let tArray = t.split("");

  for (let i = 0; i < tArray.length; i++) {
    let value = tArray[i];

    if (value === sArray[0]) {
      sArray.shift();
    }
  }

  return sArray.length === 0;
}
