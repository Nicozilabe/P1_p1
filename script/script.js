window.addEventListener("load", inicio);

function inicio() {
  document.querySelector("#ej1Btn").addEventListener("click", ej1);
  document.querySelector("#ej2Btn").addEventListener("click", ej2);
  document.querySelector("#ej3Btn").addEventListener("click", ej3);
  document.querySelector("#ej4Btn").addEventListener("click", ej4);
  document.querySelector("#ej5Btn").addEventListener("click", ej5);
  document.querySelector("#ej6Btn").addEventListener("click", ej6);
  document.querySelector("#ej7Btn").addEventListener("click", ej7);
  document.querySelector("#ej8Btn").addEventListener("click", ej8);
  document.querySelector("#ej9Btn").addEventListener("click", ej9);
  document.querySelector("#ej10Btn").addEventListener("click", ej10);
  document.querySelector("#ej11Btn").addEventListener("click", ej11);
  document.querySelector("#ej12Btn").addEventListener("click", ej12);
  document.querySelector("#ej13Btn").addEventListener("click", ej13);
  document.querySelector("#ej14Btn").addEventListener("click", ej14);
  document.querySelector("#ej15Btn").addEventListener("click", ej15);
}
function ej1() {
  let nombreEj1, apellidoEj1, resultadoEj1;
  nombreEj1 = document.querySelector("#nombreEj1").value;
  apellidoEj1 = document.querySelector("#apellidoEj1").value;
  resultadoEj1 = apellidoEj1 + ", " + nombreEj1;
  document.querySelector("#resultadoEj1").innerHTML = resultadoEj1;
}

function ej2() {
  let valor1, valor2, resultadoEj2;
  valor1 = parseFloat(document.querySelector("#valor1Ej2").value);
  valor2 = parseFloat(document.querySelector("#valor2Ej2").value);
  resultadoEj2 = valor1 + valor2;
  document.querySelector("#resultadoEj2").innerHTML = resultadoEj2;
}
function ej3() {
  let valor1, valor2, resultadoEj3, valor3;
  valor1 = parseFloat(document.querySelector("#valor1Ej3").value);
  valor2 = parseFloat(document.querySelector("#valor2Ej3").value);
  valor3 = parseFloat(document.querySelector("#valor3Ej3").value);
  resultadoEj3 = valor1 + valor2 + valor3;
  document.querySelector("#resultadoEj3").innerHTML = resultadoEj3;
}
function ej4() {
  let valor1, valor2, suma, multi, resultadoEj4;
  valor1 = parseFloat(document.querySelector("#valor1Ej4").value);
  valor2 = parseFloat(document.querySelector("#valor2Ej4").value);
  suma = valor1 + valor2;
  multi = valor1 * valor2;
  resultadoEj4 = `la suma de los valores es: ${suma}, y la multiplicación es: ${multi}`;
  document.querySelector("#resultadoEj4").innerHTML = resultadoEj4;
}
function ej5() {
  let valor, area;
  valor = parseFloat(document.querySelector("#valorEj5").value);
  area = Math.pow(valor, 2);
  document.querySelector("#resultadoEj5").innerHTML = area;
}
function ej6() {
  let valor1, valor2, resultadoEj6;
  valor1 = parseFloat(document.querySelector("#valor1Ej6").value);
  valor2 = parseFloat(document.querySelector("#valor2Ej6").value);
  resultadoEj6 = valor1 / valor2;
  document.querySelector("#resultadoEj6").innerHTML = resultadoEj6;
}
function ej7() {
  let valor1, valor2, resultadoEj7;
  valor1 = parseInt(document.querySelector("#valor1Ej7").value);
  valor2 = parseInt(document.querySelector("#valor2Ej7").value);
  resultadoEj7 = valor1 % valor2;
  document.querySelector("#resultadoEj7").innerHTML = resultadoEj7;
}
function ej8() {
  let valor1, valor2, resultadoEj8, valor3;
  valor1 = parseFloat(document.querySelector("#valor1Ej8").value);
  valor2 = parseFloat(document.querySelector("#valor2Ej8").value);
  valor3 = parseFloat(document.querySelector("#valor3Ej8").value);
  resultadoEj8 = (valor1 + valor2) / valor3;
  document.querySelector("#resultadoEj8").innerHTML = resultadoEj8;
}
function ej9() {
  let valor1, valor2, resultadoEj9, valor3;
  valor1 = parseFloat(document.querySelector("#valor1Ej9").value);
  valor2 = parseFloat(document.querySelector("#valor2Ej9").value);
  valor3 = parseFloat(document.querySelector("#valor3Ej9").value);
  resultadoEj9 = Math.pow(valor1, 2) - (valor2 + valor3);
  document.querySelector("#resultadoEj9").innerHTML = resultadoEj9;
}
function ej10() {
  let valor1, valor2, resultadoEj10;
  valor1 = parseFloat(document.querySelector("#valor1Ej10").value);
  valor2 = parseFloat(document.querySelector("#valor2Ej10").value);
  resultadoEj10 = valor1 + (valor2 * valor1) / 100;
  document.querySelector("#resultadoEj10").innerHTML = resultadoEj10;
}
function ej11() {
  let valor1, valor2, resultadoEj11;
  valor1 = parseFloat(document.querySelector("#valor1Ej11").value);
  resultadoEj11 = (valor1 + (22 * valor1) / 100).toFixed(2);
  document.querySelector("#resultadoEj11").innerHTML = resultadoEj11;
}
function ej12() {
  let valor1, valor2, resultadoEj12;
  valor1 = parseFloat(document.querySelector("#valor1Ej12").value);
  valor2 = parseFloat(document.querySelector("#valor2Ej12").value) / 100;
  resultadoEj12 = (valor1 / Math.pow(valor2, 2)).toFixed(2);
  document.querySelector("#resultadoEj12").innerHTML = resultadoEj12;
}
let contadorEj13 = 0;
function ej13() {
  contadorEj13++;
  resultadoEj13 = `llevas ${contadorEj13} clicks`;
  document.querySelector("#resultadoEj13").innerHTML = resultadoEj13;
}
let contadorEj14 = 0;
function ej14() {
  contadorEj14 += 3;
  resultadoEj14 = `llevas ${contadorEj14} clicks`;
  document.querySelector("#resultadoEj14").innerHTML = resultadoEj14;
}
let contadorEj15 = 0;
function ej15() {
  let valor = Number(document.querySelector("#valor1Ej15").value);
  contadorEj15 += valor;
  resultadoEj15 = `llevas ${contadorEj15} clicks`;
  document.querySelector("#resultadoEj15").innerHTML = resultadoEj15;
}
