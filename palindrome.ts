function isPalindrome(x: number): boolean {
  let xStr = String(x);
  return xStr.split("").reverse().join("") === xStr;
}
