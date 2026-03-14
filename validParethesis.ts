// Todo: Algorithm:
//  1. initialize a empty stack
//  2. char iterate through string
//   if openin ({[ then push to stack
//   if closing )}] then stack is empty then str is invalid and pop the top of stack
//   corresponding opening and closing for (), {}, []
//   if match then str valid

function isValid(s: string): boolean {
  const stack: string[] = [];
  const map: { [key: string]: string } = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of s) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      if (stack.length === 0 || stack.pop() !== map[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
