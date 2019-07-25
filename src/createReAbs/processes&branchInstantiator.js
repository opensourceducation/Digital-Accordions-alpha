/**        1.- createReAbProcesses()
 *             Función princicpal
 * Retorna todos los procesos y bifurcaciones 
 * para colocarlos en el ReAb principal
 * 
 * @param {arrayObject} arrayObject
 * @return {ReAbProcessArrayObject} 
 */
export const createReAbProcesses = arrayObject => arrayObject.map(process => createReAbProcess(process));






/**             2.-  createReAbProcess()
 * Interpreta los datos introducidos por el usuario para 
 * crear los procesos y las bifurcaciones necesarias
 * 
 * @param {*} objectOrString 
 */
const createReAbProcess = (objectOrString) => {
	let ReAbQuestions = objectOrString.pregunta ? objectOrString.pregunta : objectOrString.preguntas ? objectOrString.preguntas : objectOrString.question ? objectOrString.question : objectOrString["question?"] ? objectOrString["question?"] : objectOrString.questions ? objectOrString.questions : objectOrString.quest ? objectOrString.quest : null;
	let ReAbCanvas = objectOrString.canvas ? objectOrString.canvas : null ;
	let ReAbAnswers = objectOrString.respuesta ? objectOrString.respuesta : objectOrString.respuestas ? objectOrString.respuestas : objectOrString.answer ? objectOrString.answer : objectOrString.answers ? objectOrString.answers : null;
	let ReAbWrongAnswers = objectOrString.preguntaIncorrecta ? objectOrString.preguntaIncorrecta : objectOrString.preguntasIncorrectas ? objectOrString.preguntasIncorrectas : objectOrString.wrongAnswer ? objectOrString.wrongAnswer : objectOrString.wrongAnswers ? objectOrString.wrongAnswers : null;
	let ReAbOperations = objectOrString.operations ? objectOrString.operations : null;
	let ReAbSpace = objectOrString.space ? objectOrString.space : null;
	let ReAbResults = objectOrString.result ? objectOrString.result : objectOrString.results ? objectOrString.results : objectOrString.resultado ? objectOrString.resultado : objectOrString.resultados ? objectOrString.resultados : null;

	let ReAbAnotations = objectOrString.anotations ? objectOrString.anotations : objectOrString.anotation ? objectOrString.anotation : objectOrString.anotacion ? objectOrString.anotacion :  objectOrString.anotaciones ? objectOrString.anotaciones : null;
	let ReAbMnemonics = objectOrString.mnemonics ? objectOrString.mnemonics : null;
	let ReAbQuestionAnswer = objectOrString.questionAnswer ? objectOrString.questionAnswer : objectOrString.questAnswer ? objectOrString.questAnswer : objectOrString.questAns ? objectOrString.questAns : null;    
	let ReAbQuestOutResources = objectOrString.questOutResources ? objectOrString.questOutResources : null;
	let ReAbReaction = objectOrString.reaction ? objectOrString.reaction : null;
	let ReAbProcessReactionMap = objectOrString.processReactionMap ? objectOrString.processReactionMap : null;

	let ReAbBranches = objectOrString.branch ? objectOrString.branch : objectOrString.branches ? objectOrString.branches : objectOrString.rama ? objectOrString.rama : objectOrString.ramas ? objectOrString.ramas : objectOrString.ramificacion ? objectOrString.ramificacion : objectOrString.ramificaciones ? objectOrString.ramificaciones : null;

	return ReAbProcessCreator(ReAbQuestions,ReAbCanvas,ReAbAnswers,ReAbWrongAnswers,ReAbResults,ReAbOperations,ReAbSpace,ReAbAnotations,ReAbMnemonics,ReAbQuestionAnswer,ReAbQuestOutResources,ReAbReaction,ReAbProcessReactionMap,ReAbBranches);
}






/**      3.-  ReAbProcessCreator()
 * Función que entrega todos los procesos y 
 * bifurcaciones requeridas
 * 
 * @param {stringOrNumberArray} ReAbQuestions 
 * @param {stringOrNumberArray} ReAbCanvas 
 * @param {stringOrNumberArray} ReAbAnswers 
 * @param {stringOrNumberArray} ReAbWrongAnswers 
 * @param {stringOrNumberArray} ReAbOperations 
 * @param {stringOrNumberArray} ReAbSpace 
 * @param {stringOrNumberArray} ReAbAnotations 
 * @param {stringOrNumberArray} ReAbMnemonics 
 * @param {stringOrNumberArray} ReAbQuestionAnswer 
 * @param {stringOrNumberArray} ReAbQuestOutResources 
 * @param {stringArray} ReAbReaction 
 * @param {stringArray} ReAbProcessReactionMap 
 * @param {objectArray} ReAbBranches 
 */
const ReAbProcessCreator = (ReAbQuestions,ReAbCanvas,ReAbAnswers,ReAbWrongAnswers,ReAbResults,ReAbOperations,ReAbSpace,ReAbAnotations,ReAbMnemonics,ReAbQuestionAnswer,ReAbQuestOutResources,ReAbReaction,ReAbProcessReactionMap,ReAbBranches) =>{
	return { 
		"processId" : [              
		  1
		],
		"question?" : ReAbQuestions,
		"canvas?" : ReAbCanvas,
		"answer" : ReAbAnswers,
		"wrong?" : ReAbWrongAnswers,
		"results": ReAbResults,
		"anScore" : [        
		  0,0
		],
		"interconections?" : {
		  "anotations": ReAbAnotations,
		  "mnemonics": ReAbMnemonics,
		  "questionAnswer": ReAbQuestionAnswer,      /// ELEMENTOS QUE AL AZAR PUEDEN FUNGIR COMO PREGUNTA O COMO RESPUESTA
		  "questAuxResources": ReAbQuestOutResources,    /// Recursos complementarios a la presentación de la pregunta  //  RUTA(S) DE IMAGEN, VIDEO, SONIDO, ETC Y EL ARRAY DE QUESTION AL QUE ESTÁ ASIGNADO
		  "reaction": ReAbReaction,
		  "processReactionMap": ReAbProcessReactionMap   //// Programas rutas entre los elementos answer activados y bifurcaciones específicas "branch" en los siguientes procesos  // la ruta destino es la indicada despues de  " :: "
		},
		"operations?" : ReAbOperations,    ///  *   AQUI SE GUARDA LA DIDACTICA INTERNA espacial/relacional PARA ENSEÑAR AL ReAb A EJECUTAR LA OPERACIÓN MATEMÁTICA
		"space?" : ReAbSpace,      ///  *  AQUÍ SE GUARDAN COORDENADAS Y AREAS DE LA PANTALLA CON FORMAS GEOMETRICAS QUE AL PULSAR O INTERACTUAR DE MANERA CORRECTA, RESUELVE EL ReAb O PASA AL SIGUIENTE PROCESO
		"branch?" : ReAbBranches ? createReAbProcesses(ReAbBranches) : null   /// La ramificación de objetos subprocesos en caso de que los haya, son guardados aquí
	  } 
} 
