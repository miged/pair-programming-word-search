const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(''));
  const verticalJoin = transpose(letters).map((ls) => ls.join(''));
  const joins = horizontalJoin.concat(verticalJoin);

  for (let l of joins) {
    if (l.includes(word)) return true;
  }

  return false;
};

const transpose = function(matrix) {
  let array = [];
  if (matrix.length === 0) return [];

  matrix[0].forEach(() => array.push([]));

  matrix.forEach((_, row) => {
    matrix[row].forEach((_, col) =>
      array[col][row] = matrix[row][col]
    );
  });

  return array;
};

module.exports = wordSearch;
