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
 // alert("hola");
}
function ej1() {
  let nombreEj1, apellidoEj1, resultadoEj1;
  nombreEj1 = document.querySelector("#nombreEj1").value;
  apellidoEj1 = document.querySelector("#apellidoEj1").value;
  resultadoEj1 = apellidoEj1 + ", " + nombreEj1;
  document.querySelector("#resultadoEj1").innerHTML=resultadoEj1
}

function ej2(){
  let valor1, valor2, resultadoEj2;
  valor1= parseFloat(document.querySelector("#valor1Ej2").value);
  valor2= parseFloat(document.querySelector("#valor2Ej2").value);
  resultadoEj2=valor1+valor2;
  document.querySelector("#resultadoEj2").innerHTML=resultadoEj2
}
function ej3(){
  let valor1, valor2, resultadoEj3, valor3;
  valor1= parseFloat(document.querySelector("#valor1Ej3").value);
  valor2= parseFloat(document.querySelector("#valor2Ej3").value);
  valor3= parseFloat(document.querySelector("#valor3Ej3").value);
  resultadoEj3=valor1+valor2+valor3;
  document.querySelector("#resultadoEj3").innerHTML=resultadoEj3
}
function ej4(){
  let valor1, valor2, suma, multi, resultadoEj4;
  valor1= parseFloat(document.querySelector("#valor1Ej4").value);
  valor2= parseFloat(document.querySelector("#valor2Ej4").value);
  suma=valor1+valor2;
  multi=valor1*valor2;
  resultadoEj4=`la suma de los valores es: ${suma}, y la multiplicación es: ${multi}`;
  document.querySelector("#resultadoEj4").innerHTML=resultadoEj4
}
function ej5(){
let valor, area;
valor= parseFloat(document.querySelector("#valorEj5").value);
area=Math.pow(valor, 2)
document.querySelector("#resultadoEj5").innerHTML=area
}
function ej6(){
  let valor1, valor2, resultadoEj6;
  valor1= parseFloat(document.querySelector("#valor1Ej6").value);
  valor2= parseFloat(document.querySelector("#valor2Ej6").value);
  resultadoEj6=valor1/valor2;
  document.querySelector("#resultadoEj6").innerHTML=resultadoEj6
}
function ej7(){
  let valor1, valor2, resultadoEj7;
  valor1= parseInt(document.querySelector("#valor1Ej7").value);
  valor2= parseInt(document.querySelector("#valor2Ej7").value);
  resultadoEj7=valor1%valor2;
  document.querySelector("#resultadoEj7").innerHTML=resultadoEj7
}
function ej8(){
  let valor1, valor2, resultadoEj3, valor3;
  valor1= parseFloat(document.querySelector("#valor1Ej8").value);
  valor2= parseFloat(document.querySelector("#valor2Ej8").value);
  valor3= parseFloat(document.querySelector("#valor3Ej8").value);
  resultadoEj8=((valor1+valor2)/valor3);
  document.querySelector("#resultadoEj8").innerHTML=resultadoEj8
}