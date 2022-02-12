// Codigo del cuadrado
console.group("cuadrados");
// const ladocuadrado = 5;
//console.log("los lados del cuadrado miden: " + ladocuadrado + "cm")

function perimetrocuadrado (lado) {
    return lado * 4;
}
//console.log("El perimetro del cuadrado es: " + perimetrocuadrado + "cm" )

function areacuadrado (lado) {
    return lado * lado
}
//console.log("El area del cuadrado es: " + areacuadrado + "cm²")

console.groupEnd();
 
console.group("Triangulos");
//const ladotriangulo1 = 6;
//const ladotriangulo2 = 6;
//const basetriangulo = 4;
//const alturatriangulo = 5.5;
//console.log(
   // "Los lados del tirngulo miden: "
    //+ ladotriangulo1 
    //+ " cm, " 
    //+ ladotriangulo2 
    //+ "cm, " 
    //+ basetriangulo 
    //+ "cm"
//);
function perimetrotriangulo (lado1, lado2, base) {
    return lado1 + lado2+ base;
}

// console.log("La altura del triangulo es de: " + alturatriangulo);

//const perimetrotriangulo = ladotriangulo1 + ladotriangulo2 + basetriangulo;
//console.log("El perimetrodel triangulo es: " + perimetrotriangulo + "cm" );

//const areatriangulo = (basetriangulo * alturatriangulo) / 2;

function areatriangulo (base, altura) {
    return (base *altura) /2;
}

//console.log ("El area del triangulo: " + areatriangulo + "cm²");

console.groupEnd();

// codigo del circulo
console.group("Circulos");

// radio
// const radiocirculo = 4;
// console.log("El radio del circulo es: " + radiocirculo + "cm");

// diametro
function diametrocirculo(radio) {
    return radio * 2;
}


// Pi
const PI = 3.1415;
console.log("PI es: " + PI + "cm");

// circunferencia
function perimetrocirculo(radio) {
    const diametro = diametrocirculo(radio);
    return diametro * PI;
}

// area
function areacirculo(radio) {
    return (radio *radio) * PI;
}

console.groupEnd();

// aqui interectuamos con HTML
function calcularperimetrocuadrado() {
 const input = document.getElementById("inputcuadrado");
 const value = input.value;

 const perimetro = perimetrocuadrado (value);
 alert(perimetro);
}
function calcularareacuadrado() {
    const input = document.getElementById("inputcuadrado");
    const value = input.value;

    const area = areacuadrado (value);
    alert(area);
}