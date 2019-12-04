 let sumar = (a,b) => a+b; 
 let multiplicar = (a,b) => a*b; 
 let dividir = (a,b) => a/b; 
 let restar = (a,b) => {
     return Math.abs(a-b);
    }; 

 module.exports = {
    sumar : sumar,
    restar: restar,
    dividir : dividir,
    multiplicar : multiplicar
 };