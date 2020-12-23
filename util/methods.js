export function getLinkStyle(obj, prop) {
  return {
    cursor: "pointer",
    color: !obj.hasOwnProperty(prop) ? "black" : "#add8e6",
  };
}

export function getFirstTwoLetters(str) {
  return str.slice(0, 2);
}
