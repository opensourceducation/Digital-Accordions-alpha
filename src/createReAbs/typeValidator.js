// LO DE DETECTAR TAGS Y TYPE EN OTROS OBJETOS DEL ARRAY IMPLEMENTARLO DESPUÉS DE REFACTORIZAR CreateReAbs
/**
 * Para validar si el valor de ReAbType se encuentra dentro de los tipos posibles
 * Trabaja con los valores de type y tags para retornar el array listo para colocarse en el ReAb.info.tags
 * Si no existe type ni null, o algun elemento que ayude a definir el tipo, retorna ["Concepts"]
 * 
 * @param {array or string} ReAbType 
 * @param {array or string} tags 
 * @return {array}
 * 
 */
export const typeValidator = (ReAbType,tags) => {
    let tagsArray = typeof tags != "object" ? [tags] : tags;

	if (ReAbType === null && tags === null){
		return ["Concepts"]
	} else if (ReAbType != null && tags != null){
		let unionTags = tagsArray.splice(tags.length,0,ReAbType);
		return foundReAbType(unionTags)  // FUNCION QUE PRIMERO BUSCA EL MATCH EXCACTO Y SI NO LO ENCUENTRA, llama a otra funcion que agrega el tipo por palabras clave
	} else if(ReAbType === null){
		return foundReAbType(tagsArray)  // FUNCION QUE PRIMERO BUSCA EL MATCH EXCACTO Y SI NO LO ENCUENTRA, llama a otra funcion que agrega el tipo por palabras clave
	} else if(tags === null){
        let ReAbTypeArray = typeof ReAbType != "object" ? [ReAbType] : ReAbType;
		return foundReAbType(ReAbTypeArray)  // FUNCION QUE PRIMERO BUSCA EL MATCH EXCACTO Y SI NO LO ENCUENTRA, llama a otra funcion que agrega el tipo por palabras clave
	} 
}


const foundReAbType = (arrayToFound) => {
    let newArrayToFound = [...arrayToFound];

	if(typeMatch(arrayToFound,typeCode)){
		return removeDuplicate(["Code", ...newArrayToFound])   
	}else if(typeMatch(arrayToFound,typeMath)){
		return removeDuplicate(["Math", ...newArrayToFound])    
	}else{
		return removeDuplicate(["Concepts", ...newArrayToFound])   
	}
}



const typeCode = ["code","codigo","javascript","phyton","git","java","ruby"];
const typeMath = ["math","matematicas","suma","sumas","resta","restas","multiplicacion","division","algebra"];
const typeSpace = ["space"];

const typeMatch = (arrayTags,arrayTypeMatch) => {
	for(let KeyWordElement of arrayTypeMatch){
        let ReAbTypeFounded = arrayTags.filter(element => element.toLowerCase().match(new RegExp(KeyWordElement)))
        if (ReAbTypeFounded.length >= 1){
            return true
            break
        }
	}  
} 



/**  REMUEVE EL "TAG" SIMILAR AL "TYPE" EN CASO DE QUE LO HAYA 
 * 
 * @param {array} arrayToReview 
 * @return {array}
 * 
 * removeDuplicate POR AHORA NO FUNCIONA
 * .splice se comporta muy diferente a lo que dice el manual de Mozilla de como se comporta
 * 
 * arrayToReview.splice(1,4)  
 * primer argumento "1" a partir de donde se quiere borrar
 * segundo argumento "4" los que se quieren conservar a partir de la posicion donde se borra
 */
const removeDuplicate = (arrayToReview) => {
    for(let i=0; i<= arrayToReview.length; i++){        
        if (arrayToReview[0].toLowerCase == arrayToReview[(i+1)].toLowerCase){   // cambiarlo a .match para que sea case sensitive
            console.log("i = " + i) 
            return arrayToReview /*.splice((i+1),1); */
            //break
        }
    }
    return arrayToReview
}
