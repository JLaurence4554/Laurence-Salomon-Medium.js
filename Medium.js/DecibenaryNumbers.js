function decibinaryNumbers(x) {
  const seen = [];
  for (let i = 0; i < 300; i++) {
    let val = 0, n = i, pow = 0;
    while (n > 0) {
      val += (n % 10) * (1 << pow);
      n = Math.floor(n / 10);
      pow++;
    }
    seen.push([val, i]);
  }

  seen.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));

  return seen[x - 1][1];
}
