import { typeValidator } from './typeValidator.js';
import { argumentValidator } from './argumentValidator.js';
import { createReAbProcesses } from './processes&branchInstantiator.js';



/**    				createReAb()
 * Función principal que coordina la creación de ReAbs
 * 
 * @param {Object ArrayObject} ReAbPseudoObject 
 * @return {ReAbNestedObject}
 */
export const createReAb = (ReAbPseudoObject) => {

	let objectOrString = argumentValidator(ReAbPseudoObject);

	let ReAblicense = objectOrString.license ? objectOrString.license : objectOrString.licencia ? objectOrString.licencia : "MIT";
	let ReAbType = objectOrString.type ? objectOrString.type : objectOrString.types ? objectOrString.types : objectOrString.tipo ? objectOrString.tipo : objectOrString.tipos ? objectOrString.tipos : null;
	let ReAbTags = objectOrString.tags ? objectOrString.tags : objectOrString.tag ? objectOrString.tag : objectOrString.etiqueta ? objectOrString.etiqueta : objectOrString.etiquetas ? objectOrString.etiquetas : null;
	let ReAbSchool = objectOrString.school ? objectOrString.school : null;
	let ReabIdentificatorOrQr = objectOrString.identificatorOrQr ? objectOrString.identificatorOrQr : null;
	let ReAbGroupIdentifier = objectOrString.groupIdentifier ? objectOrString.groupIdentifier: null;

	let tagsOfReAb = typeValidator(ReAbType,ReAbTags);

	let ReAbProcess = createReAbProcesses(objectOrString);   

	return ReAbCreator(ReAbProcess,tagsOfReAb,ReAbSchool,ReabIdentificatorOrQr,ReAbGroupIdentifier,ReAblicense); 
};






/**     			ReAbCreator()
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
	  "process" : ReAbProcess.length <= 1 ? [ReAbProcess] : ReAbProcess,
	  "rank" : {
		"preferenceOfLearning" : 1,      /// EL ORDEN DE PRIORIDAD DE APRENDIZAJE QUE LE DA EL USUARIO
		"turn" : 0,            /// TURNO DE EJECUCIÓN DEL ReAb 
		"priority" : null    /// ESTE PARAMETRO SOLO SE ACTIVA CON "AAA" CUANDO EL ReAb HA SIDO CONTESTADO DE MANERA INCORRECTA. "AA" y "A" significa que el ReAb tuvo interacciones positivas luego de la falla.  CUANDO ESTA EN "null" NO SE TOMA EN CUENTA.  De la "Z a la U" indican tiempos prolongados de descanso.
	  },
	  "info" : {
		"license": ReAblicense,
		"score" : [            /// SE PONDERA EL SCORE DE TODOS LOS PROCESOS PARA SACAR ESTA PUNTUACIÓN
		  0
		],
		"tags" : tagsOfReAb,            /// ETIQUETAS QUE GUARDAN INFORMACIÓN DEL ReAb, DE EJECUCION, Y DE LA VERSION PARA FACILITAR O SUGERIR SU ACTUALIZACIÓN
		"school?" : ReAbSchool,      ///  ***  Identificadores académicos en caso de que los haya, como nombre de la institución, escudo, etc..
		"groupIdentifier?" : ReAbGroupIdentifier,      /// GUARDA UN HISTORIAL DE LOS GRUPOS DE ESTUDIO POR LOS QUE HA PASADO EL ReAb.  ALGUNA DE ESTA INFORMACIÓN ENRIQUECE LAS ETIQUETAS ("tags") para el analisis de datos
		"identificatorOrQr?" : ReabIdentificatorOrQr,     /// GUARDA UN CÓDIGO EN CADA ARRAY QUE IDENTIFICA EL USUARIO CREADOR DEL SISO, LOS USUARIOS QUE HAN MODIFICADO SU CONTENIDO, Y EL ULTIMO USUARIO TENEDOR DEL MISMO
		"internalization?" : null,      /// PUNTAJE GLOBAL REAL OCULTO EN UN CÓDIGO HASH DE "info.score"
		"href?" : null      /// SE USA COMO SEGUNDO FILTRO CORRABORATIVO DEL LADO DEL BACKEND QUE LOS DATOS DE "internalization", "score" E "identificatorOrQr" 
	  }
	};
}