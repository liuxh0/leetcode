/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  const cycle = Math.max(1, numRows * 2 - 2);

  let result = '';
  for (let i = 0; i < numRows; i++) {
    let index = i;
    let c1 = cycle - 2 * i;

    while (index < s.length) {
      result = result + s[index];

      if (c1 === 0) {
        index = index + cycle;
      } else {
        index = index + c1;
      }

      c1 = cycle - c1;
    }
  }

  return result;
};

/*
PAYPALISHIRING

P     A     H     N
A  P  L  S  I  I  G
Y     I     R

0     4     8    12
1  3  5  7  9 11
2     6    10

0        6       12
1     5  7    11 13
2  4     8 19    14
3        9       15

0           8          16   line 0 -> +8
1        7  9       15 17   line 1 -> +6 +2
2     6    10    14    18   line 2 -> +4 +4
3  5       11 13       19   line 3 -> +2 +6
4          12          20   line 4 -> +8
*/
