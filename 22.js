/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  return getParenthesis(n).map(item => item.combination);
};

/**
 * @param {number} n
 * @return { {combination: string, insertions: number[]}[] }
 */
function getParenthesis(n) {
  /**
   * combination: a valid parenthesis string, for example ()()
   * insertions:  indexes where closing parenthesis can be inserted, for example [0, 2, 4]
   */
  if (n === 0) {
    return [{
      combination: undefined,
      insertions: []
    }];
  }

  if (n === 1) {
    return [{
      combination: '()',
      insertions: [0, 2]
    }];
  }

  const result = [];
  getParenthesis(n - 1).forEach(item => {
    item.insertions.forEach(insertIndex => {
      result.push({
        // Insert closing parenthesis at insertion index
        combination: '(' + item.combination.substring(0, insertIndex) + ')' + item.combination.substring(insertIndex),
        insertions: [
          // At beginning, next closing parenthesis can always be inserted
          0,
          // In addition, previous positions can also insert a closing parenthesis.
          ...item.insertions.filter(insertion => insertion >= insertIndex).map(insertion => insertion + 2)
        ]
      });
    });
  });

  return result;
}

/**
 *  ( )
 * 0   2
 *  ( ) ( )        ( ( ) )
 * 0   2   4      0        4
 *
 *  ( ) ( ) ( )        ( ( ) ) ( )        ( ( ) ( ) )    |    ( ) ( ( ) )        ( ( ( ) ) )
 * 0   2   4   6      0       4   6      0           6       0   2       6      0            6
 */
