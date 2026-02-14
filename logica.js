// CAPA DE LOGICA DE NEGOCIO
// Función que se ejecuta al presionar el botón "SUMAR"
function sumar(){

    // Toma el valor de num1 y num2 y los convierte a enteros
    let a=parseInt(document.getElementById("num1").value);
    let b=parseInt(document.getElementById("num2").value);
    
    // Llama a la función obtenerResul(a, b) (de datos.js) para calcular la suma
    let resultado = obtenerResul(a,b);

    // Muestra el resultado en el elemento con el id "resultado"
    document.getElementById("resultado").innerText = "Resultado:    " + resultado;
    
}