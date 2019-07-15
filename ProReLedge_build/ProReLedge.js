/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/INDEX.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/INDEX.js":
/*!**********************!*\
  !*** ./src/INDEX.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ProReLedgeLibrary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProReLedgeLibrary */ \"./src/ProReLedgeLibrary.js\");\n\r\n\r\n(function() {\r\n    if (typeof window.ReAb === \"undefined\") window.ReAb = _ProReLedgeLibrary__WEBPACK_IMPORTED_MODULE_0__[\"ReAb\"];\r\n})();\n\n//# sourceURL=webpack:///./src/INDEX.js?");

/***/ }),

/***/ "./src/ProReLedgeLibrary.js":
/*!**********************************!*\
  !*** ./src/ProReLedgeLibrary.js ***!
  \**********************************/
/*! exports provided: ReAb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ReAb\", function() { return ReAb; });\n/* harmony import */ var _createReAbs_createReAbs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createReAbs/createReAbs.js */ \"./src/createReAbs/createReAbs.js\");\n/* harmony import */ var _createReAbs_fastWritingStandardConverter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createReAbs/fastWritingStandardConverter.js */ \"./src/createReAbs/fastWritingStandardConverter.js\");\n/* harmony import */ var _createReAbs_fastArrayStandardConverter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createReAbs/fastArrayStandardConverter.js */ \"./src/createReAbs/fastArrayStandardConverter.js\");\n/* harmony import */ var _createReAbs_fastArrayStandardConverter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_createReAbs_fastArrayStandardConverter_js__WEBPACK_IMPORTED_MODULE_2__);\n//import {} from '';\r\n\r\n\r\n\r\n\r\nconst ReAb = {\r\n\tcreate: (objectOrString) => {\r\n\t\tif(typeof objectOrString === \"object\"){\r\n\t\t\treturn Object(_createReAbs_createReAbs_js__WEBPACK_IMPORTED_MODULE_0__[\"createReAb\"])(objectOrString);\r\n\t\t} \r\n\t\telse if(typeof objectOrString === \"array\" && objectOrString[0] == 1){\r\n\t\t\treturn Object(_createReAbs_fastArrayStandardConverter_js__WEBPACK_IMPORTED_MODULE_2__[\"fastArrayStandardConverter\"])(objectOrString);\r\n\t\t} \r\n\t\telse if(typeof objectOrString === \"array\" && typeof objectOrString[0] === \"object\"){\r\n\t\t\treturn Object(_createReAbs_createReAbs_js__WEBPACK_IMPORTED_MODULE_0__[\"createReAb\"])(objectOrString);\r\n\t\t} \r\n\t\telse if(typeof objectOrString === \"string\"){\r\n\t\t\treturn Object(_createReAbs_fastWritingStandardConverter_js__WEBPACK_IMPORTED_MODULE_1__[\"fastWritingStandardConverter\"])(objectOrString);\r\n\t\t} \r\n\t\telse {\r\n\t\t\treturn console.error('The argument can be only a \"string\" or an \"object\"');\r\n\t\t}\r\n\t}\r\n} \n\n//# sourceURL=webpack:///./src/ProReLedgeLibrary.js?");

/***/ }),

/***/ "./src/createReAbs/createReAbs.js":
/*!****************************************!*\
  !*** ./src/createReAbs/createReAbs.js ***!
  \****************************************/
