function getDataFunc(n) { //Вычисление функции для построения графика\
  let arr = [];
  if(n==0) {
    for (let x = 0.01; x<=4.5; x+=0.5) {
      let func = (Math.cosh(Math.sqrt(x))-1)/x;
      arr.push(func.toFixed(3));
     }
    }
   else if(n==1) {
     for (let x = 0.01; x<=4.5; x+=1) {
       let func = (Math.cosh(Math.sqrt(x))-1)/x;
       arr.push(func.toFixed(3));
      }
   }

   return arr;
}

let chData = getDataFunc(0);
let polData = getDataFunc(1);
//решение точек полинома
function lagrange(n, x, y, xi) { //количество точек, массив точек, массив значений, шаг
  let res = 0;
  for (let i = 0; i <= n; i++) {
    let pol = y[i];
    for (let j = 0; j <= n; j++) {
      if ( i != j) {
        pol *= ( xi - x[j] )/( x[i] - x[j] );
      }
    }
    res += pol ;
  }
  return res;
}

function printLagrange() {
  let X = [0.01, 1, 2, 3, 4]; //вводим точки и значение функции в точках
  let Y = polData; //эти точки получим с помощью функции
  let x1 = 0, x2 = 4, dx = 0.5;
  let n = 4;
  let arr = [];
  for (let x = x1; x <= x2; x += dx) {
    let y = lagrange(n, X, Y, x);
    arr.push(y);
  }
  return arr;
}

let polinomData = printLagrange();

let speedCanvas = document.getElementById("myChart");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

let dataFirst = {
    label: "Заданная функция",
    data: chData, //передать данные из функции
    lineTension: 0,
    fill: false,
    borderColor: 'red'
  };

let dataSecond = {
    label: "Полином Лагранжа",
    data: polinomData,
    lineTension: 0,
    fill: false,
    borderColor: 'blue'
  };

let dataData = {
  labels: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5], //точки х
  datasets: [dataFirst, dataSecond]
};

let chartOptions = {
  legend: {
    display: true,
    position: 'top',
    labels: {
      boxWidth: 40,
      fontColor: 'black'
    }
  }
};

let lineChart = new Chart(speedCanvas, {
  type: 'line',
  data: dataData,
  options: chartOptions
});
