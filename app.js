document.querySelector(".cuadrado").addEventListener("click", myFunction1);
document.querySelector(".circulo").addEventListener("click", myFunction2);
document.querySelector(".triangulo").addEventListener("click", myFunction3);
document.querySelector(".reset").addEventListener("click", reset);

function myFunction1(){
    document.querySelector(".cuadrado").style.backgroundColor = 'white';
}
function myFunction2(){
    document.querySelector(".circulo").style.backgroundColor = 'white';
}
function myFunction3(){
    document.querySelector(".triangulo").style.border = 'white';
}
function reset(){
    document.querySelector(".cuadrado").style.backgroundColor = '';
    document.querySelector(".circulo").style.backgroundColor = '';
    document.querySelector(".triangulo").style.border = '';
}