/*! exports provided: createReAb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createReAb\", function() { return createReAb; });\n/* harmony import */ var _typeValidator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeValidator.js */ \"./src/createReAbs/typeValidator.js\");\n\r\n\r\nconst createReAb = (objectOrString) => {\r\n\r\n\tlet ReAbQuestions = objectOrString.pregunta ? objectOrString.pregunta : objectOrString.preguntas ? objectOrString.preguntas : objectOrString.question ? objectOrString.question : objectOrString[\"question?\"] ? objectOrString[\"question?\"] : objectOrString.questions ? objectOrString.questions : objectOrString.quest ? objectOrString.quest : null;\r\n\tlet ReAbCanvas = objectOrString.canvas ? objectOrString.canvas : null ;\r\n\tlet ReAbAnswers = objectOrString.respuesta ? objectOrString.respuesta : objectOrString.respuestas ? objectOrString.respuestas : objectOrString.answer ? objectOrString.answer : objectOrString.answers ? objectOrString.answers : null;\r\n\tlet ReAbWrongAnswers = objectOrString.preguntaIncorrecta ? objectOrString.preguntaIncorrecta : objectOrString.preguntasIncorrectas ? objectOrString.preguntasIncorrectas : objectOrString.wrongAnswer ? objectOrString.wrongAnswer : objectOrString.wrongAnswers ? objectOrString.wrongAnswers : null;\r\n\tlet ReAbOperations = objectOrString.operations ? objectOrString.operations : null;\r\n\tlet ReAbSpace = objectOrString.space ? objectOrString.space : null;\r\n\r\n\tlet ReAblicense = objectOrString.license ? objectOrString.license : objectOrString.licencia ? objectOrString.licencia : \"MIT\";\r\n\tlet ReAbType = objectOrString.type ? objectOrString.type : objectOrString.types ? objectOrString.types : objectOrString.tipo ? objectOrString.tipo : objectOrString.tipos ? objectOrString.tipos : null;\r\n\tlet ReAbTags = objectOrString.tags ? objectOrString.tags : objectOrString.tag ? objectOrString.tag : objectOrString.etiqueta ? objectOrString.etiqueta : objectOrString.etiquetas ? objectOrString.etiquetas : null;\r\n\tlet ReAbSchool = objectOrString.school ? objectOrString.school : null;\r\n\tlet ReabIdentificatorOrQr = objectOrString.identificatorOrQr ? objectOrString.identificatorOrQr : null;\r\n\tlet ReAbGroupIdentifier = objectOrString.groupIdentifier ? objectOrString.groupIdentifier: null;\r\n\r\n\tlet ReAbAnotations = objectOrString.anotations ? objectOrString.anotations : objectOrString.anotation ? objectOrString.anotation : objectOrString.anotacion ? objectOrString.anotacion :  objectOrString.anotaciones ? objectOrString.anotaciones : null;\r\n\tlet ReAbMnemonics = objectOrString.mnemonics ? objectOrString.mnemonics : null;\r\n\tlet ReAbQuestionAnswer = objectOrString.questionAnswer ? objectOrString.questionAnswer : objectOrString.questAnswer ? objectOrString.questAnswer : objectOrString.questAns ? objectOrString.questAns : null;    \r\n\tlet ReAbQuestOutResources = objectOrString.questOutResources ? objectOrString.questOutResources : null;\r\n\tlet ReAbReaction = objectOrString.reaction ? objectOrString.reaction : null;\r\n\tlet ReAbProcessReactionMap = objectOrString.processReactionMap ? objectOrString.processReactionMap : null;\r\n\r\n\tlet tagsOfReAb = Object(_typeValidator_js__WEBPACK_IMPORTED_MODULE_0__[\"typeValidator\"])(ReAbType,ReAbTags);\r\n\r\n\treturn ReAbCreator(ReAbQuestions,ReAbCanvas,ReAbAnswers,ReAbWrongAnswers,ReAbOperations,ReAbSpace,tagsOfReAb,ReAbSchool,ReabIdentificatorOrQr,ReAbGroupIdentifier,ReAbAnotations,ReAbMnemonics,ReAbQuestionAnswer,ReAbQuestOutResources,ReAbReaction,ReAbProcessReactionMap,ReAblicense);\r\n}\r\n\r\n\r\n\r\n\r\nconst ReAbCreator = (ReAbQuestions,ReAbCanvas,ReAbAnswers,ReAbWrongAnswers,ReAbOperations,ReAbSpace,tagsOfReAb,ReAbSchool,ReabIdentificatorOrQr,ReAbGroupIdentifier,ReAbAnotations,ReAbMnemonics,ReAbQuestionAnswer,ReAbQuestOutResources,ReAbReaction,ReAbProcessReactionMap, ReAblicense) => {\r\n\r\n\treturn {\r\n\t  \"process\" : [\r\n\t\t{ \r\n\t\t  \"processId\" : [              \r\n\t\t\t1\r\n\t\t  ],\r\n\t\t  \"question?\" : [      \r\n\t\t\tReAbQuestions\r\n\t\t  ],\r\n\t\t  \"canvas?\" : [       \r\n\t\t\tReAbCanvas\r\n\t\t  ],\r\n\t\t  \"answer\" : [       \r\n\t\t\tReAbAnswers\r\n\t\t  ],\r\n\t\t  \"wrong?\" : [        \r\n\t\t\tReAbWrongAnswers\r\n\t\t  ],\r\n\t\t  \"anScore\" : [        \r\n\t\t\t0,0\r\n\t\t  ],\r\n\t\t  \"interconections?\" : {\r\n\t\t\t\"anotations\": [ReAbAnotations],\r\n\t\t\t\"mnemonics\": [ReAbMnemonics],\r\n\t\t\t\"questionAnswer\": [ReAbQuestionAnswer],\r\n\t\t\t\"questAuxResources\": [ReAbQuestOutResources],    /// Recursos complementarios a la presentación de la pregunta  //  RUTA(S) DE IMAGEN, VIDEO, SONIDO, ETC Y EL ARRAY DE QUESTION AL QUE ESTÁ ASIGNADO\r\n\t\t\t\"reaction\": [ReAbReaction],\r\n\t\t\t\"processReactionMap\": [ReAbProcessReactionMap]   //// Programas rutas entre los elementos answer activados y bifurcaciones específicas \"branch\" en los siguientes procesos  // la ruta destino es la indicada despues de  \" :: \"\r\n\t\t  },\r\n\t\t  \"operations?\" : [    ///  *   AQUI SE GUARDA LA DIDACTICA INTERNA espacial/relacional PARA ENSEÑAR AL ReAb A EJECUTAR LA OPERACIÓN MATEMÁTICA\r\n\t\t\tReAbOperations\r\n\t\t  ],\r\n\t\t  \"space?\" : [      ///  *  AQUÍ SE GUARDAN COORDENADAS Y AREAS DE LA PANTALLA CON FORMAS GEOMETRICAS QUE AL PULSAR O INTERACTUAR DE MANERA CORRECTA, RESUELVE EL ReAb O PASA AL SIGUIENTE PROCESO\r\n\t\t\tReAbSpace\r\n\t\t  ],\r\n\t\t  \"branch?\" : [    /// La ramificación de objetos subprocesos en caso de que los haya, son guardados aquí\r\n\t\t\tnull\r\n\t\t  ]\r\n\t\t}\r\n\t  ],\r\n\t  \"rank\" : {\r\n\t\t\"preferenceOfLearning\" : 1,      /// EL ORDEN DE PRIORIDAD DE APRENDIZAJE QUE LE DA EL USUARIO\r\n\t\t\"turn\" : 0,            /// TURNO DE EJECUCIÓN DEL ReAb \r\n\t\t\"priority\" : null    /// ESTE PARAMETRO SOLO SE ACTIVA CON \"AAA\" CUANDO EL ReAb HA SIDO CONTESTADO DE MANERA INCORRECTA. \"AA\" y \"A\" significa que el ReAb tuvo interacciones positivas luego de la falla.  CUANDO ESTA EN \"null\" NO SE TOMA EN CUENTA.  De la \"Z a la U\" indican tiempos prolongados de descanso.\r\n\t  },\r\n\t  \"info\" : {\r\n\t\t\"license\": ReAblicense,\r\n\t\t\"score\" : [            /// SE PONDERA EL SCORE DE TODOS LOS PROCESOS PARA SACAR ESTA PUNTUACIÓN\r\n\t\t  0\r\n\t\t],\r\n\t\t\"tags\" :              /// ETIQUETAS QUE GUARDAN INFORMACIÓN DEL ReAb, DE EJECUCION, Y DE LA VERSION PARA FACILITAR O SUGERIR SU ACTUALIZACIÓN\r\n\t\t  tagsOfReAb,\r\n\t\t\"school?\" : ReAbSchool,      ///  ***  Identificadores académicos en caso de que los haya, como nombre de la institución, escudo, etc..\r\n\t\t\"groupIdentifier?\" : [      /// GUARDA UN HISTORIAL DE LOS GRUPOS DE ESTUDIO POR LOS QUE HA PASADO EL ReAb.  ALGUNA DE ESTA INFORMACIÓN ENRIQUECE LAS ETIQUETAS (\"tags\") para el analisis de datos\r\n\t\t  ReAbGroupIdentifier\r\n\t\t],\r\n\t\t\"identificatorOrQr?\" : ReabIdentificatorOrQr,     /// GUARDA UN CÓDIGO EN CADA ARRAY QUE IDENTIFICA EL USUARIO CREADOR DEL SISO, LOS USUARIOS QUE HAN MODIFICADO SU CONTENIDO, Y EL ULTIMO USUARIO TENEDOR DEL MISMO\r\n\t\t\"internalization?\" : null,      /// PUNTAJE GLOBAL REAL OCULTO EN UN CÓDIGO HASH DE \"info.score\"\r\n\t\t\"href?\" : null      /// SE USA COMO SEGUNDO FILTRO CORRABORATIVO DEL LADO DEL BACKEND QUE LOS DATOS DE \"internalization\", \"score\" E \"identificatorOrQr\" \r\n\t  }\r\n\t}   ;\r\n  }\r\n  \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/createReAbs/createReAbs.js?");

