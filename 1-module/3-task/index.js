/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  if (str.length === 0) {return '';}
  return (str[0].toUpperCase() + str.slice(1));
}
