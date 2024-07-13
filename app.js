let numerosecreto;
let intentos;
let listanumerossorteados = [];
let numeromaximo=10;
iniciar(); // Inicializa el juego al cargar la página

// Función para asignar texto a un elemento HTML
function asignar(elemento, t1) {
    let elementohtml = document.querySelector(elemento);
    elementohtml.innerHTML = t1;
}

// Función para verificar el intento del usuario
function verificarintento() {
    let numerodeusuario = parseInt(document.getElementById('valorusuario').value);
    if (numerodeusuario === numerosecreto) {
        // El usuario acertó
        asignar("p", "¡Acertaste!");
        asignar("h1", `Ganaste en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        // El usuario no acertó
        if (numerodeusuario > numerosecreto) {
            asignar("p", "El número es menor");
        } else {
            asignar("p", "El número es mayor");
        }
        asignar("h1", `Intento número: ` + intentos);
        intentos++;
        limpiarinput();
    }
    return;
}

// Función para generar un número secreto aleatorio entre 1 y 10
function generarnumerosecreto() {
   let numerogenerado=Math.floor(Math.random() *numeromaximo) + 1;
   if (listanumerossorteados.length==numeromaximo) {
    asignar("h1","Ya se sortearon todos los numeros");
        }else{
        if (listanumerossorteados.includes(numerogenerado)) {
            return generarnumerosecreto();
        }else{
        listanumerossorteados.push(numerogenerado);
        return numerogenerado;
        }
    }
}

// Función para limpiar el valor del input del usuario
function limpiarinput() {
    document.querySelector("#valorusuario").value = "";
}

// Función para reiniciar el juego
function reiniciarjuego() {
    iniciar();
    deshabilitar();
    limpiarinput();
}

// Función para inicializar el juego
function iniciar() {
    asignar("h1", "Hola");
    asignar("p", `Elige un número de 1 a ${numeromaximo}`);
    numerosecreto = generarnumerosecreto();
    console.log(numerosecreto);
    intentos = 1;
}

// Función para deshabilitar el botón de reiniciar
function deshabilitar() {
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}
/*
 
1.Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
  
 function IMC(peso,altura) {
    IMC=peso/(altura+peso);
    return IMC;
    }

let f1=IMC(100;192);

console.log(f1)
2.Crea una función que calcule el valor del factorial de un número pasado como parámetro.

function factorial(n) {
    let factorial=1;

    while (n>1) {
        factorial = factorial*n;
        n=n-1;
    }
    return factorial;
}

let f2=factorial(10);

console.log(f2)

3.Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
function conversion(valor) {
    let precio = 3990;

    conversion=precio*valor;
    
    return conversion;
}

let f3=conversion(10);

console.log(f3)
4.Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
function perimetro(alto,largo) {
    
    perimetro=(2*alto)+(2*largo);
    
    return perimetro;
}

let f4=perimetro(10,18);
console.log(f4)
5.Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
function calcularAreaYPerimetro(radio) {
    const pi = 3.14;
    const area = pi * radio * radio;
    const perimetro = 2 * pi * radio;

    console.log("Área: " + area);
    console.log("Perímetro: " + perimetro);
}

// Llamada a la función con un radio de ejemplo
calcularAreaYPerimetro(5);

6.Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
function tablaMultiplicar(numero) {
    console.log(`Tabla de multiplicar del ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

// Ejemplo: mostrar la tabla de multiplicar del 7
tablaMultiplicar(7);

*/
    
