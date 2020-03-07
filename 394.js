/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  const stack = [[null, '']];
  let num = '';

  for (let i = 0; i < s.length; i++) {
      const c = s[i];

      if (c >= '0' && c <= '9') {
          num += c;
          continue;
      }

      if (c === '[') {
          stack.push([parseInt(num), '']);
          num = '';
          continue;
      }

      if (c === ']') {
          const last = stack.pop();
          stack[stack.length - 1][1] += last[1].repeat(last[0]);
          continue;
      }

      stack[stack.length - 1][1] += c;
  }

  return stack.pop()[1];
};
