function power(n, pow) {
  let min;
  if (pow < 0) min = true;

  let mul = 1;
  let p = min ? -pow : pow;
  for (let i = 1; i <= p; i++) {
      mul *= n;
  }
  return min ? 1 / mul : mul;
}

// console.log(power(20, 0));
// console.log(power(20, 3));
// console.log(power(10, -3));

let n = +prompt('Введите число:');
let pow = +prompt('Введите степень:');
  if (pow < 0 || pow == 0 || isNaN(pow)) {
    pow = 2;  
    alert(power(n, pow));
  }else if (pow > 0 || !isNaNO(pow)) {
    alert(power(n, pow));
  }