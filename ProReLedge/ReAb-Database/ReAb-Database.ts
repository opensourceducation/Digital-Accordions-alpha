//////   ESTE MODULO GUARDA LA BASE DE DATOS ReAb DEL USUARIO PARA EXPORTARSE Y USARSE EN LEARNING PRORELEDGE
/////    LA IMPORTACION DEBE DE SER CAPAZ DE FUNCIONAR SIN IMPORTAR SI SE TRATA DE OBJETOS DE JAVASCRIPT, JSON, MONGO DB, SQL O CUALQUIER BASE DE DATOS USADA POR EL DESARROLLADOR PARA EL PROYECTO




/// Los parametros con " * " carecen actualmente de un standard de escritura bién definido
/// Los parametros con " ** " probablemente cambien o se eliminen en versiones posteriores

/// ReAb v0.0.1

export let ReAbJSON1 =

{
  "processes " : [
    {
      "process1" : {
        "question " : [      ///  LAS PREGUNTAS PUEDEN SER 1 PALABRA, UN TEXTO, UNA OPERACIÓN MATEMÁTICA, IMÁGENES, VIDEO, SONIDO O CUALQUIER CANTIDAD DE ELEMENTOS ABSTRACTOS
          null
        ],
        "canvas?" : [        ///  *  GUARDA DATOS ESPACIALES DE COLOCACIÓN DE ELEMENTOS ESPECÍFICOS DE "question"
          null
        ],
        "resources?" : [     ///  AQUI INDICAS EL RECURSO DE IMAGEN, VIDEO, SONIDO, ETC Y EL ARRAY DE QUESTION AL QUE ESTÁ ASIGNADO
          null
        ],
        "answer? " : [      ///  GUARDA LOS ELEMENTOS ABSTRACTOS CON RELACIÓN POSITIVA: 1 PALABRA, UN TEXTO, UN RESULTADO MATEMÁTICO, IMÁGENES, VIDEO, SONIDO, ETC..
          null
        ],
        "wrong?" : [        ///  GUARDA LOS ELEMENTOS ABSTRACTOS CON RELACIÓN NEGATIVA
          null
        ],
        "anScore? " : [      /// AQUI SE GUARDAN LOS PUNTAJES DE INTERIORIZACIÓN DE CADA UNO DE LOS ELEMENTOS DE LA RESPUESTA DE MANERA INDIVIDUAL
          null
        ],
        "interconections? " : {
          "anotations": "ANOTACIONES GUARDADAS EN ESTE PROCESO DEL ReAb",
          "mnemonics": "RELACIONES MNEMOTÉCNICAS QUE GUARDE EL USUARIO",
          "questionAnswer": "ELEMENTOS EN question QUE TAMBIEN PUEDEN FUNGIR COMO ELEMENTOS answer Y VICEVERSA"
        },
        "operations?" : [    ///  *   AQUI SE GUARDA LA DIDACTICA INTERNA espacial/relacional PARA ENSEÑAR AL ReAb A EJECUTAR LA OPERACIÓN MATEMÁTICA
          null
        ],
        "space?" : [      ///  *  AQUÍ SE GUARDAN COORDENADAS Y AREAS DE LA PANTALLA CON FORMAS GEOMETRICAS QUE AL PULSAR O INTERACTUAR DE MANERA CORRECTA, RESUELVE EL ReAb O PASA AL SIGUIENTE PROCESO
          null
        ],
        "globalScore" : 0      /// SE PONDERAN LOS PUNTAJES DE "anScore?" PARA SACAR UN PUNTAJE GLOBAL CORRESPONDIENTE A ESTE PROCESO ESPECIFICO
      }
    }
  ],
  "rank" : {
    "preferenceOfLearning" : 81,      /// EL ORDEN DE PRIORIDAD DE APRENDIZAJE QUE LE DA EL USUARIO
    "turn" : null,            /// TURNO DE EJECUCIÓN DEL ReAb 
    "priority" : null    /// ESTE PARAMETRO SOLO SE ACTIVA CON "AAA" CUANDO EL ReAb HA SIDO CONTESTADO DE MANERA INCORRECTA. "AA" y "A" significa que el ReAb tuvo interacciones positivas luego de la falla.  CUANDO ESTA EN "null" NO SE TOMA EN CUENTA.  De la "Z a la U" indican tiempos prolongados de descanso.
  },
  "info" : {
    "score" : [            /// SE PONDERA EL SCORE DE TODOS LOS PROCESOS PARA SACAR ESTA PUNTUACIÓN
      0
    ],
    "tags?" : [      /// ETIQUETAS QUE GUARDAN INFORMACIÓN DEL ReAb, DE EJECUCION, Y DE LA VERSION PARA FACILITAR O SUGERIR SU ACTUALIZACIÓN
      null
    ],
    "school?" : null,      ///  **  Identificadores académicos en caso de que los haya, como nombre de la institución, escudo, etc..
    "groupIdentifier?" : [      /// GUARDA UN HISTORIAL DE LOS GRUPOS DE ESTUDIO POR LOS QUE HA PASADO EL ReAb.  ALGUNA DE ESTA INFORMACIÓN ENRIQUECE LAS ETIQUETAS ("tags") para el analisis de datos
      null
    ],
    "identificatorOrQr?" : null,     /// GUARDA UN CÓDIGO EN CADA ARRAY QUE IDENTIFICA EL USUARIO CREADOR DEL SISO, LOS USUARIOS QUE HAN MODIFICADO SU CONTENIDO, Y EL ULTIMO USUARIO TENEDOR DEL MISMO
    "internalization?" : null,      /// PUNTAJE GLOBAL REAL OCULTO EN UN CÓDIGO HASH DE "info.score"
    "href?" : null      /// SE USA COMO SEGUNDO FILTRO CORRABORATIVO DEL LADO DEL BACKEND QUE LOS DATOS DE "internalization", "score" E "identificatorOrQr" NO HAYAN SIDO MODIFICADOS
  }
}   ;




