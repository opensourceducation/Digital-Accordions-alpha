import { typeValidator } from './typeValidator.js';
import { argumentValidator } from './argumentValidator.js';
import { createReAbProcesses } from './processes&branchInstantiator.js';
import { branchNamer } from './branchNamer.js';



//////////////////      MAIN      ////////////////////
/** 				createReAbs()                 
 * Función principal que coordina la creación de ReAbs
 * @param {string,object or arrayObjects} contentToTurnIntoReAbs 
 */
export const createReAbs = (contentToTurnIntoReAbs) => {
	
	let ReAbPseudoObject = argumentValidator(contentToTurnIntoReAbs);
	return ReAbPseudoObject.map(element => createReAb(element));  
}








/**    					2.-	createReAb()
 * Función que crea uno a uno los ReAbs a partir de un objeto más sencillo
 * 
 * @param {Object ArrayObject} ReAbPseudoObject 
 * @return {ReAbNestedObject}
 */
const createReAb = (ReAbPseudoObject) => {

	const ReAblicense = ReAbPseudoObject[0].license ? ReAbPseudoObject[0].license : ReAbPseudoObject[0].licencia ? ReAbPseudoObject[0].licencia : "MIT";
	const ReAbType = ReAbPseudoObject[0].type ? ReAbPseudoObject[0].type : ReAbPseudoObject[0].types ? ReAbPseudoObject[0].types : ReAbPseudoObject[0].tipo ? ReAbPseudoObject[0].tipo : ReAbPseudoObject[0].tipos ? ReAbPseudoObject[0].tipos : null;
	const ReAbTags = ReAbPseudoObject[0].tags ? ReAbPseudoObject[0].tags : ReAbPseudoObject[0].tag ? ReAbPseudoObject[0].tag : ReAbPseudoObject[0].etiqueta ? ReAbPseudoObject[0].etiqueta : ReAbPseudoObject[0].etiquetas ? ReAbPseudoObject[0].etiquetas : null;
	const ReAbSchool = ReAbPseudoObject[0].school ? ReAbPseudoObject[0].school : ReAbPseudoObject[0]["school?"] ? ReAbPseudoObject[0]["school?"] : null;
	const ReabIdentificatorOrQr = ReAbPseudoObject[0].identificatorOrQr ? ReAbPseudoObject[0].identificatorOrQr : null;
	const ReAbGroupIdentifier = ReAbPseudoObject[0].groupIdentifier ? ReAbPseudoObject[0].groupIdentifier: null;
	
	const tagsOfReAb = typeValidator(ReAbType,ReAbTags);

	const ReAbProcess = createReAbProcesses(ReAbPseudoObject);   
	
	return ReAbCreator(ReAbProcess,tagsOfReAb,ReAbSchool,ReabIdentificatorOrQr,ReAbGroupIdentifier,ReAblicense); 
};






/**     		3.-	ReAbCreator()
 * Retorna el objeto ReAb base sin los procesos ni 
 * bifurcaciones con preguntas y respuestas
 * 
 * @param {ObjectArray} ReAbProcess 
 * @param {Array} tagsOfReAb 
 * @param {Array} ReAbSchool 
 * @param {Array} ReabIdentificatorOrQr 
 * @param {Array} ReAbGroupIdentifier 
 * @param {string} ReAblicense 
 */
const ReAbCreator = (ReAbProcess,tagsOfReAb,ReAbSchool,ReabIdentificatorOrQr,ReAbGroupIdentifier,ReAblicense) => {

	return {
	  "process" : ReAbProcess.map(process => branchNamer(process)),
	  "rank" : {
		"preferenceOfLearning" : 1,      /// EL ORDEN DE PRIORIDAD DE APRENDIZAJE QUE LE DA EL USUARIO
		"turn" : 0,            /// TURNO DE EJECUCIÓN DEL ReAb 
		"priority" : null    /// ESTE PARAMETRO SOLO SE ACTIVA CON "AAA" CUANDO EL ReAb HA SIDO CONTESTADO DE MANERA INCORRECTA. "AA" y "A" significa que el ReAb tuvo interacciones positivas luego de la falla.  CUANDO ESTA EN "null" NO SE TOMA EN CUENTA.  De la "Z a la U" indican tiempos prolongados de descanso.
	  },
	  "info" : {
		"license": ReAblicense,
		"score" :  {    	        
		  interiorization:0,   /// SE PONDERA EL SCORE DE TODOS LOS PROCESOS PARA SACAR ESTA PUNTUACIÓN
		  allBranchesInteriorization:0,  /// SE PONDERA EL SCORE DE TODOS LOS BRANCH DE LOS PROCESOS PARA SACAR ESTA PUNTUACIÓN
		  frequency:0,   /// Se calcula incrementalmente las semanas y periodos trimestrales de uso  ::  decrementa por desuso
		  record:[]    /// historial de 2 meses de uso basado en días
	  	},
		"tags" : tagsOfReAb,            /// ETIQUETAS QUE GUARDAN INFORMACIÓN DEL ReAb, DE EJECUCION, Y DE LA VERSION PARA FACILITAR O SUGERIR SU ACTUALIZACIÓN
		"school?" : ReAbSchool,      ///  ***  Identificadores académicos en caso de que los haya, como nombre de la institución, escudo, etc..
		"groupIdentifier?" : ReAbGroupIdentifier,      /// GUARDA UN HISTORIAL DE LOS GRUPOS DE ESTUDIO POR LOS QUE HA PASADO EL ReAb.  ALGUNA DE ESTA INFORMACIÓN ENRIQUECE LAS ETIQUETAS ("tags") para el analisis de datos
		"identificatorOrQr?" : ReabIdentificatorOrQr,     /// GUARDA UN CÓDIGO EN CADA ARRAY QUE IDENTIFICA EL USUARIO CREADOR DEL SISO, LOS USUARIOS QUE HAN MODIFICADO SU CONTENIDO, Y EL ULTIMO USUARIO TENEDOR DEL MISMO
		"internalization?" : null,      /// PUNTAJE GLOBAL REAL OCULTO EN UN CÓDIGO HASH DE "info.score"
		"href?" : null,      /// SE USA COMO SEGUNDO FILTRO CORRABORATIVO DEL LADO DEL BACKEND QUE LOS DATOS DE "internalization", "score" E "identificatorOrQr" 
		"route" : "1"
	  }
	};
}