module.exports = function solveEquation(equation) {
  let [a, b, c] = equation
      .match( /([-+]|^) ?\d+/g )
      .map( item => item.replace(' ', '') );

  let D = Math.pow(b, 2) - 4 * a * c;

  let x1 = Math.round((-b + Math.sqrt(D)) / (2 * a)),
      x2 = Math.round((-b - Math.sqrt(D)) / (2 * a));

  return [x1, x2].sort((a, b) => a - b);
};