//export {ReAbJSON1};

//debugger;




export let ReAbJSON2 =

{
  "processes " : [
    {
      "process1" : {
        "question " : [
          null
        ],
        "canvas?" : [
          null
        ],
        "resources?" : [     
          null
        ],
        "answer? " : [
          null
        ],
        "wrong?" : [
          null
        ],
        "anScore? " : [
          null
        ],
        "interconections? " : {
          "anotations": "",
          "mnemonics": null,
          "questionAnswer": null
        },
        "operations?" : [
          null
        ],
        "space?" : [
          null
        ],
        "globalScore" : 0
      }
    }
  ],
  "rank" : {
    "preferenceOfLearning" : 47,
    "turn" : null,
    "priority" : "AA"
  },
  "info" : {
    "score" : [
      0
    ],
    "tags?" : [
      null
    ],
    "school?" : null,
    "groupIdentifier?" : [
      null
    ],
    "identificatorOrQr?" : null,
    "internalization?" : null,
    "href?" : null
  }
}   ;












export let ReAbJSON3 =

{
  "processes " : [
    {
      "process1" : {
        "question " : [
          null
        ],
        "canvas?" : [
          null
        ],
        "resources?" : [    
          null
        ],
        "answer? " : [
          null
        ],
        "wrong?" : [
          null
        ],
        "anScore? " : [
          null
        ],
        "interconections? " : {
          "anotations": "",
          "mnemonics": null,
          "questionAnswer": null
        },
        "operations?" : [
          null
        ],
        "space?" : [
          null
        ],
        "globalScore" : 0
      }
    }
  ],
  "rank" : {
    "preferenceOfLearning" : 54,
    "turn" : null,
    "priority" : "A"
  },
  "info" : {
    "score" : [
      0
    ],
    "tags?" : [
      null
    ],
    "school?" : null,
    "groupIdentifier?" : [
      null
    ],
    "identificatorOrQr?" : null,
    "internalization?" : null,
    "href?" : null
  }
}   ;









export let ReAbJSON4 =

{
  "processes " : [
    {
      "process1" : {
        "question " : [
          null
        ],
        "canvas?" : [
          null
        ],
        "resources?" : [     
          null
        ],
        "answer? " : [
          null
        ],
        "wrong?" : [
          null
        ],
        "anScore? " : [
          null
        ],
        "interconections? " : {
          "anotations": "",
          "mnemonics": null,
          "questionAnswer": null
        },
        "operations?" : [
          null
        ],
        "space?" : [
          null
        ],
        "globalScore" : 0
      }
    }
  ],
  "rank" : {
    "preferenceOfLearning" : 19,
    "turn" : null,
    "priority" : "AAA"
  },
  "info" : {
    "score" : [
      0
    ],
    "tags?" : [
      null
    ],
    "school?" : null,
    "groupIdentifier?" : [
      null
    ],
    "identificatorOrQr?" : null,
    "internalization?" : null,
    "href?" : null
  }
}   ;











export let ReAbJSON5 =

{
  "processes " : [
    {
      "process1" : {
        "question " : [
          null
        ],
        "canvas?" : [
          null
        ],
        "resources?" : [     
          null
        ],
        "answer? " : [
          null
        ],
        "wrong?" : [
          null
        ],
        "anScore? " : [
          null
        ],
        "interconections? " : {
          "anotations": "",
          "mnemonics": null,
          "questionAnswer": null
        },
        "operations?" : [
          null
        ],
        "space?" : [
          null
        ],
        "globalScore" : 0
      }
    }
  ],
  "rank" : {
    "preferenceOfLearning" : 89,
    "turn" : null,
    "priority" : null
  },
  "info" : {
    "score" : [
      0
    ],
    "tags?" : [
      null
    ],
    "school?" : null,
    "groupIdentifier?" : [
      null
    ],
    "identificatorOrQr?" : null,
    "internalization?" : null,
    "href?" : null
  }
}   ;















export let ReAbJSON6 =

{
  "processes " : [
    {
      "process1" : {
        "question " : [
          null
        ],
        "canvas?" : [
          null
        ],
        "resources?" : [     
          null
        ],
        "answer? " : [
          null
        ],
        "wrong?" : [
          null
        ],
        "anScore? " : [
          null
        ],
        "interconections? " : {
          "anotations": "",
          "mnemonics": null,
          "questionAnswer": null
        },
        "operations?" : [
          null
        ],
        "space?" : [
          null
        ],
        "globalScore" : 0
      }
    }
  ],
  "rank" : {
    "preferenceOfLearning" : 92,
    "turn" : null,
    "priority" : null
  },
  "info" : {
    "score" : [
      0
    ],
    "tags?" : [
      null
    ],
    "school?" : null,
    "groupIdentifier?" : [
      null
    ],
    "identificatorOrQr?" : null,
    "internalization?" : null,
    "href?" : null
  }
}   ;











let ReAbDatabase  ;  // Método que convierte toda la base de datos ReAb en objetos de javascript y coloca dicha base de datos en un array llamada ReAbCollection










export let ReAbCollection = [ReAbJSON1,ReAbJSON2,ReAbJSON3,ReAbJSON4,ReAbJSON5,ReAbJSON6];

