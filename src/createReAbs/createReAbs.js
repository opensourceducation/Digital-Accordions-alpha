import { typeValidator } from "./typeValidator.js";

export const createReAb = (objectOrString) => {

	let ReAbQuestions = objectOrString.pregunta ? objectOrString.pregunta : objectOrString.preguntas ? objectOrString.preguntas : objectOrString.question ? objectOrString.question : objectOrString["question?"] ? objectOrString["question?"] : objectOrString.questions ? objectOrString.questions : objectOrString.quest ? objectOrString.quest : null;
	let ReAbCanvas = objectOrString.canvas ? objectOrString.canvas : null ;
	let ReAbAnswers = objectOrString.respuesta ? objectOrString.respuesta : objectOrString.respuestas ? objectOrString.respuestas : objectOrString.answer ? objectOrString.answer : objectOrString.answers ? objectOrString.answers : null;
	let ReAbWrongAnswers = objectOrString.preguntaIncorrecta ? objectOrString.preguntaIncorrecta : objectOrString.preguntasIncorrectas ? objectOrString.preguntasIncorrectas : objectOrString.wrongAnswer ? objectOrString.wrongAnswer : objectOrString.wrongAnswers ? objectOrString.wrongAnswers : null;
	let ReAbOperations = objectOrString.operations ? objectOrString.operations : null;
	let ReAbSpace = objectOrString.space ? objectOrString.space : null;

	let ReAblicense = objectOrString.license ? objectOrString.license : objectOrString.licencia ? objectOrString.licencia : "MIT";
	let ReAbType = objectOrString.type ? objectOrString.type : objectOrString.types ? objectOrString.types : objectOrString.tipo ? objectOrString.tipo : objectOrString.tipos ? objectOrString.tipos : null;
	let ReAbTags = objectOrString.tags ? objectOrString.tags : objectOrString.tag ? objectOrString.tag : objectOrString.etiqueta ? objectOrString.etiqueta : objectOrString.etiquetas ? objectOrString.etiquetas : null;
	let ReAbSchool = objectOrString.school ? objectOrString.school : null;
	let ReabIdentificatorOrQr = objectOrString.identificatorOrQr ? objectOrString.identificatorOrQr : null;
	let ReAbGroupIdentifier = objectOrString.groupIdentifier ? objectOrString.groupIdentifier: null;

	let ReAbAnotations = objectOrString.anotations ? objectOrString.anotations : objectOrString.anotation ? objectOrString.anotation : objectOrString.anotacion ? objectOrString.anotacion :  objectOrString.anotaciones ? objectOrString.anotaciones : null;
	let ReAbMnemonics = objectOrString.mnemonics ? objectOrString.mnemonics : null;
	let ReAbQuestionAnswer = objectOrString.questionAnswer ? objectOrString.questionAnswer : objectOrString.questAnswer ? objectOrString.questAnswer : objectOrString.questAns ? objectOrString.questAns : null;    
	let ReAbQuestOutResources = objectOrString.questOutResources ? objectOrString.questOutResources : null;
	let ReAbReaction = objectOrString.reaction ? objectOrString.reaction : null;
	let ReAbProcessReactionMap = objectOrString.processReactionMap ? objectOrString.processReactionMap : null;

	let tagsOfReAb = typeValidator(ReAbType,ReAbTags);

	return ReAbCreator(ReAbQuestions,ReAbCanvas,ReAbAnswers,ReAbWrongAnswers,ReAbOperations,ReAbSpace,tagsOfReAb,ReAbSchool,ReabIdentificatorOrQr,ReAbGroupIdentifier,ReAbAnotations,ReAbMnemonics,ReAbQuestionAnswer,ReAbQuestOutResources,ReAbReaction,ReAbProcessReactionMap,ReAblicense);
}




const ReAbCreator = (ReAbQuestions,ReAbCanvas,ReAbAnswers,ReAbWrongAnswers,ReAbOperations,ReAbSpace,tagsOfReAb,ReAbSchool,ReabIdentificatorOrQr,ReAbGroupIdentifier,ReAbAnotations,ReAbMnemonics,ReAbQuestionAnswer,ReAbQuestOutResources,ReAbReaction,ReAbProcessReactionMap, ReAblicense) => {

	return {
	  "process" : [
		{ 
		  "processId" : [              
			1
		  ],
		  "question?" : [      
			ReAbQuestions
		  ],
		  "canvas?" : [       
			ReAbCanvas
		  ],
		  "answer" : [       
			ReAbAnswers
		  ],
		  "wrong?" : [        
			ReAbWrongAnswers
		  ],
		  "anScore" : [        
			0,0
		  ],
		  "interconections?" : {
			"anotations": [ReAbAnotations],
			"mnemonics": [ReAbMnemonics],
			"questionAnswer": [ReAbQuestionAnswer],
			"questAuxResources": [ReAbQuestOutResources],    /// Recursos complementarios a la presentación de la pregunta  //  RUTA(S) DE IMAGEN, VIDEO, SONIDO, ETC Y EL ARRAY DE QUESTION AL QUE ESTÁ ASIGNADO
			"reaction": [ReAbReaction],
			"processReactionMap": [ReAbProcessReactionMap]   //// Programas rutas entre los elementos answer activados y bifurcaciones específicas "branch" en los siguientes procesos  // la ruta destino es la indicada despues de  " :: "
		  },
		  "operations?" : [    ///  *   AQUI SE GUARDA LA DIDACTICA INTERNA espacial/relacional PARA ENSEÑAR AL ReAb A EJECUTAR LA OPERACIÓN MATEMÁTICA
			ReAbOperations
		  ],
		  "space?" : [      ///  *  AQUÍ SE GUARDAN COORDENADAS Y AREAS DE LA PANTALLA CON FORMAS GEOMETRICAS QUE AL PULSAR O INTERACTUAR DE MANERA CORRECTA, RESUELVE EL ReAb O PASA AL SIGUIENTE PROCESO
			ReAbSpace
		  ],
		  "branch?" : [    /// La ramificación de objetos subprocesos en caso de que los haya, son guardados aquí
			null
		  ]
		}
	  ],
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
		"tags" :              /// ETIQUETAS QUE GUARDAN INFORMACIÓN DEL ReAb, DE EJECUCION, Y DE LA VERSION PARA FACILITAR O SUGERIR SU ACTUALIZACIÓN
		  tagsOfReAb,
		"school?" : ReAbSchool,      ///  ***  Identificadores académicos en caso de que los haya, como nombre de la institución, escudo, etc..
		"groupIdentifier?" : [      /// GUARDA UN HISTORIAL DE LOS GRUPOS DE ESTUDIO POR LOS QUE HA PASADO EL ReAb.  ALGUNA DE ESTA INFORMACIÓN ENRIQUECE LAS ETIQUETAS ("tags") para el analisis de datos
		  ReAbGroupIdentifier
		],
		"identificatorOrQr?" : ReabIdentificatorOrQr,     /// GUARDA UN CÓDIGO EN CADA ARRAY QUE IDENTIFICA EL USUARIO CREADOR DEL SISO, LOS USUARIOS QUE HAN MODIFICADO SU CONTENIDO, Y EL ULTIMO USUARIO TENEDOR DEL MISMO
		"internalization?" : null,      /// PUNTAJE GLOBAL REAL OCULTO EN UN CÓDIGO HASH DE "info.score"
		"href?" : null      /// SE USA COMO SEGUNDO FILTRO CORRABORATIVO DEL LADO DEL BACKEND QUE LOS DATOS DE "internalization", "score" E "identificatorOrQr" 
	  }
	}   ;
  }
  









