//HANDS ON LAB

/*
Calculadora positiva con promesas

Se crearán un conjunto de funciones gestionadas por promesas y un entorno ASÍNCRONO donde podremos ponerlas a prueba
Definir función suma:
  Debe devolver una promesa que se resuelva siempre que ninguno de los dos sumandos sea 0
  En caso de que algún sumando sea 0, rechazar la promesa indicando “Operación innecesaria”.
  En caso de que la suma sea negativa, rechazar la promesa indicando “La calculadora sólo debe devolver valores positivos
Definir función resta:
  Debe devolver una promesa que se resuelva siempre que ninguno de los dos valores sea 0
  En caso de que el minuendo o sustraendo sea 0, rechazar la promesa indicando “Operación inválida
  En caso de que el valor de la resta sea menor que 0, rechazar la promesa indicando “La calculadora sólo puede devolver valores positivos”
Definir una función multiplicación:
  Debe devolver una promesa que se resuelva siempre que ninguno de los dos factores sea negativo
  Si el producto es negativo, rechazar la oferta indicando “La calculadora sólo puede devolver valores positivos
Definir la misma función división utilizada en esta clase.
Definir una función asíncrona “cálculos”, y realizar pruebas utilizando async/await y try/catch
*/

function suma(a,b){
    return new Promise((resolve,rejected)=>{
        if (a===0 || b===0){
            rejected("Operacion innesesaria")
        } else if (a+b <0){
            rejected("La calculadora solo devuelve valores positivos")
        } else {
            resolve(a+b)
        }
    })
}

function resta(minuendo,sustraendo){
    return new Promise((resolve,rejected)=>{
        if (minuendo===0 || sustraendo===0){
            rejected("Operacion innesesaria")
        } else if (minuendo-sustraendo <0){
            rejected("La calculadora solo devuelve valores positivos")
        } else {
            resolve(minuendo-sustraendo)
        }
    })
}

function multiplicacion(factor1,factor2){
    return new Promise((resolve,rejected)=>{
        if (factor1 < 0 || factor2 < 0){
            rejected("La calculadora solo devuelve valores positivos")
        } else {
            resolve(factor1*factor2)
        }
    })
}

function division(dividendo,divisor){
    return new Promise((resolve,rejected)=>{
        if (divisor === 0){
            rejected("No se puede dividir por 0")
        } else {
            resolve(dividendo/divisor)
        }
    })
}

async function calculos() {
    try{
        const resultadoSuma = await suma(5,7)
        console.log(`Resultado Suma ${resultadoSuma}`) 
        const resultadoResta = await resta(6,2)
        console.log(`Resultado Resta ${resultadoResta}`) 
        const resultadoMultiplicacion =await multiplicacion(2,3)
        console.log(`Resultado Multiplicacion ${resultadoMultiplicacion}`)  
        const resultadoDivision = await division(10,2)
        console.log(`Resultado Division ${resultadoDivision}`) 
    }catch(error){
        console.log("error:", error)
    }
}

calculos()
