import {createReAb} from './createReAbs/createReAbs.js';

/**
 *  
 * @return {ReAbNestedObject} si solo se paso el primer argumento
 * @return {ReAbCollectionArray} Si se pasó un segundo argumento de salida o destino
 * 
 * 
 * solo certificará que los argumentos sean validos y retornara console.error si no
 * La redirección de los procesos se hará en createReAb() o en una función que convierte el
 * parametro sin importar que sea, y retorna siempre un array con 1 o más objetos dentro para
 * manejar el resultado en ReAb.create()
 * 
 */
export const ReAb = {  
	create: (objectOrString,ArrayCollectionOutput) => {
		return createReAb(objectOrString);   
	}
}; 