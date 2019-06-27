/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const parentheses = [
    ['(', ')'],
    ['[', ']'],
    ['{', '}'],
  ];

  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i);
    const pair = parentheses.find(p => p[1] === c);

    if (pair !== undefined) { // c is closing parenthesis
      const last = stack.pop();
      if (last !== pair[0]) { return false; }
    } else {
      stack.push(c);
    }
  }

  return stack.length === 0;
};
