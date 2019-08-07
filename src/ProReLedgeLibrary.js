import {createReAbs} from './createReAbs/__CreateReAbs.js';
import {ReAbSelect} from './select/__ReAbSelect.js';

/**  ReAb.create()
 * 
 * @return {ReAbCollectionObjectArray} 
 * 
 * solo certificará que los argumentos sean validos y retornara console.error si no
 * La redirección de los procesos se hará en createReAb() o en una función que convierte el
 * parametro sin importar que sea, y retorna siempre un array con 1 o más objetos dentro para
 * manejar el resultado en ReAb.create()
 * 
 */
export const ReAb = {  
	create: (collection,positionInCollection,objectOrString) => {
		if(Array.isArray(collection) && typeof positionInCollection == "string" || Array.isArray(collection) && typeof positionInCollection == "number"){
			
			// newReAbs debe devolver siempre un array
			const newReAbs = createReAbs(objectOrString);
			var collectionCopy = JSON.parse(JSON.stringify(collection));
			
			// esto calibra el valor de positionInCollection para evitar errores
			var positionInCollectionArgument = positionInCollection == "first" ? 0 : 
				positionInCollection == "last" ? collection.length : 
				typeof positionInCollection == "number" && positionInCollection <= collection.length ? positionInCollection :
				typeof positionInCollection == "number" && positionInCollection > collection.length ? collection.length : 0;
				
			for(var i=0; i<=newReAbs.length; i++){				
				collectionCopy.splice(positionInCollectionArgument,0,newReAbs[i]);
				
				if(i == (newReAbs.length-1)){					
					collectionCopy.map((ReAb,index)=>{return ReAb.rank.preferenceOfLearning = (index+1)})
					return collectionCopy; 
				}
			} 

		} else {
			throw console.error('The first argument can be only a "array" and the second argument can be "string" or a "number" for more information visit https://opensourceducation.github.io/ProReLedge/docs');
		}    
	},
	select: (collection,searchParameters) => {
		collection.map((ReAb,index)=>{return ReAb.rank.preferenceOfLearning = (index+1)})
		return ReAbSelect(collection,searchParameters);
	},
	score: () => {},
	share: () => {},
	convertTo: () => {}
}; 











