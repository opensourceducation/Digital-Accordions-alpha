import {createReAb} from './createReAbs.js';
import {fastWritingStandardConverter} from './fastWritingStandardConverter.js';
import {fastArrayStandardConverter} from './fastArrayStandardConverter.js';



/**       1.-         argumentValidator()
 * Convierte el argumento del usuario en un array con objetos 
 * que el método createReAbs acepta como argumento
 * 
 * @param {string array or Object} argumentToValidate 
 * @return{array}
 */
export const argumentValidator = (argumentToValidate) => {
    if(Array.isArray(argumentToValidate) && argumentToValidate[0] == 1){  
        //let PseudoReAbObject = fastArrayStandardConverter(argumentToValidate);
        return console.log("array fast writing"); 
    }
    else if(Array.isArray(argumentToValidate) && typeof argumentToValidate[0] == "object"){
        let argumentToValidateCopy = accomodateKeyArgumentsInArrayZero(argumentToValidate);
        return argumentToValidateCopy;  
    } 
    else if(typeof argumentToValidate === "object" && !Array.isArray(argumentToValidate)){
        return [argumentToValidate];
    } 
    else if(typeof argumentToValidate === "string"){
       // let PseudoReAbObject = fastWritingStandardConverter(argumentToValidate);
        return console.log("string :)"); 
    } 
    else {
        return console.error('The argument can be only a "string" "array" or an "object" for more information visit https://opensourceducation.github.io/ProReLedge/docs');
    }
}





/**     2.-   accomodateKeyArgumentsInArrayZero()
 * Si hay type, tags, license o identificators fuera del 
 * primer objeto del array, este método los pasa al primer objeto.
 * 
 * @param {array with objects colection} arrayArgument "el mismo argumentToValidate que pasa el usuario"
 * @return {array with objects colection}
 */
const accomodateKeyArgumentsInArrayZero = (arrayArgument) => {
    let arrayArgumentCopy = arrayArgument;

    let ReAbTags = arrayArgument[0].tags ? arrayArgument[0].tags : arrayArgument[0].tag ? arrayArgument[0].tag : arrayArgument[0].etiqueta ? arrayArgument[0].etiqueta : arrayArgument[0].etiquetas ? arrayArgument[0].etiquetas : null;
    let ReAbLicense = arrayArgument[0].license ? arrayArgument[0].license : arrayArgument[0].licencia ? arrayArgument[0].licencia : "MIT";
	let ReAbType = arrayArgument[0].type ? arrayArgument[0].type : arrayArgument[0].types ? arrayArgument[0].types : arrayArgument[0].tipo ? arrayArgument[0].tipo : arrayArgument[0].tipos ? arrayArgument[0].tipos : null;
	let ReAbSchool = arrayArgument[0].school ? arrayArgument[0].school : null;
	let ReabIdentificatorOrQr = arrayArgument[0].identificatorOrQr ? arrayArgument[0].identificatorOrQr : null;
    let ReAbGroupIdentifier = arrayArgument[0].groupIdentifier ? arrayArgument[0].groupIdentifier: null;
    let ternaryElements = [ReAbTags,ReAbLicense,ReAbType,ReAbSchool,ReabIdentificatorOrQr,ReAbGroupIdentifier];
    var objectElements = {  
                            tags: ReAbTags == null ? [] : Array.isArray(ReAbTags) ? ReAbTags : [ReAbTags], 
                            license: ReAbLicense == null ? [] : Array.isArray(ReAbLicense) ? ReAbLicense : [ReAbLicense], 
                            type: ReAbType == null ? [] : Array.isArray(ReAbType) ? ReAbType : [ReAbType], 
                            school: ReAbSchool == null ? [] : Array.isArray(ReAbSchool) ? ReAbSchool : [ReAbSchool], 
                            identificatorOrQr: ReabIdentificatorOrQr == null ? [] : Array.isArray(ReabIdentificatorOrQr) ? ReabIdentificatorOrQr : [ReabIdentificatorOrQr], 
                            groupIdentifier: ReAbGroupIdentifier == null ? [] : Array.isArrary(ReAbGroupIdentifier) ? ReAbGroupIdentifier : [ReAbGroupIdentifier]
                        };
    let stringElements = ["tags","license","type","school","identificatorOrQr","groupIdentifier"];

    let diferentNamedForParameters = new Array(6);
    diferentNamedForParameters[0] = ["tags","tag","etiqueta","etiquetas"];
    diferentNamedForParameters[1] = ["license","liscence","lisence","licencia"];
    diferentNamedForParameters[2] = ["type","types","tipo","tipos"];
    diferentNamedForParameters[3] = ["school","escuela","colegio","instituto"];
    diferentNamedForParameters[4] = ["id","Id","identificator","identificatorOrQr"];
    diferentNamedForParameters[5] = ["groupIdentifier","groupId","groups","grupos"];

    for(var i=0; i < ternaryElements.length; i++){
        objectElements[stringElements[i]] = 
        passDispersedElementsToTheArrayZero (arrayArgument,diferentNamedForParameters[i],objectElements[stringElements[i]]);
        arrayArgumentCopy[0][stringElements[i]] = objectElements[stringElements[i]];
        if(arrayArgumentCopy[0][stringElements[i]] == null) { delete arrayArgumentCopy[0][stringElements[i]];}
        if(i == (ternaryElements.length-1)){
            return arrayArgumentCopy;
        }
    }        
}






/**      3.-  passDispersedElementsToTheArrayZero()
 * Esta funcion itera sobre cada uno de los argumentos de la colección para juntarlos,
 * y entregarlos a la función "accomodateKeyArgumentsInArrayZero"
 * 
 * @param {array with objects colection} objectsArray 
 * @param {bidimensional array} diferentNamedFor 
 * @param {array} outputArray 
 * @return {array}
 */ 
const passDispersedElementsToTheArrayZero = (objectsArray,diferentNamedFor,outputArray) => {

var newOutputArray = outputArray;
var elementIterator;
    
    for(let i = 1; i < objectsArray.length; i++){
        elementIterator = objectsArray[i][diferentNamedFor[0]] ? objectsArray[i][diferentNamedFor[0]] : 
                          objectsArray[i][diferentNamedFor[1]] ? objectsArray[i][diferentNamedFor[1]] :
                          objectsArray[i][diferentNamedFor[2]] ? objectsArray[i][diferentNamedFor[2]] :
                          objectsArray[i][diferentNamedFor[3]] ? objectsArray[i][diferentNamedFor[3]] :
                          null;

        if(elementIterator != null){
            newOutputArray.push(elementIterator);
        }

        if(i == (objectsArray.length-1)){
            if(newOutputArray.length == 0) { newOutputArray = null; }
            return newOutputArray;
        } 
    }   
}