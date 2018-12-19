//////   ESTE MODULO GUARDA LA BASE DE DATOS ReAb DEL USUARIO PARA EXPORTARSE Y USARSE EN LEARNING PRORELEDGE
/////    LA IMPORTACION DEBE DE SER CAPAZ DE FUNCIONAR SIN IMPORTAR SI SE TRATA DE OBJETOS DE JAVASCRIPT, JSON, MONGO DB, SQL O CUALQUIER BASE DE DATOS USADA POR EL DESARROLLADOR PARA EL PROYECTO

/// MÉTODO DE ESCRITURA RÁPIDA  "ReAb CREATOR"  EN LINEA 455 


/// Los parametros con " * " carecen actualmente de un standard de escritura bién definido
/// Los parametros con " *** " probablemente cambien o se eliminen en versiones posteriores

/// ReAb v0.0.3

export let ReAbJSON1 =

{
  "process" : [
    { 
      "processId" : [       /// El primer numero corresponde al proceso, y es el único que avanza incrementalmente, los numeros "string" del array [1] en delante en caso de que los haya, son un identificador del subproceso en caso de bifurcaciones //  (EJM: 2,"1") (EJM: 2,"2") (EJM: 2,"2","1")  //         
        1
      ],
      "question?" : [      ///  LAS PREGUNTAS PUEDEN SER 1 PALABRA, UN TEXTO, UNA OPERACIÓN MATEMÁTICA, IMÁGENES, VIDEO, SONIDO O CUALQUIER CANTIDAD DE ELEMENTOS ABSTRACTOS 
        "Agrega todos tus archivos al working area"
      ],
      "canvas?" : [       ///  *  GUARDA DATOS ESPACIALES DE COLOCACIÓN DE ELEMENTOS ESPECÍFICOS DE "question"
        null
      ],
      "answer" : [        ///  GUARDA LOS ELEMENTOS ABSTRACTOS CON RELACIÓN POSITIVA: 1 PALABRA, UN TEXTO, UN RESULTADO MATEMÁTICO, IMÁGENES, VIDEO, SONIDO, ETC..
        "git add --a"
      ],
      "wrong?" : [        ///  GUARDA LOS ELEMENTOS ABSTRACTOS CON RELACIÓN NEGATIVA
        null
      ],
      "anScore" : [       ///  AQUI SE GUARDAN LOS PUNTAJES DE INTERIORIZACIÓN DE CADA UNO DE LOS ELEMENTOS "answer" DE MANERA INDIVIDUAL // Y EN EL ARRAY [0] SE GUARDA LA PUNTUACIÓN TOTAL DEL PROCESO EN BASE A LA PONDERACION DE LOS DEMÁS ARRAYS  
        0,0
      ],
      "interconections?" : {
        "anotations": ["ANOTACIONES GUARDADAS EN ESTE PROCESO DEL ReAb"],
        "mnemonics": ["RELACIONES MNEMOTÉCNICAS QUE GUARDE EL USUARIO"],
        "questionAnswer": ["ELEMENTOS EN question QUE TAMBIEN PUEDEN FUNGIR COMO ELEMENTOS answer Y VICEVERSA"],
        "questAuxResources": ["../recursos/ruta_de_ejemplo/imagen.jpg", ": a"],    /// Recursos complementarios a la presentación de la pregunta  //  RUTA(S) DE IMAGEN, VIDEO, SONIDO, ETC Y EL ARRAY DE QUESTION AL QUE ESTÁ ASIGNADO
        "reaction": [" * Aquí se colocan elementos y/o programan reacciones al activar los elementos de answer o wrong, a nivel general o particular"],
        "processReactionMap": ["git checkout -B respaldo :: 2,2 "]   //// Programas rutas entre los elementos answer activados y bifurcaciones específicas "branch" en los siguientes procesos  // la ruta destino es la indicada despues de  " :: "
      },
      "operations?" : [    ///  *   AQUI SE GUARDA LA DIDACTICA INTERNA espacial/relacional PARA ENSEÑAR AL ReAb A EJECUTAR LA OPERACIÓN MATEMÁTICA
        null
      ],
      "space?" : [      ///  *  AQUÍ SE GUARDAN COORDENADAS Y AREAS DE LA PANTALLA CON FORMAS GEOMETRICAS QUE AL PULSAR O INTERACTUAR DE MANERA CORRECTA, RESUELVE EL ReAb O PASA AL SIGUIENTE PROCESO
        null
      ],
      "branch?" : [    /// La ramificación de objetos subprocesos en caso de que los haya, son guardados aquí
        null
      ]
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
    "school?" : null,      ///  ***  Identificadores académicos en caso de que los haya, como nombre de la institución, escudo, etc..
    "groupIdentifier?" : [      /// GUARDA UN HISTORIAL DE LOS GRUPOS DE ESTUDIO POR LOS QUE HA PASADO EL ReAb.  ALGUNA DE ESTA INFORMACIÓN ENRIQUECE LAS ETIQUETAS ("tags") para el analisis de datos
      null
    ],
    "identificatorOrQr?" : null,     /// GUARDA UN CÓDIGO EN CADA ARRAY QUE IDENTIFICA EL USUARIO CREADOR DEL SISO, LOS USUARIOS QUE HAN MODIFICADO SU CONTENIDO, Y EL ULTIMO USUARIO TENEDOR DEL MISMO
    "internalization?" : null,      /// PUNTAJE GLOBAL REAL OCULTO EN UN CÓDIGO HASH DE "info.score"
    "href?" : null      /// SE USA COMO SEGUNDO FILTRO CORRABORATIVO DEL LADO DEL BACKEND QUE LOS DATOS DE "internalization", "score" E "identificatorOrQr" NO HAYAN SIDO MODIFICADOS
  }
}   ;









export let ReAbJSON2 =

{
  "process" : [
    { 
      "processId" : [ 
        1                  
      ],
      "question?" : [ 
        "Crea la rama respaldo"
      ],
      "canvas?" : [
        null
      ],
      "answer" : [
        "git branch respaldo", "git checkout -B respaldo", "git checkout -b respaldo" 
      ],
      "wrong?" : [
        null
      ],
      "anScore" : [
        0,0
      ],
      "interconections?" : {
        "anotations": [""],
        "mnemonics": [null],
        "questionAnswer": [null],
        "questAuxResources": [null],
        "reaction": [null],
        "processReactionMap": [null]        
      },
      "operations?" : [
        null
      ],
      "space?" : [
        null
      ],
      "branch?" : [
        null
      ]
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
  "process" : [
    { 
      "processId" : [ 
        1
      ],
      "question?" : [ 
        "Borrar rama respaldo"
      ],
      "canvas?" : [
        null
      ],
      "answer" : [
        "git branch -d respaldo", "git branch -D respaldo"
      ],
      "wrong?" : [
        null
      ],
      "anScore" : [
        0,0
      ],
      "interconections?" : {
        "anotations": [""],
        "mnemonics": [null],
        "questionAnswer": [null],
        "questAuxResources": [null],
        "reaction": [null],
        "processReactionMap": [null]        
      },
      "operations?" : [
        null
      ],
      "space?" : [
        null
      ],
      "branch?" : [
        null
      ]
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
  "process" : [
    { 
      "processId" : [ 
        1
      ],
      "question?" : [ 
        "Copia el repositorio 34tghash"
      ],
      "canvas?" : [
        null
      ],
      "answer" : [
        "git cherry-pick 34tghash"
      ],
      "wrong?" : [
        null
      ],
      "anScore" : [
        0,0
      ],
      "interconections?" : {
        "anotations": [""],
        "mnemonics": [null],
        "questionAnswer": [null],
        "questAuxResources": [null],
        "reaction": [null],
        "processReactionMap": [null]  
      },
      "operations?" : [
        null
      ],
      "space?" : [
        null
      ],
      "branch?" : [
        null
      ]
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
  "process" : [
    { 
      "processId" : [ 
        1
      ],
      "question?" : [ 
        "Sube tu proyecto en la rama master a un servidor remoto"
      ],
      "canvas?" : [
        null
      ],
      "answer" : [
        "git push origin master", "git push -u origin master", "git push -f origin master"
      ],
      "wrong?" : [
        null
      ],
      "anScore" : [
        0,0
      ],
      "interconections?" : {
        "anotations": [""],
        "mnemonics": [null],
        "questionAnswer": [null],
        "questAuxResources": [null],
        "reaction": [null],
        "processReactionMap": [null]  
      },
      "operations?" : [
        null
      ],
      "space?" : [
        null
      ],
      "branch?" : [
        null
      ]
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
  "process" : [
    { 
      "processId" : [ 
        1
      ],
      "question?" : [ 
        null
      ],
      "canvas?" : [
        null
      ],
      "answer" : [
        null
      ],
      "wrong?" : [
        null
      ],
      "anScore" : [
        0,0
      ],
      "interconections?" : {
        "anotations": [""],
        "mnemonics": [null],
        "questionAnswer": [null],
        "questAuxResources": [null],
        "reaction": [null],
        "processReactionMap": [null]  
      },
      "operations?" : [
        null
      ],
      "space?" : [
        null
      ],
      "branch?" : [
        null
      ]
    } 
  ],
  "rank" : {
    "preferenceOfLearning" : 92,
    "turn" : null,
    "priority" : "Z"
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





//////////////////////////////////////////////////////////////////////////////////////
//
//                             ReAb CREATOR
//////////////////////////////////////////////////////////////////////////////////////

/*  
    MÉTODO DE ESCRITURA RÁPIDO PRÓXIMO A IMPLEMENTAR !

    Falta la creación de las funciones constructoras que convierten 
    lo escrito aquí en la colección de acordeones personal  
*/


let process;
let p;
let P;


/// FORMAS DE ESCRIBIR EL ACORDEÓN (ReAb)

//  Escribes el parametro a llenar seguido de un - pegado al parametro            EJEMPLOS:  question-    wrong-    answer-    process-   tags-      reaction- 
//  También puedes escribir el parametro con su inicial en minuscula o mayuscula  EJEMPLOS:     q-          w-        A-         -P        t-            R-

// EL NUMERO AL PRINCIPIO DEL ARRAY ES EL "preferenceOfLearning" del ReAb
//  Ningún ReAb de tu colección puede tener el mismo "preferenceOfLearning"
// Todos los parámetros escritos en string entre cada indicación de process, pertenecen a dicho proceso
//  Los numeros siguientes del numero de proceso principal, son las ramificaciones de subprocesos

  
  let  CantidadDeReAbs = 9;

  let CrearReAb1 = [1, process-1-1 ,"answer-git branch respaldo","question- crea una rama nueva llamada respaldo" ,process-2,"question-posicionate en esa rama", "answer-git checkout respaldo"];

  let CrearReAb2 = [4, process-1,"answer-  git branch respaldo","question- crea una rama nueva llamada respaldo" ,process-2,"question- posicionate en esa rama", "answer- git checkout respaldo"];

  let CrearReAb4 = [2, process-1,"answer- git branch respaldo","question- crea una rama nueva llamada respaldo",process - 2,"question-   posicionate en esa rama", "answer-git checkout respaldo"];

  let CrearReAb5 = [3, process -1,"a-git branch respaldo","q- crea una rama nueva llamada respaldo",process -2,"q-posicionate en esa rama", "a-git checkout respaldo"];

  let CrearReAb6 = [9, process-1,"A- git branch respaldo","q-crea una rama nueva llamada respaldo",process- 2,"Q-posicionate en esa rama", "answer-git checkout respaldo"];

    let CrearReAb7 = [6, process-1,"tags- code,console,git-v2.16.2","answer- git branch respaldo","question- crea una rama nueva llamada respaldo",
                         process-2,"question-posicionate en esa rama", "answer-git checkout respaldo"];


  let CrearReAb8 = [7, process-1,"answer- git branch respaldo","question-crea una nueva rama respaldo ","tags-code,console,git-v2.16.2",
                                                "question-posicionate en esa rama", "answer-git checkout respaldo"];

    let CrearReAb9 = [8, process-1,"A- git branch respaldo","question- crea una nueva rama respaldo", "t- code,console,git-v2.16.2"
                                                 ,"question-  posicionate en esa rama", "answer-git checkout respaldo"];
                                              


//   Parametros mínimos que debe de tener un ReAb
   let CrearReAb3 = [5,process-1,"answer- afirmación"];

  ///   Internamente también debe de contar con anScore 0,0 / score 0 / Y por lo menos un tag de los siguientes: Math, Code, Concepts, Space.