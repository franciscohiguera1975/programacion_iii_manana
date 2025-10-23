console.log("FUNCIONES");
console.log("FORMA CLÁSICA");
function saludar(){
    console.log("Hola desde una Función clásica");
}
saludar();
console.log("FORMA CON PARAMETROS Y RETORNO");
function sumar(a,b){
    return a+b;
}
let resultado = sumar(4,9);
console.log("la suma es ", resultado);

console.log("FUNCION FLECHA");
const resta = (a,b)=>{
    return a-b;
}
let resultadoResta = resta(9,5);
console.log("la resta es ", resultadoResta);

console.log("FUNCION RETORNO DIRECTO");
const cuadrado = x =>x*x;
console.log("cuadrado de 5 : ", cuadrado(5));

console.log("FUNCION CON PARAMETROS POR DEFECTO");
function saludar(nombre, saludo="Hola"){
    return saludo +" "+nombre;
}
let saludo1 = saludar("Francisco");
let saludo2 = saludar("Francisco", "Buenos días");
console.log(saludo1);
console.log(saludo2);