/***/ }),

/***/ "./src/createReAbs/fastArrayStandardConverter.js":
/*!*******************************************************!*\
  !*** ./src/createReAbs/fastArrayStandardConverter.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const fastArrayStandardConverter = () => {}\n\n//# sourceURL=webpack:///./src/createReAbs/fastArrayStandardConverter.js?");

/***/ }),

/***/ "./src/createReAbs/fastWritingStandardConverter.js":
/*!*********************************************************!*\
  !*** ./src/createReAbs/fastWritingStandardConverter.js ***!
  \*********************************************************/
/*! exports provided: fastWritingStandardConverter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fastWritingStandardConverter\", function() { return fastWritingStandardConverter; });\nconst fastWritingStandardConverter = () => {\r\n\r\n}\n\n//# sourceURL=webpack:///./src/createReAbs/fastWritingStandardConverter.js?");

/***/ }),

/***/ "./src/createReAbs/typeValidator.js":
/*!******************************************!*\
  !*** ./src/createReAbs/typeValidator.js ***!
  \******************************************/
/*! exports provided: typeValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"typeValidator\", function() { return typeValidator; });\n// LO DE DETECTAR TAGS Y TYPE EN OTROS OBJETOS DEL ARRAY IMPLEMENTARLO DESPUÉS DE REFACTORIZAR CreateReAbs\r\n/**\r\n * Para validar si el valor de ReAbType se encuentra dentro de los tipos posibles\r\n * Trabaja con los valores de type y tags para retornar el array listo para colocarse en el ReAb.info.tags\r\n * Si no existe type ni null, o algun elemento que ayude a definir el tipo, retorna [\"Concepts\"]\r\n * \r\n * @param {array or string} ReAbType \r\n * @param {array or string} tags \r\n * @return {array}\r\n * \r\n */\r\nconst typeValidator = (ReAbType,tags) => {\r\n    let tagsArray = typeof tags != \"object\" ? [tags] : tags;\r\n\r\n\tif (ReAbType === null && tags === null){\r\n\t\treturn [\"Concepts\"]\r\n\t} else if (ReAbType != null && tags != null){\r\n\t\tlet unionTags = tagsArray.splice(tags.length,0,ReAbType);\r\n\t\treturn foundReAbType(unionTags)  // FUNCION QUE PRIMERO BUSCA EL MATCH EXCACTO Y SI NO LO ENCUENTRA, llama a otra funcion que agrega el tipo por palabras clave\r\n\t} else if(ReAbType === null){\r\n\t\treturn foundReAbType(tagsArray)  // FUNCION QUE PRIMERO BUSCA EL MATCH EXCACTO Y SI NO LO ENCUENTRA, llama a otra funcion que agrega el tipo por palabras clave\r\n\t} else if(tags === null){\r\n        let ReAbTypeArray = typeof ReAbType != \"object\" ? [ReAbType] : ReAbType;\r\n\t\treturn foundReAbType(ReAbTypeArray)  // FUNCION QUE PRIMERO BUSCA EL MATCH EXCACTO Y SI NO LO ENCUENTRA, llama a otra funcion que agrega el tipo por palabras clave\r\n\t} \r\n}\r\n\r\n\r\nconst foundReAbType = (arrayToFound) => {\r\n    let newArrayToFound = [...arrayToFound];\r\n\r\n\tif(typeMatch(arrayToFound,typeCode)){\r\n\t\treturn removeDuplicate([\"Code\", ...newArrayToFound])   \r\n\t}else if(typeMatch(arrayToFound,typeMath)){\r\n\t\treturn removeDuplicate([\"Math\", ...newArrayToFound])    \r\n\t}else{\r\n\t\treturn removeDuplicate([\"Concepts\", ...newArrayToFound])   \r\n\t}\r\n}\r\n\r\n\r\n\r\nconst typeCode = [\"code\",\"codigo\",\"javascript\",\"phyton\",\"git\",\"java\",\"ruby\"];\r\nconst typeMath = [\"math\",\"matematicas\",\"suma\",\"sumas\",\"resta\",\"restas\",\"multiplicacion\",\"division\",\"algebra\"];\r\nconst typeSpace = [\"space\"];\r\n\r\nconst typeMatch = (arrayTags,arrayTypeMatch) => {\r\n\tfor(let KeyWordElement of arrayTypeMatch){\r\n        let ReAbTypeFounded = arrayTags.filter(element => element.toLowerCase().match(new RegExp(KeyWordElement)))\r\n        if (ReAbTypeFounded.length >= 1){\r\n            return true\r\n            break\r\n        }\r\n\t}  \r\n} \r\n\r\n\r\n\r\n/**  REMUEVE EL \"TAG\" SIMILAR AL \"TYPE\" EN CASO DE QUE LO HAYA \r\n * \r\n * @param {array} arrayToReview \r\n * @return {array}\r\n * \r\n * removeDuplicate POR AHORA NO FUNCIONA\r\n * .splice se comporta muy diferente a lo que dice el manual de Mozilla de como se comporta\r\n * \r\n * arrayToReview.splice(1,4)  \r\n * primer argumento \"1\" a partir de donde se quiere borrar\r\n * segundo argumento \"4\" los que se quieren conservar a partir de la posicion donde se borra\r\n */\r\nconst removeDuplicate = (arrayToReview) => {\r\n    for(let i=0; i<= arrayToReview.length; i++){        \r\n        if (arrayToReview[0].toLowerCase == arrayToReview[(i+1)].toLowerCase){   // cambiarlo a .match para que sea case sensitive\r\n            console.log(\"i = \" + i) \r\n            return arrayToReview /*.splice((i+1),1); */\r\n            //break\r\n        }\r\n    }\r\n    return arrayToReview\r\n}\r\n\n\n//# sourceURL=webpack:///./src/createReAbs/typeValidator.js?");

/***/ })

/******/ });