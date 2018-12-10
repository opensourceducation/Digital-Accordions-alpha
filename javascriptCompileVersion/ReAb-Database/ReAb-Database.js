//////   ESTE MODULO GUARDA LA BASE DE DATOS ReAb DEL USUARIO PARA EXPORTARSE Y USARSE EN LEARNING PRORELEDGE
/////    LA IMPORTACION DEBE DE SER CAPAZ DE FUNCIONAR SIN IMPORTAR SI SE TRATA DE OBJETOS DE JAVASCRIPT, JSON, MONGO DB, SQL O CUALQUIER BASE DE DATOS USADA POR EL DESARROLLADOR PARA EL PROYECTO
(function (deps, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(deps, factory);
    }
})(["require", "exports"], function (require, exports) {
    /// Los parametros con " * " carecen actualmente de un standard de escritura bién definido
    /// Los parametros con " *** " probablemente cambien o se eliminen en versiones posteriores
    /// ReAb v0.0.2
    exports.ReAbJSON1 = {
        "processes ": [
            {
                "process1": {
                    "question? ": [
                        null
                    ],
                    "canvas?": [
                        null
                    ],
                    "resources?": [
                        null
                    ],
                    "answer": [
                        null
                    ],
                    "wrong?": [
                        null
                    ],
                    "anScore?": [
                        null
                    ],
                    "interconections?": {
                        "anotations": "ANOTACIONES GUARDADAS EN ESTE PROCESO DEL ReAb",
                        "mnemonics": "RELACIONES MNEMOTÉCNICAS QUE GUARDE EL USUARIO",
                        "questionAnswer": "ELEMENTOS EN question QUE TAMBIEN PUEDEN FUNGIR COMO ELEMENTOS answer Y VICEVERSA",
                        "reaction": " * Aquí se colocan elementos y/o programan reacciones al activar los elementos de answer o wrong, a nivel general o particular"
                    },
                    "operations?": [
                        null
                    ],
                    "space?": [
                        null
                    ],
                    "globalScore": 0 /// SE PONDERAN LOS PUNTAJES DE "anScore?" PARA SACAR UN PUNTAJE GLOBAL CORRESPONDIENTE A ESTE PROCESO ESPECIFICO
                }
            }
        ],
        "rank": {
            "preferenceOfLearning": 81,
            "turn": null,
            "priority": null /// ESTE PARAMETRO SOLO SE ACTIVA CON "AAA" CUANDO EL ReAb HA SIDO CONTESTADO DE MANERA INCORRECTA. "AA" y "A" significa que el ReAb tuvo interacciones positivas luego de la falla.  CUANDO ESTA EN "null" NO SE TOMA EN CUENTA.  De la "Z a la U" indican tiempos prolongados de descanso.
        },
        "info": {
            "score": [
                0
            ],
            "tags?": [
                null
            ],
            "school?": null,
            "groupIdentifier?": [
                null
            ],
            "identificatorOrQr?": null,
            "internalization?": null,
            "href?": null /// SE USA COMO SEGUNDO FILTRO CORRABORATIVO DEL LADO DEL BACKEND QUE LOS DATOS DE "internalization", "score" E "identificatorOrQr" NO HAYAN SIDO MODIFICADOS
        }
    };
    exports.ReAbJSON2 = {
        "processes ": [
            {
                "process1": {
                    "question? ": [
                        null
                    ],
                    "canvas?": [
                        null
                    ],
                    "resources?": [
                        null
                    ],
                    "answer": [
                        null
                    ],
                    "wrong?": [
                        null
                    ],
                    "anScore?": [
                        null
                    ],
                    "interconections?": {
                        "anotations": "",
                        "mnemonics": null,
                        "questionAnswer": null,
                        "reaction": null
                    },
                    "operations?": [
                        null
                    ],
                    "space?": [
                        null
                    ],
                    "globalScore": 0
                }
            }
        ],
        "rank": {
            "preferenceOfLearning": 47,
            "turn": null,
            "priority": "AA"
        },
        "info": {
            "score": [
                0
            ],
            "tags?": [
                null
            ],
            "school?": null,
            "groupIdentifier?": [
                null
            ],
            "identificatorOrQr?": null,
            "internalization?": null,
            "href?": null
        }
    };
    exports.ReAbJSON3 = {
        "processes ": [
            {
                "process1": {
                    "question? ": [
                        null
                    ],
                    "canvas?": [
                        null
                    ],
                    "resources?": [
                        null
                    ],
                    "answer": [
                        null
                    ],
                    "wrong?": [
                        null
                    ],
                    "anScore?": [
                        null
                    ],
                    "interconections?": {
                        "anotations": "",
                        "mnemonics": null,
                        "questionAnswer": null,
                        "reaction": null
                    },
                    "operations?": [
                        null
                    ],
                    "space?": [
                        null
                    ],
                    "globalScore": 0
                }
            }
        ],
        "rank": {
            "preferenceOfLearning": 54,
            "turn": null,
            "priority": "A"
        },
        "info": {
            "score": [
                0
            ],
            "tags?": [
                null
            ],
            "school?": null,
            "groupIdentifier?": [
                null
            ],
            "identificatorOrQr?": null,
            "internalization?": null,
            "href?": null
        }
    };
    exports.ReAbJSON4 = {
        "processes ": [
            {
                "process1": {
                    "question?": [
                        null
                    ],
                    "canvas?": [
                        null
                    ],
                    "resources?": [
                        null
                    ],
                    "answer": [
                        null
                    ],
                    "wrong?": [
                        null
                    ],
                    "anScore?": [
                        null
                    ],
                    "interconections?": {
                        "anotations": "",
                        "mnemonics": null,
                        "questionAnswer": null,
                        "reaction": null
                    },
                    "operations?": [
                        null
                    ],
                    "space?": [
                        null
                    ],
                    "globalScore": 0
                }
            }
        ],
        "rank": {
            "preferenceOfLearning": 19,
            "turn": null,
            "priority": "AAA"
        },
        "info": {
            "score": [
                0
            ],
            "tags?": [
                null
            ],
            "school?": null,
            "groupIdentifier?": [
                null
            ],
            "identificatorOrQr?": null,
            "internalization?": null,
            "href?": null
        }
    };
    exports.ReAbJSON5 = {
        "processes ": [
            {
                "process1": {
                    "question?": [
                        null
                    ],
                    "canvas?": [
                        null
                    ],
                    "resources?": [
                        null
                    ],
                    "answer": [
                        null
                    ],
                    "wrong?": [
                        null
                    ],
                    "anScore?": [
                        null
                    ],
                    "interconections?": {
                        "anotations": "",
                        "mnemonics": null,
                        "questionAnswer": null,
                        "reaction": null
                    },
                    "operations?": [
                        null
                    ],
                    "space?": [
                        null
                    ],
                    "globalScore": 0
                }
            }
        ],
        "rank": {
            "preferenceOfLearning": 89,
            "turn": null,
            "priority": null
        },
        "info": {
            "score": [
                0
            ],
            "tags?": [
                null
            ],
            "school?": null,
            "groupIdentifier?": [
                null
            ],
            "identificatorOrQr?": null,
            "internalization?": null,
            "href?": null
        }
    };
    exports.ReAbJSON6 = {
        "processes ": [
            {
                "process1": {
                    "question?": [
                        null
                    ],
                    "canvas?": [
                        null
                    ],
                    "resources?": [
                        null
                    ],
                    "answer": [
                        null
                    ],
                    "wrong?": [
                        null
                    ],
                    "anScore?": [
                        null
                    ],
                    "interconections?": {
                        "anotations": "",
                        "mnemonics": null,
                        "questionAnswer": null,
                        "reaction": null
                    },
                    "operations?": [
                        null
                    ],
                    "space?": [
                        null
                    ],
                    "globalScore": 0
                }
            }
        ],
        "rank": {
            "preferenceOfLearning": 92,
            "turn": null,
            "priority": null
        },
        "info": {
            "score": [
                0
            ],
            "tags?": [
                null
            ],
            "school?": null,
            "groupIdentifier?": [
                null
            ],
            "identificatorOrQr?": null,
            "internalization?": null,
            "href?": null
        }
    };
    var ReAbDatabase; // Método que convierte toda la base de datos ReAb en objetos de javascript y coloca dicha base de datos en un array llamada ReAbCollection
    exports.ReAbCollection = [exports.ReAbJSON1, exports.ReAbJSON2, exports.ReAbJSON3, exports.ReAbJSON4, exports.ReAbJSON5, exports.ReAbJSON6];
    //////////////////////////////////////////////////////////////////////////////////////
    //
    //                             ReAb CREATOR
    //////////////////////////////////////////////////////////////////////////////////////
    /*
        MÉTODO DE ESCRITURA RÁPIDO PRÓXIMO A IMPLEMENTAR !
    
        Falta la creación de las funciones constructoras que convierten
        lo escrito aquí en la colección de acordeones personal
    */
    var process;
    var p;
    var P;
    /// FORMAS DE ESCRIBIR EL ACORDEÓN (ReAb)
    //  Escribes el parametro a llenar seguido de un - pegado al parametro            EJEMPLOS:  question-    wrong-    answer-    process-   tags-      reaction- 
    //  También puedes escribir el parametro con su inicial en minuscula o mayuscula  EJEMPLOS:     q-          w-        A-         -P        t-            R-
    // EL NUMERO AL PRINCIPIO DEL ARRAY ES EL "preferenceOfLearning" del ReAb
    //  Ningún ReAb de tu colección puede tener el mismo "preferenceOfLearning"
    // Todos los parámetros escritos en string entre cada indicación de process, pertenecen a dicho proceso
    //  Los numeros siguientes del numero de proceso principal, son las ramificaciones de subprocesos
    var CantidadDeReAbs = 9;
    var CrearReAb1 = [1, process - 1 - 1, "answer-git branch respaldo", "question- crea una rama nueva llamada respaldo", process - 2, "question-posicionate en esa rama", "answer-git checkout respaldo"];
    var CrearReAb2 = [4, process - 1, "answer-  git branch respaldo", "question- crea una rama nueva llamada respaldo", process - 2, "question- posicionate en esa rama", "answer- git checkout respaldo"];
    var CrearReAb4 = [2, process - 1, "answer- git branch respaldo", "question- crea una rama nueva llamada respaldo", process - 2, "question-   posicionate en esa rama", "answer-git checkout respaldo"];
    var CrearReAb5 = [3, process - 1, "a-git branch respaldo", "q- crea una rama nueva llamada respaldo", process - 2, "q-posicionate en esa rama", "a-git checkout respaldo"];
    var CrearReAb6 = [9, process - 1, "A- git branch respaldo", "q-crea una rama nueva llamada respaldo", process - 2, "Q-posicionate en esa rama", "answer-git checkout respaldo"];
    var CrearReAb7 = [6, process - 1, "tags- code,console,git-v2.16.2", "answer- git branch respaldo", "question- crea una rama nueva llamada respaldo",
        process - 2, "question-posicionate en esa rama", "answer-git checkout respaldo"];
    var CrearReAb8 = [7, process - 1, "answer- git branch respaldo", "question-crea una nueva rama respaldo ", "tags-code,console,git-v2.16.2",
        "question-posicionate en esa rama", "answer-git checkout respaldo"];
    var CrearReAb9 = [8, process - 1, "A- git branch respaldo", "question- crea una nueva rama respaldo", "t- code,console,git-v2.16.2",
        "question-  posicionate en esa rama", "answer-git checkout respaldo"];
    //   Parametros mínimos que debe de tener un ReAb
    var CrearReAb3 = [5, process - 1, "answer- afirmación"];
});
//# sourceMappingURL=ReAb-Database.js.map