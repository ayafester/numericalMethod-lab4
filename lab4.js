function fact(n) {
  if( n < 0 )
    return 0;
  if( n == 0 )
    return 1;
  let res = 1;
  for(let i = 0; i<n; i++) {
    res = res * (n-i);
  }
  return res;
}

function integral() {
  let ryad = [];
  let eps = 0.0001;
  for( let n=1;  n<10; n++) { //взяли примерно число 10
    x = Number(Math.PI.toFixed(2));
    let xn = Math.pow(x, n)/(n*fact(2*n));
    xn = xn.toFixed(5);
    if( xn < eps) { //когда элемент ряда станет меньше Е, тогда запомнить этот элемент и отправить на оценку остатка ряда
      ryad.push(n);//элемент с которого надо считать остаток
      break;
    }
    ryad.push(xn);
  }
  return ryad;
}

function geomProgress(lastElem) {
  let geomProg = [2]
  let q = 1/5;
  for (let i = 1; i < lastElem; i++) {
    let b = (2/Math.pow(5, i)).toFixed(5);
    geomProg.push(b);
  }
  return geomProg;
}

function ostatok(n) {
  let q = 1/5;
  let ost = (2/Math.pow(5,n))/(1-q);
  return ost;
}

function ocenka(x, n, q) { //оценка каждого элемента ряда убывающей прогрессией, предел = 0
  for (let i = 0; i<n; i++) {
    if(x[i] < q[i]) {
      return true;
    }
    else return false;
  }
}

function answer() {
  int = integral();
  lastElem = int.pop();
  console.log("integral: " + int);
  geom = geomProgress(lastElem);
  console.log("geom: " + geom);
  console.log(ocenka(int, lastElem, geom));
  ost = ostatok(lastElem);
  console.log("сумма с остатка ряда:  " + ost);
  let sumInt = 0;
  for (let i=0; i<int.length; i++) {
    int[i] = Number(int[i]);
    sumInt += int[i];
  }
  console.log("Приближенный ответ: " + sumInt);
}

console.log(answer());













/*function chosinus(x, e) {
  let result = 1;
	let member = 1;
	for (let i = 1; Math.abs(member) >= e; i++)
	{
    member *= x;
		member /= 2*i * (2*i - 1);
		result += member;
	}
	return result;
}

console.log(chosinus(4, 0.001));*/
