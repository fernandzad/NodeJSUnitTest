 let sumar = (a,b) => a+b; 
 let multiplicar = (a,b) => a*b; 
 let dividir = (a,b) => a/b; 
 let restar = (a,b) => {
     return Math.abs(a-b);
    }; 

let regex = (estring) => {
    let result = estring.match(/ab/g);
    return result;
};

console.log(regex('xyz'));

 module.exports = {
    sumar : sumar,
    restar: restar,
    dividir : dividir,
    multiplicar : multiplicar,
    regex: regex
 };