module.exports = function towelSort (matrix) {
  return matrix ? matrix.reduce((acc, el, i) => acc.concat(i%2 ? el.reverse() : el), []) : []
}
