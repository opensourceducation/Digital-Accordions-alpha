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

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./src/INDEX.js":
/*!**********************!*\
  !*** ./src/INDEX.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProReLedgeLibrary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProReLedgeLibrary */ "./src/ProReLedgeLibrary.js");


(function () {
  if (typeof window.ReAb === "undefined") window.ReAb = _ProReLedgeLibrary__WEBPACK_IMPORTED_MODULE_0__["ReAb"];
})();

/***/ }),

/***/ "./src/ProReLedgeLibrary.js":
/*!**********************************!*\
  !*** ./src/ProReLedgeLibrary.js ***!
  \**********************************/
/*! exports provided: ReAb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReAb", function() { return ReAb; });
/* harmony import */ var _createReAbs_createReAbs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createReAbs/createReAbs.js */ "./src/createReAbs/createReAbs.js");

/**
 *  
 * @return {ReAbNestedObject} si solo se paso el primer argumento
 * @return {ReAbCollectionArray} Si se pasó un segundo argumento de salida o destino
 * 
 * 
 * solo certificará que los argumentos sean validos y retornara console.error si no
 * La redirección de los procesos se hará en createReAb() o en una función que convierte el
 * parametro sin importar que sea, y retorna siempre un array con 1 o más objetos dentro para
 * manejar el resultado en ReAb.create()
 * 
 */

var ReAb = {
  create: function create(objectOrString, ArrayCollectionOutput) {
    return Object(_createReAbs_createReAbs_js__WEBPACK_IMPORTED_MODULE_0__["createReAb"])(objectOrString);
  }
};

/***/ }),

/***/ "./src/createReAbs/argumentValidator.js":
/*!**********************************************!*\
  !*** ./src/createReAbs/argumentValidator.js ***!
  \**********************************************/
/*! exports provided: argumentValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "argumentValidator", function() { return argumentValidator; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _createReAbs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createReAbs.js */ "./src/createReAbs/createReAbs.js");
/* harmony import */ var _fastWritingStandardConverter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fastWritingStandardConverter.js */ "./src/createReAbs/fastWritingStandardConverter.js");
/* harmony import */ var _fastArrayStandardConverter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fastArrayStandardConverter.js */ "./src/createReAbs/fastArrayStandardConverter.js");
/* harmony import */ var _fastArrayStandardConverter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fastArrayStandardConverter_js__WEBPACK_IMPORTED_MODULE_3__);




/**       1.-         argumentValidator()
 * Convierte el argumento del usuario en un array con objetos 
 * que el método createReAbs acepta como argumento
 * 
 * @param {string array or Object} argumentToValidate 
 * @return{array}
 */

var argumentValidator = function argumentValidator(argumentToValidate) {
  if (Array.isArray(argumentToValidate) && argumentToValidate[0] == 1) {
    //let PseudoReAbObject = fastArrayStandardConverter(argumentToValidate);
    return console.log("array fast writing");
  } else if (Array.isArray(argumentToValidate) && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(argumentToValidate[0]) == "object") {
    var argumentToValidateCopy = accomodateKeyArgumentsInArrayZero(argumentToValidate);
    return argumentToValidateCopy;
  } else if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(argumentToValidate) === "object" && !Array.isArray(argumentToValidate)) {
    return [argumentToValidate];
  } else if (typeof argumentToValidate === "string") {
    // let PseudoReAbObject = fastWritingStandardConverter(argumentToValidate);
    return console.log("string :)");
  } else {
    return console.error('The argument can be only a "string" "array" or an "object" for more information visit https://opensourceducation.github.io/ProReLedge/docs');
  }
};
/**     2.-   accomodateKeyArgumentsInArrayZero()
 * Si hay type, tags, license o identificators fuera del 
 * primer objeto del array, este método los pasa al primer objeto.
 * 
 * @param {array with objects colection} arrayArgument "el mismo argumentToValidate que pasa el usuario"
 * @return {array with objects colection}
 */

var accomodateKeyArgumentsInArrayZero = function accomodateKeyArgumentsInArrayZero(arrayArgument) {
  var arrayArgumentCopy = arrayArgument;
  var ReAbTags = arrayArgument[0].tags ? arrayArgument[0].tags : arrayArgument[0].tag ? arrayArgument[0].tag : arrayArgument[0].etiqueta ? arrayArgument[0].etiqueta : arrayArgument[0].etiquetas ? arrayArgument[0].etiquetas : null;
  var ReAbLicense = arrayArgument[0].license ? arrayArgument[0].license : arrayArgument[0].licencia ? arrayArgument[0].licencia : "MIT";
  var ReAbType = arrayArgument[0].type ? arrayArgument[0].type : arrayArgument[0].types ? arrayArgument[0].types : arrayArgument[0].tipo ? arrayArgument[0].tipo : arrayArgument[0].tipos ? arrayArgument[0].tipos : null;
  var ReAbSchool = arrayArgument[0].school ? arrayArgument[0].school : null;
  var ReabIdentificatorOrQr = arrayArgument[0].identificatorOrQr ? arrayArgument[0].identificatorOrQr : null;
  var ReAbGroupIdentifier = arrayArgument[0].groupIdentifier ? arrayArgument[0].groupIdentifier : null;
  var ternaryElements = [ReAbTags, ReAbLicense, ReAbType, ReAbSchool, ReabIdentificatorOrQr, ReAbGroupIdentifier];
  var objectElements = {
    tags: ReAbTags == null ? [] : Array.isArray(ReAbTags) ? ReAbTags : [ReAbTags],
    license: ReAbLicense == null ? [] : Array.isArray(ReAbLicense) ? ReAbLicense : [ReAbLicense],
    type: ReAbType == null ? [] : Array.isArray(ReAbType) ? ReAbType : [ReAbType],
    school: ReAbSchool == null ? [] : Array.isArray(ReAbSchool) ? ReAbSchool : [ReAbSchool],
    identificatorOrQr: ReabIdentificatorOrQr == null ? [] : Array.isArray(ReabIdentificatorOrQr) ? ReabIdentificatorOrQr : [ReabIdentificatorOrQr],
    groupIdentifier: ReAbGroupIdentifier == null ? [] : Array.isArrary(ReAbGroupIdentifier) ? ReAbGroupIdentifier : [ReAbGroupIdentifier]
  };
  var stringElements = ["tags", "license", "type", "school", "identificatorOrQr", "groupIdentifier"];
  var diferentNamedForParameters = new Array(6);
  diferentNamedForParameters[0] = ["tags", "tag", "etiqueta", "etiquetas"];
  diferentNamedForParameters[1] = ["license", "liscence", "lisence", "licencia"];
  diferentNamedForParameters[2] = ["type", "types", "tipo", "tipos"];
  diferentNamedForParameters[3] = ["school", "escuela", "colegio", "instituto"];
  diferentNamedForParameters[4] = ["id", "Id", "identificator", "identificatorOrQr"];
  diferentNamedForParameters[5] = ["groupIdentifier", "groupId", "groups", "grupos"];

  for (var i = 0; i < ternaryElements.length; i++) {
    objectElements[stringElements[i]] = passDispersedElementsToTheArrayZero(arrayArgument, diferentNamedForParameters[i], objectElements[stringElements[i]]);
    arrayArgumentCopy[0][stringElements[i]] = objectElements[stringElements[i]];

    if (arrayArgumentCopy[0][stringElements[i]] == null) {
      delete arrayArgumentCopy[0][stringElements[i]];
    }

    if (i == ternaryElements.length - 1) {
      return arrayArgumentCopy;
    }
  }
};
/**      3.-  passDispersedElementsToTheArrayZero()
 * Esta funcion itera sobre cada uno de los argumentos de la colección para juntarlos,
 * y entregarlos a la función "accomodateKeyArgumentsInArrayZero"
 * 
 * @param {array with objects colection} objectsArray 
 * @param {bidimensional array} diferentNamedFor 
 * @param {array} outputArray 
 * @return {array}
 */


var passDispersedElementsToTheArrayZero = function passDispersedElementsToTheArrayZero(objectsArray, diferentNamedFor, outputArray) {
  var newOutputArray = outputArray;
  var elementIterator;

  for (var i = 1; i < objectsArray.length; i++) {
    elementIterator = objectsArray[i][diferentNamedFor[0]] ? objectsArray[i][diferentNamedFor[0]] : objectsArray[i][diferentNamedFor[1]] ? objectsArray[i][diferentNamedFor[1]] : objectsArray[i][diferentNamedFor[2]] ? objectsArray[i][diferentNamedFor[2]] : objectsArray[i][diferentNamedFor[3]] ? objectsArray[i][diferentNamedFor[3]] : null;

    if (elementIterator != null) {
      newOutputArray.push(elementIterator);
    }

    if (i == objectsArray.length - 1) {
      if (newOutputArray.length == 0) {
        newOutputArray = null;
      }

      return newOutputArray;
    }
  }
};

/***/ }),

/***/ "./src/createReAbs/createReAbs.js":
/*!****************************************!*\
  !*** ./src/createReAbs/createReAbs.js ***!
  \****************************************/
/*! exports provided: createReAb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReAb", function() { return createReAb; });
/* harmony import */ var _typeValidator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeValidator.js */ "./src/createReAbs/typeValidator.js");
/* harmony import */ var _argumentValidator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./argumentValidator.js */ "./src/createReAbs/argumentValidator.js");
/* harmony import */ var _processes_branchInstantiator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./processes&branchInstantiator.js */ "./src/createReAbs/processes&branchInstantiator.js");



/**    				createReAb()
 * Función principal que coordina la creación de ReAbs
 * 
 * @param {Object ArrayObject} ReAbPseudoObject 
 * @return {ReAbNestedObject}
 */

var createReAb = function createReAb(ReAbPseudoObject) {
  var objectOrString = Object(_argumentValidator_js__WEBPACK_IMPORTED_MODULE_1__["argumentValidator"])(ReAbPseudoObject);
  var ReAblicense = objectOrString.license ? objectOrString.license : objectOrString.licencia ? objectOrString.licencia : "MIT";
  var ReAbType = objectOrString.type ? objectOrString.type : objectOrString.types ? objectOrString.types : objectOrString.tipo ? objectOrString.tipo : objectOrString.tipos ? objectOrString.tipos : null;
  var ReAbTags = objectOrString.tags ? objectOrString.tags : objectOrString.tag ? objectOrString.tag : objectOrString.etiqueta ? objectOrString.etiqueta : objectOrString.etiquetas ? objectOrString.etiquetas : null;
  var ReAbSchool = objectOrString.school ? objectOrString.school : null;
  var ReabIdentificatorOrQr = objectOrString.identificatorOrQr ? objectOrString.identificatorOrQr : null;
  var ReAbGroupIdentifier = objectOrString.groupIdentifier ? objectOrString.groupIdentifier : null;
  var tagsOfReAb = Object(_typeValidator_js__WEBPACK_IMPORTED_MODULE_0__["typeValidator"])(ReAbType, ReAbTags);
  var ReAbProcess = Object(_processes_branchInstantiator_js__WEBPACK_IMPORTED_MODULE_2__["createReAbProcesses"])(objectOrString);
  return ReAbCreator(ReAbProcess, tagsOfReAb, ReAbSchool, ReabIdentificatorOrQr, ReAbGroupIdentifier, ReAblicense);
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

var ReAbCreator = function ReAbCreator(ReAbProcess, tagsOfReAb, ReAbSchool, ReabIdentificatorOrQr, ReAbGroupIdentifier, ReAblicense) {
  return {
    "process": ReAbProcess.length <= 1 ? [ReAbProcess] : ReAbProcess,
    "rank": {
      "preferenceOfLearning": 1,
      /// EL ORDEN DE PRIORIDAD DE APRENDIZAJE QUE LE DA EL USUARIO
      "turn": 0,
      /// TURNO DE EJECUCIÓN DEL ReAb 
      "priority": null /// ESTE PARAMETRO SOLO SE ACTIVA CON "AAA" CUANDO EL ReAb HA SIDO CONTESTADO DE MANERA INCORRECTA. "AA" y "A" significa que el ReAb tuvo interacciones positivas luego de la falla.  CUANDO ESTA EN "null" NO SE TOMA EN CUENTA.  De la "Z a la U" indican tiempos prolongados de descanso.

    },
    "info": {
      "license": ReAblicense,
      "score": [/// SE PONDERA EL SCORE DE TODOS LOS PROCESOS PARA SACAR ESTA PUNTUACIÓN
      0],
      "tags": tagsOfReAb,
      /// ETIQUETAS QUE GUARDAN INFORMACIÓN DEL ReAb, DE EJECUCION, Y DE LA VERSION PARA FACILITAR O SUGERIR SU ACTUALIZACIÓN
      "school?": ReAbSchool,
      ///  ***  Identificadores académicos en caso de que los haya, como nombre de la institución, escudo, etc..
      "groupIdentifier?": ReAbGroupIdentifier,
      /// GUARDA UN HISTORIAL DE LOS GRUPOS DE ESTUDIO POR LOS QUE HA PASADO EL ReAb.  ALGUNA DE ESTA INFORMACIÓN ENRIQUECE LAS ETIQUETAS ("tags") para el analisis de datos
      "identificatorOrQr?": ReabIdentificatorOrQr,
      /// GUARDA UN CÓDIGO EN CADA ARRAY QUE IDENTIFICA EL USUARIO CREADOR DEL SISO, LOS USUARIOS QUE HAN MODIFICADO SU CONTENIDO, Y EL ULTIMO USUARIO TENEDOR DEL MISMO
      "internalization?": null,
      /// PUNTAJE GLOBAL REAL OCULTO EN UN CÓDIGO HASH DE "info.score"
      "href?": null /// SE USA COMO SEGUNDO FILTRO CORRABORATIVO DEL LADO DEL BACKEND QUE LOS DATOS DE "internalization", "score" E "identificatorOrQr" 

    }
  };
};

/***/ }),

/***/ "./src/createReAbs/fastArrayStandardConverter.js":
/*!*******************************************************!*\
  !*** ./src/createReAbs/fastArrayStandardConverter.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var fastArrayStandardConverter = function fastArrayStandardConverter() {};

/***/ }),

/***/ "./src/createReAbs/fastWritingStandardConverter.js":
/*!*********************************************************!*\
  !*** ./src/createReAbs/fastWritingStandardConverter.js ***!
  \*********************************************************/
/*! exports provided: fastWritingStandardConverter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fastWritingStandardConverter", function() { return fastWritingStandardConverter; });
var fastWritingStandardConverter = function fastWritingStandardConverter() {};

/***/ }),

/***/ "./src/createReAbs/processes&branchInstantiator.js":
/*!*********************************************************!*\
  !*** ./src/createReAbs/processes&branchInstantiator.js ***!
  \*********************************************************/
/*! exports provided: createReAbProcesses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReAbProcesses", function() { return createReAbProcesses; });
/**        1.- createReAbProcesses()
 *             Función princicpal
 * Retorna todos los procesos y bifurcaciones 
 * para colocarlos en el ReAb principal
 * 
 * @param {arrayObject} arrayObject
 * @return {ReAbProcessArrayObject} 
 */
var createReAbProcesses = function createReAbProcesses(arrayObject) {
  return arrayObject.map(function (process) {
    return createReAbProcess(process);
  });
};
/**             2.-  createReAbProcess()
 * Interpreta los datos introducidos por el usuario para 
 * crear los procesos y las bifurcaciones necesarias
 * 
 * @param {*} objectOrString 
 */

var createReAbProcess = function createReAbProcess(objectOrString) {
  var ReAbQuestions = objectOrString.pregunta ? objectOrString.pregunta : objectOrString.preguntas ? objectOrString.preguntas : objectOrString.question ? objectOrString.question : objectOrString["question?"] ? objectOrString["question?"] : objectOrString.questions ? objectOrString.questions : objectOrString.quest ? objectOrString.quest : null;
  var ReAbCanvas = objectOrString.canvas ? objectOrString.canvas : null;
  var ReAbAnswers = objectOrString.respuesta ? objectOrString.respuesta : objectOrString.respuestas ? objectOrString.respuestas : objectOrString.answer ? objectOrString.answer : objectOrString.answers ? objectOrString.answers : null;
  var ReAbWrongAnswers = objectOrString.preguntaIncorrecta ? objectOrString.preguntaIncorrecta : objectOrString.preguntasIncorrectas ? objectOrString.preguntasIncorrectas : objectOrString.wrongAnswer ? objectOrString.wrongAnswer : objectOrString.wrongAnswers ? objectOrString.wrongAnswers : null;
  var ReAbOperations = objectOrString.operations ? objectOrString.operations : null;
  var ReAbSpace = objectOrString.space ? objectOrString.space : null;
  var ReAbAnotations = objectOrString.anotations ? objectOrString.anotations : objectOrString.anotation ? objectOrString.anotation : objectOrString.anotacion ? objectOrString.anotacion : objectOrString.anotaciones ? objectOrString.anotaciones : null;
  var ReAbMnemonics = objectOrString.mnemonics ? objectOrString.mnemonics : null;
  var ReAbQuestionAnswer = objectOrString.questionAnswer ? objectOrString.questionAnswer : objectOrString.questAnswer ? objectOrString.questAnswer : objectOrString.questAns ? objectOrString.questAns : null;
  var ReAbQuestOutResources = objectOrString.questOutResources ? objectOrString.questOutResources : null;
  var ReAbReaction = objectOrString.reaction ? objectOrString.reaction : null;
  var ReAbProcessReactionMap = objectOrString.processReactionMap ? objectOrString.processReactionMap : null;
  var ReAbBranches = objectOrString.branch ? objectOrString.branch : objectOrString.branches ? objectOrString.branches : objectOrString.rama ? objectOrString.rama : objectOrString.ramas ? objectOrString.ramas : objectOrString.ramificacion ? objectOrString.ramificacion : objectOrString.ramificaciones ? objectOrString.ramificaciones : null;
  return ReAbProcessCreator(ReAbQuestions, ReAbCanvas, ReAbAnswers, ReAbWrongAnswers, ReAbOperations, ReAbSpace, ReAbAnotations, ReAbMnemonics, ReAbQuestionAnswer, ReAbQuestOutResources, ReAbReaction, ReAbProcessReactionMap, ReAbBranches);
};
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


var ReAbProcessCreator = function ReAbProcessCreator(ReAbQuestions, ReAbCanvas, ReAbAnswers, ReAbWrongAnswers, ReAbOperations, ReAbSpace, ReAbAnotations, ReAbMnemonics, ReAbQuestionAnswer, ReAbQuestOutResources, ReAbReaction, ReAbProcessReactionMap, ReAbBranches) {
  return {
    "processId": [1],
    "question?": ReAbQuestions,
    "canvas?": ReAbCanvas,
    "answer": ReAbAnswers,
    "wrong?": ReAbWrongAnswers,
    "anScore": [0, 0],
    "interconections?": {
      "anotations": ReAbAnotations,
      "mnemonics": ReAbMnemonics,
      "questionAnswer": ReAbQuestionAnswer,
      "questAuxResources": ReAbQuestOutResources,
      /// Recursos complementarios a la presentación de la pregunta  //  RUTA(S) DE IMAGEN, VIDEO, SONIDO, ETC Y EL ARRAY DE QUESTION AL QUE ESTÁ ASIGNADO
      "reaction": ReAbReaction,
      "processReactionMap": ReAbProcessReactionMap //// Programas rutas entre los elementos answer activados y bifurcaciones específicas "branch" en los siguientes procesos  // la ruta destino es la indicada despues de  " :: "

    },
    "operations?": ReAbOperations,
    ///  *   AQUI SE GUARDA LA DIDACTICA INTERNA espacial/relacional PARA ENSEÑAR AL ReAb A EJECUTAR LA OPERACIÓN MATEMÁTICA
    "space?": ReAbSpace,
    ///  *  AQUÍ SE GUARDAN COORDENADAS Y AREAS DE LA PANTALLA CON FORMAS GEOMETRICAS QUE AL PULSAR O INTERACTUAR DE MANERA CORRECTA, RESUELVE EL ReAb O PASA AL SIGUIENTE PROCESO
    "branch?": ReAbBranches ? createReAbProcesses(ReAbBranches) : null /// La ramificación de objetos subprocesos en caso de que los haya, son guardados aquí

  };
};

/***/ }),

/***/ "./src/createReAbs/typeValidator.js":
/*!******************************************!*\
  !*** ./src/createReAbs/typeValidator.js ***!
  \******************************************/
/*! exports provided: typeValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeValidator", function() { return typeValidator; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__);


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
var typeValidator = function typeValidator(ReAbType, tags) {
  var tagsArray = _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(tags) != "object" ? [tags] : tags;

  if (ReAbType === null && tags === null) {
    return ["Concepts"];
  } else if (ReAbType != null && tags != null) {
    var unionTags = tagsArray.splice(tags.length, 0, ReAbType);
    return foundReAbType(unionTags); // FUNCION QUE PRIMERO BUSCA EL MATCH EXCACTO Y SI NO LO ENCUENTRA, llama a otra funcion que agrega el tipo por palabras clave
  } else if (ReAbType === null) {
    return foundReAbType(tagsArray); // FUNCION QUE PRIMERO BUSCA EL MATCH EXCACTO Y SI NO LO ENCUENTRA, llama a otra funcion que agrega el tipo por palabras clave
  } else if (tags === null) {
    var ReAbTypeArray = _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(ReAbType) != "object" ? [ReAbType] : ReAbType;
    return foundReAbType(ReAbTypeArray); // FUNCION QUE PRIMERO BUSCA EL MATCH EXCACTO Y SI NO LO ENCUENTRA, llama a otra funcion que agrega el tipo por palabras clave
  }
};

var foundReAbType = function foundReAbType(arrayToFound) {
  var newArrayToFound = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(arrayToFound);

  if (typeMatch(arrayToFound, typeCode)) {
    return removeDuplicate(["Code"].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(newArrayToFound)));
  } else if (typeMatch(arrayToFound, typeMath)) {
    return removeDuplicate(["Math"].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(newArrayToFound)));
  } else {
    return removeDuplicate(["Concepts"].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(newArrayToFound)));
  }
};

var typeCode = ["code", "codigo", "javascript", "phyton", "git", "java", "ruby"];
var typeMath = ["math", "matematicas", "suma", "sumas", "resta", "restas", "multiplicacion", "division", "algebra"];
var typeSpace = ["space"];

var typeMatch = function typeMatch(arrayTags, arrayTypeMatch) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    var _loop2 = function _loop2() {
      var KeyWordElement = _step.value;
      var ReAbTypeFounded = arrayTags.filter(function (element) {
        return element.toLowerCase().match(new RegExp(KeyWordElement));
      });

      if (ReAbTypeFounded.length >= 1) {
        return {
          v: true
        };
        return "break";
      }
    };

    _loop: for (var _iterator = arrayTypeMatch[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _ret = _loop2();

      switch (_ret) {
        case "break":
          break _loop;

        default:
          if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(_ret) === "object") return _ret.v;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
};
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


var removeDuplicate = function removeDuplicate(arrayToReview) {
  for (var i = 0; i <= arrayToReview.length; i++) {
    if (arrayToReview[0].toLowerCase == arrayToReview[i + 1].toLowerCase) {
      // cambiarlo a .match para que sea case sensitive
      console.log("i = " + i);
      return arrayToReview;
      /*.splice((i+1),1); */
      //break
    }
  }

  return arrayToReview;
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSU5ERVguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Byb1JlTGVkZ2VMaWJyYXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9jcmVhdGVSZUFicy9hcmd1bWVudFZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3JlYXRlUmVBYnMvY3JlYXRlUmVBYnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NyZWF0ZVJlQWJzL2Zhc3RBcnJheVN0YW5kYXJkQ29udmVydGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jcmVhdGVSZUFicy9mYXN0V3JpdGluZ1N0YW5kYXJkQ29udmVydGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jcmVhdGVSZUFicy9wcm9jZXNzZXMmYnJhbmNoSW5zdGFudGlhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jcmVhdGVSZUFicy90eXBlVmFsaWRhdG9yLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIlJlQWIiLCJjcmVhdGUiLCJvYmplY3RPclN0cmluZyIsIkFycmF5Q29sbGVjdGlvbk91dHB1dCIsImNyZWF0ZVJlQWIiLCJhcmd1bWVudFZhbGlkYXRvciIsImFyZ3VtZW50VG9WYWxpZGF0ZSIsIkFycmF5IiwiaXNBcnJheSIsImNvbnNvbGUiLCJsb2ciLCJhcmd1bWVudFRvVmFsaWRhdGVDb3B5IiwiYWNjb21vZGF0ZUtleUFyZ3VtZW50c0luQXJyYXlaZXJvIiwiZXJyb3IiLCJhcnJheUFyZ3VtZW50IiwiYXJyYXlBcmd1bWVudENvcHkiLCJSZUFiVGFncyIsInRhZ3MiLCJ0YWciLCJldGlxdWV0YSIsImV0aXF1ZXRhcyIsIlJlQWJMaWNlbnNlIiwibGljZW5zZSIsImxpY2VuY2lhIiwiUmVBYlR5cGUiLCJ0eXBlIiwidHlwZXMiLCJ0aXBvIiwidGlwb3MiLCJSZUFiU2Nob29sIiwic2Nob29sIiwiUmVhYklkZW50aWZpY2F0b3JPclFyIiwiaWRlbnRpZmljYXRvck9yUXIiLCJSZUFiR3JvdXBJZGVudGlmaWVyIiwiZ3JvdXBJZGVudGlmaWVyIiwidGVybmFyeUVsZW1lbnRzIiwib2JqZWN0RWxlbWVudHMiLCJpc0FycmFyeSIsInN0cmluZ0VsZW1lbnRzIiwiZGlmZXJlbnROYW1lZEZvclBhcmFtZXRlcnMiLCJpIiwibGVuZ3RoIiwicGFzc0Rpc3BlcnNlZEVsZW1lbnRzVG9UaGVBcnJheVplcm8iLCJvYmplY3RzQXJyYXkiLCJkaWZlcmVudE5hbWVkRm9yIiwib3V0cHV0QXJyYXkiLCJuZXdPdXRwdXRBcnJheSIsImVsZW1lbnRJdGVyYXRvciIsInB1c2giLCJSZUFiUHNldWRvT2JqZWN0IiwiUmVBYmxpY2Vuc2UiLCJ0YWdzT2ZSZUFiIiwidHlwZVZhbGlkYXRvciIsIlJlQWJQcm9jZXNzIiwiY3JlYXRlUmVBYlByb2Nlc3NlcyIsIlJlQWJDcmVhdG9yIiwiZmFzdEFycmF5U3RhbmRhcmRDb252ZXJ0ZXIiLCJmYXN0V3JpdGluZ1N0YW5kYXJkQ29udmVydGVyIiwiYXJyYXlPYmplY3QiLCJtYXAiLCJwcm9jZXNzIiwiY3JlYXRlUmVBYlByb2Nlc3MiLCJSZUFiUXVlc3Rpb25zIiwicHJlZ3VudGEiLCJwcmVndW50YXMiLCJxdWVzdGlvbiIsInF1ZXN0aW9ucyIsInF1ZXN0IiwiUmVBYkNhbnZhcyIsImNhbnZhcyIsIlJlQWJBbnN3ZXJzIiwicmVzcHVlc3RhIiwicmVzcHVlc3RhcyIsImFuc3dlciIsImFuc3dlcnMiLCJSZUFiV3JvbmdBbnN3ZXJzIiwicHJlZ3VudGFJbmNvcnJlY3RhIiwicHJlZ3VudGFzSW5jb3JyZWN0YXMiLCJ3cm9uZ0Fuc3dlciIsIndyb25nQW5zd2VycyIsIlJlQWJPcGVyYXRpb25zIiwib3BlcmF0aW9ucyIsIlJlQWJTcGFjZSIsInNwYWNlIiwiUmVBYkFub3RhdGlvbnMiLCJhbm90YXRpb25zIiwiYW5vdGF0aW9uIiwiYW5vdGFjaW9uIiwiYW5vdGFjaW9uZXMiLCJSZUFiTW5lbW9uaWNzIiwibW5lbW9uaWNzIiwiUmVBYlF1ZXN0aW9uQW5zd2VyIiwicXVlc3Rpb25BbnN3ZXIiLCJxdWVzdEFuc3dlciIsInF1ZXN0QW5zIiwiUmVBYlF1ZXN0T3V0UmVzb3VyY2VzIiwicXVlc3RPdXRSZXNvdXJjZXMiLCJSZUFiUmVhY3Rpb24iLCJyZWFjdGlvbiIsIlJlQWJQcm9jZXNzUmVhY3Rpb25NYXAiLCJwcm9jZXNzUmVhY3Rpb25NYXAiLCJSZUFiQnJhbmNoZXMiLCJicmFuY2giLCJicmFuY2hlcyIsInJhbWEiLCJyYW1hcyIsInJhbWlmaWNhY2lvbiIsInJhbWlmaWNhY2lvbmVzIiwiUmVBYlByb2Nlc3NDcmVhdG9yIiwidGFnc0FycmF5IiwidW5pb25UYWdzIiwic3BsaWNlIiwiZm91bmRSZUFiVHlwZSIsIlJlQWJUeXBlQXJyYXkiLCJhcnJheVRvRm91bmQiLCJuZXdBcnJheVRvRm91bmQiLCJ0eXBlTWF0Y2giLCJ0eXBlQ29kZSIsInJlbW92ZUR1cGxpY2F0ZSIsInR5cGVNYXRoIiwidHlwZVNwYWNlIiwiYXJyYXlUYWdzIiwiYXJyYXlUeXBlTWF0Y2giLCJLZXlXb3JkRWxlbWVudCIsIlJlQWJUeXBlRm91bmRlZCIsImZpbHRlciIsImVsZW1lbnQiLCJ0b0xvd2VyQ2FzZSIsIm1hdGNoIiwiUmVnRXhw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LEdBQUMsQ0FBVixFQUFhQSxDQUFDLElBQUcwRixhQUFhLENBQUN6RixNQUEvQixFQUF1Q0QsQ0FBQyxFQUF4QyxFQUEyQztBQUN2QyxRQUFJMEYsYUFBYSxDQUFDLENBQUQsQ0FBYixDQUFpQkgsV0FBakIsSUFBZ0NHLGFBQWEsQ0FBRTFGLENBQUMsR0FBQyxDQUFKLENBQWIsQ0FBcUJ1RixXQUF6RCxFQUFxRTtBQUFJO0FBQ3JFdEgsYUFBTyxDQUFDQyxHQUFSLENBQVksU0FBUzhCLENBQXJCO0FBQ0EsYUFBTzBGLGFBQVA7QUFBcUI7QUFDckI7QUFDSDtBQUNKOztBQUNELFNBQU9BLGFBQVA7QUFDSCxDQVRELEMiLCJmaWxlIjoiUHJvUmVMZWRnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL0lOREVYLmpzXCIpO1xuIiwiZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFycjJbaV0gPSBhcnJbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRob3V0SG9sZXM7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpdGVyKSA9PT0gXCJbb2JqZWN0IEFyZ3VtZW50c11cIikgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheTsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQ7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciBub25JdGVyYWJsZVNwcmVhZCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlU3ByZWFkXCIpO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5OyIsImZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZjIgPSBmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mMihvYmopOyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgX3R5cGVvZjIoU3ltYm9sLml0ZXJhdG9yKSA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gX3R5cGVvZjIob2JqKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogX3R5cGVvZjIob2JqKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCB7UmVBYn0gZnJvbSAnLi9Qcm9SZUxlZGdlTGlicmFyeSc7XHJcblxyXG4oZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5SZUFiID09PSBcInVuZGVmaW5lZFwiKSB3aW5kb3cuUmVBYiA9IFJlQWI7XHJcbn0pKCk7IiwiaW1wb3J0IHtjcmVhdGVSZUFifSBmcm9tICcuL2NyZWF0ZVJlQWJzL2NyZWF0ZVJlQWJzLmpzJztcclxuXHJcbi8qKlxyXG4gKiAgXHJcbiAqIEByZXR1cm4ge1JlQWJOZXN0ZWRPYmplY3R9IHNpIHNvbG8gc2UgcGFzbyBlbCBwcmltZXIgYXJndW1lbnRvXHJcbiAqIEByZXR1cm4ge1JlQWJDb2xsZWN0aW9uQXJyYXl9IFNpIHNlIHBhc8OzIHVuIHNlZ3VuZG8gYXJndW1lbnRvIGRlIHNhbGlkYSBvIGRlc3Rpbm9cclxuICogXHJcbiAqIFxyXG4gKiBzb2xvIGNlcnRpZmljYXLDoSBxdWUgbG9zIGFyZ3VtZW50b3Mgc2VhbiB2YWxpZG9zIHkgcmV0b3JuYXJhIGNvbnNvbGUuZXJyb3Igc2kgbm9cclxuICogTGEgcmVkaXJlY2Npw7NuIGRlIGxvcyBwcm9jZXNvcyBzZSBoYXLDoSBlbiBjcmVhdGVSZUFiKCkgbyBlbiB1bmEgZnVuY2nDs24gcXVlIGNvbnZpZXJ0ZSBlbFxyXG4gKiBwYXJhbWV0cm8gc2luIGltcG9ydGFyIHF1ZSBzZWEsIHkgcmV0b3JuYSBzaWVtcHJlIHVuIGFycmF5IGNvbiAxIG8gbcOhcyBvYmpldG9zIGRlbnRybyBwYXJhXHJcbiAqIG1hbmVqYXIgZWwgcmVzdWx0YWRvIGVuIFJlQWIuY3JlYXRlKClcclxuICogXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgUmVBYiA9IHsgIFxyXG5cdGNyZWF0ZTogKG9iamVjdE9yU3RyaW5nLEFycmF5Q29sbGVjdGlvbk91dHB1dCkgPT4ge1xyXG5cdFx0cmV0dXJuIGNyZWF0ZVJlQWIob2JqZWN0T3JTdHJpbmcpOyAgIFxyXG5cdH1cclxufTsgIiwiaW1wb3J0IHtjcmVhdGVSZUFifSBmcm9tICcuL2NyZWF0ZVJlQWJzLmpzJztcclxuaW1wb3J0IHtmYXN0V3JpdGluZ1N0YW5kYXJkQ29udmVydGVyfSBmcm9tICcuL2Zhc3RXcml0aW5nU3RhbmRhcmRDb252ZXJ0ZXIuanMnO1xyXG5pbXBvcnQge2Zhc3RBcnJheVN0YW5kYXJkQ29udmVydGVyfSBmcm9tICcuL2Zhc3RBcnJheVN0YW5kYXJkQ29udmVydGVyLmpzJztcclxuXHJcblxyXG5cclxuLyoqICAgICAgIDEuLSAgICAgICAgIGFyZ3VtZW50VmFsaWRhdG9yKClcclxuICogQ29udmllcnRlIGVsIGFyZ3VtZW50byBkZWwgdXN1YXJpbyBlbiB1biBhcnJheSBjb24gb2JqZXRvcyBcclxuICogcXVlIGVsIG3DqXRvZG8gY3JlYXRlUmVBYnMgYWNlcHRhIGNvbW8gYXJndW1lbnRvXHJcbiAqIFxyXG4gKiBAcGFyYW0ge3N0cmluZyBhcnJheSBvciBPYmplY3R9IGFyZ3VtZW50VG9WYWxpZGF0ZSBcclxuICogQHJldHVybnthcnJheX1cclxuICovXHJcbmV4cG9ydCBjb25zdCBhcmd1bWVudFZhbGlkYXRvciA9IChhcmd1bWVudFRvVmFsaWRhdGUpID0+IHtcclxuICAgIGlmKEFycmF5LmlzQXJyYXkoYXJndW1lbnRUb1ZhbGlkYXRlKSAmJiBhcmd1bWVudFRvVmFsaWRhdGVbMF0gPT0gMSl7ICBcclxuICAgICAgICAvL2xldCBQc2V1ZG9SZUFiT2JqZWN0ID0gZmFzdEFycmF5U3RhbmRhcmRDb252ZXJ0ZXIoYXJndW1lbnRUb1ZhbGlkYXRlKTtcclxuICAgICAgICByZXR1cm4gY29uc29sZS5sb2coXCJhcnJheSBmYXN0IHdyaXRpbmdcIik7IFxyXG4gICAgfVxyXG4gICAgZWxzZSBpZihBcnJheS5pc0FycmF5KGFyZ3VtZW50VG9WYWxpZGF0ZSkgJiYgdHlwZW9mIGFyZ3VtZW50VG9WYWxpZGF0ZVswXSA9PSBcIm9iamVjdFwiKXtcclxuICAgICAgICBsZXQgYXJndW1lbnRUb1ZhbGlkYXRlQ29weSA9IGFjY29tb2RhdGVLZXlBcmd1bWVudHNJbkFycmF5WmVybyhhcmd1bWVudFRvVmFsaWRhdGUpO1xyXG4gICAgICAgIHJldHVybiBhcmd1bWVudFRvVmFsaWRhdGVDb3B5OyAgXHJcbiAgICB9IFxyXG4gICAgZWxzZSBpZih0eXBlb2YgYXJndW1lbnRUb1ZhbGlkYXRlID09PSBcIm9iamVjdFwiICYmICFBcnJheS5pc0FycmF5KGFyZ3VtZW50VG9WYWxpZGF0ZSkpe1xyXG4gICAgICAgIHJldHVybiBbYXJndW1lbnRUb1ZhbGlkYXRlXTtcclxuICAgIH0gXHJcbiAgICBlbHNlIGlmKHR5cGVvZiBhcmd1bWVudFRvVmFsaWRhdGUgPT09IFwic3RyaW5nXCIpe1xyXG4gICAgICAgLy8gbGV0IFBzZXVkb1JlQWJPYmplY3QgPSBmYXN0V3JpdGluZ1N0YW5kYXJkQ29udmVydGVyKGFyZ3VtZW50VG9WYWxpZGF0ZSk7XHJcbiAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKFwic3RyaW5nIDopXCIpOyBcclxuICAgIH0gXHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gY29uc29sZS5lcnJvcignVGhlIGFyZ3VtZW50IGNhbiBiZSBvbmx5IGEgXCJzdHJpbmdcIiBcImFycmF5XCIgb3IgYW4gXCJvYmplY3RcIiBmb3IgbW9yZSBpbmZvcm1hdGlvbiB2aXNpdCBodHRwczovL29wZW5zb3VyY2VkdWNhdGlvbi5naXRodWIuaW8vUHJvUmVMZWRnZS9kb2NzJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4vKiogICAgIDIuLSAgIGFjY29tb2RhdGVLZXlBcmd1bWVudHNJbkFycmF5WmVybygpXHJcbiAqIFNpIGhheSB0eXBlLCB0YWdzLCBsaWNlbnNlIG8gaWRlbnRpZmljYXRvcnMgZnVlcmEgZGVsIFxyXG4gKiBwcmltZXIgb2JqZXRvIGRlbCBhcnJheSwgZXN0ZSBtw6l0b2RvIGxvcyBwYXNhIGFsIHByaW1lciBvYmpldG8uXHJcbiAqIFxyXG4gKiBAcGFyYW0ge2FycmF5IHdpdGggb2JqZWN0cyBjb2xlY3Rpb259IGFycmF5QXJndW1lbnQgXCJlbCBtaXNtbyBhcmd1bWVudFRvVmFsaWRhdGUgcXVlIHBhc2EgZWwgdXN1YXJpb1wiXHJcbiAqIEByZXR1cm4ge2FycmF5IHdpdGggb2JqZWN0cyBjb2xlY3Rpb259XHJcbiAqL1xyXG5jb25zdCBhY2NvbW9kYXRlS2V5QXJndW1lbnRzSW5BcnJheVplcm8gPSAoYXJyYXlBcmd1bWVudCkgPT4ge1xyXG4gICAgbGV0IGFycmF5QXJndW1lbnRDb3B5ID0gYXJyYXlBcmd1bWVudDtcclxuXHJcbiAgICBsZXQgUmVBYlRhZ3MgPSBhcnJheUFyZ3VtZW50WzBdLnRhZ3MgPyBhcnJheUFyZ3VtZW50WzBdLnRhZ3MgOiBhcnJheUFyZ3VtZW50WzBdLnRhZyA/IGFycmF5QXJndW1lbnRbMF0udGFnIDogYXJyYXlBcmd1bWVudFswXS5ldGlxdWV0YSA/IGFycmF5QXJndW1lbnRbMF0uZXRpcXVldGEgOiBhcnJheUFyZ3VtZW50WzBdLmV0aXF1ZXRhcyA/IGFycmF5QXJndW1lbnRbMF0uZXRpcXVldGFzIDogbnVsbDtcclxuICAgIGxldCBSZUFiTGljZW5zZSA9IGFycmF5QXJndW1lbnRbMF0ubGljZW5zZSA/IGFycmF5QXJndW1lbnRbMF0ubGljZW5zZSA6IGFycmF5QXJndW1lbnRbMF0ubGljZW5jaWEgPyBhcnJheUFyZ3VtZW50WzBdLmxpY2VuY2lhIDogXCJNSVRcIjtcclxuXHRsZXQgUmVBYlR5cGUgPSBhcnJheUFyZ3VtZW50WzBdLnR5cGUgPyBhcnJheUFyZ3VtZW50WzBdLnR5cGUgOiBhcnJheUFyZ3VtZW50WzBdLnR5cGVzID8gYXJyYXlBcmd1bWVudFswXS50eXBlcyA6IGFycmF5QXJndW1lbnRbMF0udGlwbyA/IGFycmF5QXJndW1lbnRbMF0udGlwbyA6IGFycmF5QXJndW1lbnRbMF0udGlwb3MgPyBhcnJheUFyZ3VtZW50WzBdLnRpcG9zIDogbnVsbDtcclxuXHRsZXQgUmVBYlNjaG9vbCA9IGFycmF5QXJndW1lbnRbMF0uc2Nob29sID8gYXJyYXlBcmd1bWVudFswXS5zY2hvb2wgOiBudWxsO1xyXG5cdGxldCBSZWFiSWRlbnRpZmljYXRvck9yUXIgPSBhcnJheUFyZ3VtZW50WzBdLmlkZW50aWZpY2F0b3JPclFyID8gYXJyYXlBcmd1bWVudFswXS5pZGVudGlmaWNhdG9yT3JRciA6IG51bGw7XHJcbiAgICBsZXQgUmVBYkdyb3VwSWRlbnRpZmllciA9IGFycmF5QXJndW1lbnRbMF0uZ3JvdXBJZGVudGlmaWVyID8gYXJyYXlBcmd1bWVudFswXS5ncm91cElkZW50aWZpZXI6IG51bGw7XHJcbiAgICBsZXQgdGVybmFyeUVsZW1lbnRzID0gW1JlQWJUYWdzLFJlQWJMaWNlbnNlLFJlQWJUeXBlLFJlQWJTY2hvb2wsUmVhYklkZW50aWZpY2F0b3JPclFyLFJlQWJHcm91cElkZW50aWZpZXJdO1xyXG4gICAgdmFyIG9iamVjdEVsZW1lbnRzID0geyAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWdzOiBSZUFiVGFncyA9PSBudWxsID8gW10gOiBBcnJheS5pc0FycmF5KFJlQWJUYWdzKSA/IFJlQWJUYWdzIDogW1JlQWJUYWdzXSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaWNlbnNlOiBSZUFiTGljZW5zZSA9PSBudWxsID8gW10gOiBBcnJheS5pc0FycmF5KFJlQWJMaWNlbnNlKSA/IFJlQWJMaWNlbnNlIDogW1JlQWJMaWNlbnNlXSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBSZUFiVHlwZSA9PSBudWxsID8gW10gOiBBcnJheS5pc0FycmF5KFJlQWJUeXBlKSA/IFJlQWJUeXBlIDogW1JlQWJUeXBlXSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hvb2w6IFJlQWJTY2hvb2wgPT0gbnVsbCA/IFtdIDogQXJyYXkuaXNBcnJheShSZUFiU2Nob29sKSA/IFJlQWJTY2hvb2wgOiBbUmVBYlNjaG9vbF0sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRlbnRpZmljYXRvck9yUXI6IFJlYWJJZGVudGlmaWNhdG9yT3JRciA9PSBudWxsID8gW10gOiBBcnJheS5pc0FycmF5KFJlYWJJZGVudGlmaWNhdG9yT3JRcikgPyBSZWFiSWRlbnRpZmljYXRvck9yUXIgOiBbUmVhYklkZW50aWZpY2F0b3JPclFyXSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91cElkZW50aWZpZXI6IFJlQWJHcm91cElkZW50aWZpZXIgPT0gbnVsbCA/IFtdIDogQXJyYXkuaXNBcnJhcnkoUmVBYkdyb3VwSWRlbnRpZmllcikgPyBSZUFiR3JvdXBJZGVudGlmaWVyIDogW1JlQWJHcm91cElkZW50aWZpZXJdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICBsZXQgc3RyaW5nRWxlbWVudHMgPSBbXCJ0YWdzXCIsXCJsaWNlbnNlXCIsXCJ0eXBlXCIsXCJzY2hvb2xcIixcImlkZW50aWZpY2F0b3JPclFyXCIsXCJncm91cElkZW50aWZpZXJcIl07XHJcblxyXG4gICAgbGV0IGRpZmVyZW50TmFtZWRGb3JQYXJhbWV0ZXJzID0gbmV3IEFycmF5KDYpO1xyXG4gICAgZGlmZXJlbnROYW1lZEZvclBhcmFtZXRlcnNbMF0gPSBbXCJ0YWdzXCIsXCJ0YWdcIixcImV0aXF1ZXRhXCIsXCJldGlxdWV0YXNcIl07XHJcbiAgICBkaWZlcmVudE5hbWVkRm9yUGFyYW1ldGVyc1sxXSA9IFtcImxpY2Vuc2VcIixcImxpc2NlbmNlXCIsXCJsaXNlbmNlXCIsXCJsaWNlbmNpYVwiXTtcclxuICAgIGRpZmVyZW50TmFtZWRGb3JQYXJhbWV0ZXJzWzJdID0gW1widHlwZVwiLFwidHlwZXNcIixcInRpcG9cIixcInRpcG9zXCJdO1xyXG4gICAgZGlmZXJlbnROYW1lZEZvclBhcmFtZXRlcnNbM10gPSBbXCJzY2hvb2xcIixcImVzY3VlbGFcIixcImNvbGVnaW9cIixcImluc3RpdHV0b1wiXTtcclxuICAgIGRpZmVyZW50TmFtZWRGb3JQYXJhbWV0ZXJzWzRdID0gW1wiaWRcIixcIklkXCIsXCJpZGVudGlmaWNhdG9yXCIsXCJpZGVudGlmaWNhdG9yT3JRclwiXTtcclxuICAgIGRpZmVyZW50TmFtZWRGb3JQYXJhbWV0ZXJzWzVdID0gW1wiZ3JvdXBJZGVudGlmaWVyXCIsXCJncm91cElkXCIsXCJncm91cHNcIixcImdydXBvc1wiXTtcclxuXHJcbiAgICBmb3IodmFyIGk9MDsgaSA8IHRlcm5hcnlFbGVtZW50cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgb2JqZWN0RWxlbWVudHNbc3RyaW5nRWxlbWVudHNbaV1dID0gXHJcbiAgICAgICAgcGFzc0Rpc3BlcnNlZEVsZW1lbnRzVG9UaGVBcnJheVplcm8gKGFycmF5QXJndW1lbnQsZGlmZXJlbnROYW1lZEZvclBhcmFtZXRlcnNbaV0sb2JqZWN0RWxlbWVudHNbc3RyaW5nRWxlbWVudHNbaV1dKTtcclxuICAgICAgICBhcnJheUFyZ3VtZW50Q29weVswXVtzdHJpbmdFbGVtZW50c1tpXV0gPSBvYmplY3RFbGVtZW50c1tzdHJpbmdFbGVtZW50c1tpXV07XHJcbiAgICAgICAgaWYoYXJyYXlBcmd1bWVudENvcHlbMF1bc3RyaW5nRWxlbWVudHNbaV1dID09IG51bGwpIHsgZGVsZXRlIGFycmF5QXJndW1lbnRDb3B5WzBdW3N0cmluZ0VsZW1lbnRzW2ldXTt9XHJcbiAgICAgICAgaWYoaSA9PSAodGVybmFyeUVsZW1lbnRzLmxlbmd0aC0xKSl7XHJcbiAgICAgICAgICAgIHJldHVybiBhcnJheUFyZ3VtZW50Q29weTtcclxuICAgICAgICB9XHJcbiAgICB9ICAgICAgICBcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vKiogICAgICAzLi0gIHBhc3NEaXNwZXJzZWRFbGVtZW50c1RvVGhlQXJyYXlaZXJvKClcclxuICogRXN0YSBmdW5jaW9uIGl0ZXJhIHNvYnJlIGNhZGEgdW5vIGRlIGxvcyBhcmd1bWVudG9zIGRlIGxhIGNvbGVjY2nDs24gcGFyYSBqdW50YXJsb3MsXHJcbiAqIHkgZW50cmVnYXJsb3MgYSBsYSBmdW5jacOzbiBcImFjY29tb2RhdGVLZXlBcmd1bWVudHNJbkFycmF5WmVyb1wiXHJcbiAqIFxyXG4gKiBAcGFyYW0ge2FycmF5IHdpdGggb2JqZWN0cyBjb2xlY3Rpb259IG9iamVjdHNBcnJheSBcclxuICogQHBhcmFtIHtiaWRpbWVuc2lvbmFsIGFycmF5fSBkaWZlcmVudE5hbWVkRm9yIFxyXG4gKiBAcGFyYW0ge2FycmF5fSBvdXRwdXRBcnJheSBcclxuICogQHJldHVybiB7YXJyYXl9XHJcbiAqLyBcclxuY29uc3QgcGFzc0Rpc3BlcnNlZEVsZW1lbnRzVG9UaGVBcnJheVplcm8gPSAob2JqZWN0c0FycmF5LGRpZmVyZW50TmFtZWRGb3Isb3V0cHV0QXJyYXkpID0+IHtcclxuXHJcbnZhciBuZXdPdXRwdXRBcnJheSA9IG91dHB1dEFycmF5O1xyXG52YXIgZWxlbWVudEl0ZXJhdG9yO1xyXG4gICAgXHJcbiAgICBmb3IobGV0IGkgPSAxOyBpIDwgb2JqZWN0c0FycmF5Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBlbGVtZW50SXRlcmF0b3IgPSBvYmplY3RzQXJyYXlbaV1bZGlmZXJlbnROYW1lZEZvclswXV0gPyBvYmplY3RzQXJyYXlbaV1bZGlmZXJlbnROYW1lZEZvclswXV0gOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RzQXJyYXlbaV1bZGlmZXJlbnROYW1lZEZvclsxXV0gPyBvYmplY3RzQXJyYXlbaV1bZGlmZXJlbnROYW1lZEZvclsxXV0gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdHNBcnJheVtpXVtkaWZlcmVudE5hbWVkRm9yWzJdXSA/IG9iamVjdHNBcnJheVtpXVtkaWZlcmVudE5hbWVkRm9yWzJdXSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0c0FycmF5W2ldW2RpZmVyZW50TmFtZWRGb3JbM11dID8gb2JqZWN0c0FycmF5W2ldW2RpZmVyZW50TmFtZWRGb3JbM11dIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xyXG5cclxuICAgICAgICBpZihlbGVtZW50SXRlcmF0b3IgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgIG5ld091dHB1dEFycmF5LnB1c2goZWxlbWVudEl0ZXJhdG9yKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGkgPT0gKG9iamVjdHNBcnJheS5sZW5ndGgtMSkpe1xyXG4gICAgICAgICAgICBpZihuZXdPdXRwdXRBcnJheS5sZW5ndGggPT0gMCkgeyBuZXdPdXRwdXRBcnJheSA9IG51bGw7IH1cclxuICAgICAgICAgICAgcmV0dXJuIG5ld091dHB1dEFycmF5O1xyXG4gICAgICAgIH0gXHJcbiAgICB9ICAgXHJcbn0iLCJpbXBvcnQgeyB0eXBlVmFsaWRhdG9yIH0gZnJvbSAnLi90eXBlVmFsaWRhdG9yLmpzJztcclxuaW1wb3J0IHsgYXJndW1lbnRWYWxpZGF0b3IgfSBmcm9tICcuL2FyZ3VtZW50VmFsaWRhdG9yLmpzJztcclxuaW1wb3J0IHsgY3JlYXRlUmVBYlByb2Nlc3NlcyB9IGZyb20gJy4vcHJvY2Vzc2VzJmJyYW5jaEluc3RhbnRpYXRvci5qcyc7XHJcblxyXG5cclxuXHJcbi8qKiAgICBcdFx0XHRcdGNyZWF0ZVJlQWIoKVxyXG4gKiBGdW5jacOzbiBwcmluY2lwYWwgcXVlIGNvb3JkaW5hIGxhIGNyZWFjacOzbiBkZSBSZUFic1xyXG4gKiBcclxuICogQHBhcmFtIHtPYmplY3QgQXJyYXlPYmplY3R9IFJlQWJQc2V1ZG9PYmplY3QgXHJcbiAqIEByZXR1cm4ge1JlQWJOZXN0ZWRPYmplY3R9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY3JlYXRlUmVBYiA9IChSZUFiUHNldWRvT2JqZWN0KSA9PiB7XHJcblxyXG5cdGxldCBvYmplY3RPclN0cmluZyA9IGFyZ3VtZW50VmFsaWRhdG9yKFJlQWJQc2V1ZG9PYmplY3QpO1xyXG5cclxuXHRsZXQgUmVBYmxpY2Vuc2UgPSBvYmplY3RPclN0cmluZy5saWNlbnNlID8gb2JqZWN0T3JTdHJpbmcubGljZW5zZSA6IG9iamVjdE9yU3RyaW5nLmxpY2VuY2lhID8gb2JqZWN0T3JTdHJpbmcubGljZW5jaWEgOiBcIk1JVFwiO1xyXG5cdGxldCBSZUFiVHlwZSA9IG9iamVjdE9yU3RyaW5nLnR5cGUgPyBvYmplY3RPclN0cmluZy50eXBlIDogb2JqZWN0T3JTdHJpbmcudHlwZXMgPyBvYmplY3RPclN0cmluZy50eXBlcyA6IG9iamVjdE9yU3RyaW5nLnRpcG8gPyBvYmplY3RPclN0cmluZy50aXBvIDogb2JqZWN0T3JTdHJpbmcudGlwb3MgPyBvYmplY3RPclN0cmluZy50aXBvcyA6IG51bGw7XHJcblx0bGV0IFJlQWJUYWdzID0gb2JqZWN0T3JTdHJpbmcudGFncyA/IG9iamVjdE9yU3RyaW5nLnRhZ3MgOiBvYmplY3RPclN0cmluZy50YWcgPyBvYmplY3RPclN0cmluZy50YWcgOiBvYmplY3RPclN0cmluZy5ldGlxdWV0YSA/IG9iamVjdE9yU3RyaW5nLmV0aXF1ZXRhIDogb2JqZWN0T3JTdHJpbmcuZXRpcXVldGFzID8gb2JqZWN0T3JTdHJpbmcuZXRpcXVldGFzIDogbnVsbDtcclxuXHRsZXQgUmVBYlNjaG9vbCA9IG9iamVjdE9yU3RyaW5nLnNjaG9vbCA/IG9iamVjdE9yU3RyaW5nLnNjaG9vbCA6IG51bGw7XHJcblx0bGV0IFJlYWJJZGVudGlmaWNhdG9yT3JRciA9IG9iamVjdE9yU3RyaW5nLmlkZW50aWZpY2F0b3JPclFyID8gb2JqZWN0T3JTdHJpbmcuaWRlbnRpZmljYXRvck9yUXIgOiBudWxsO1xyXG5cdGxldCBSZUFiR3JvdXBJZGVudGlmaWVyID0gb2JqZWN0T3JTdHJpbmcuZ3JvdXBJZGVudGlmaWVyID8gb2JqZWN0T3JTdHJpbmcuZ3JvdXBJZGVudGlmaWVyOiBudWxsO1xyXG5cclxuXHRsZXQgdGFnc09mUmVBYiA9IHR5cGVWYWxpZGF0b3IoUmVBYlR5cGUsUmVBYlRhZ3MpO1xyXG5cclxuXHRsZXQgUmVBYlByb2Nlc3MgPSBjcmVhdGVSZUFiUHJvY2Vzc2VzKG9iamVjdE9yU3RyaW5nKTsgICBcclxuXHJcblx0cmV0dXJuIFJlQWJDcmVhdG9yKFJlQWJQcm9jZXNzLHRhZ3NPZlJlQWIsUmVBYlNjaG9vbCxSZWFiSWRlbnRpZmljYXRvck9yUXIsUmVBYkdyb3VwSWRlbnRpZmllcixSZUFibGljZW5zZSk7IFxyXG59O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vKiogICAgIFx0XHRcdFJlQWJDcmVhdG9yKClcclxuICogUmV0b3JuYSBlbCBvYmpldG8gUmVBYiBiYXNlIHNpbiBsb3MgcHJvY2Vzb3MgbmkgXHJcbiAqIGJpZnVyY2FjaW9uZXMgY29uIHByZWd1bnRhcyB5IHJlc3B1ZXN0YXNcclxuICogXHJcbiAqIEBwYXJhbSB7T2JqZWN0QXJyYXl9IFJlQWJQcm9jZXNzIFxyXG4gKiBAcGFyYW0ge0FycmF5fSB0YWdzT2ZSZUFiIFxyXG4gKiBAcGFyYW0ge0FycmF5fSBSZUFiU2Nob29sIFxyXG4gKiBAcGFyYW0ge0FycmF5fSBSZWFiSWRlbnRpZmljYXRvck9yUXIgXHJcbiAqIEBwYXJhbSB7QXJyYXl9IFJlQWJHcm91cElkZW50aWZpZXIgXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBSZUFibGljZW5zZSBcclxuICovXHJcbmNvbnN0IFJlQWJDcmVhdG9yID0gKFJlQWJQcm9jZXNzLHRhZ3NPZlJlQWIsUmVBYlNjaG9vbCxSZWFiSWRlbnRpZmljYXRvck9yUXIsUmVBYkdyb3VwSWRlbnRpZmllcixSZUFibGljZW5zZSkgPT4ge1xyXG5cclxuXHRyZXR1cm4ge1xyXG5cdCAgXCJwcm9jZXNzXCIgOiBSZUFiUHJvY2Vzcy5sZW5ndGggPD0gMSA/IFtSZUFiUHJvY2Vzc10gOiBSZUFiUHJvY2VzcyxcclxuXHQgIFwicmFua1wiIDoge1xyXG5cdFx0XCJwcmVmZXJlbmNlT2ZMZWFybmluZ1wiIDogMSwgICAgICAvLy8gRUwgT1JERU4gREUgUFJJT1JJREFEIERFIEFQUkVORElaQUpFIFFVRSBMRSBEQSBFTCBVU1VBUklPXHJcblx0XHRcInR1cm5cIiA6IDAsICAgICAgICAgICAgLy8vIFRVUk5PIERFIEVKRUNVQ0nDk04gREVMIFJlQWIgXHJcblx0XHRcInByaW9yaXR5XCIgOiBudWxsICAgIC8vLyBFU1RFIFBBUkFNRVRSTyBTT0xPIFNFIEFDVElWQSBDT04gXCJBQUFcIiBDVUFORE8gRUwgUmVBYiBIQSBTSURPIENPTlRFU1RBRE8gREUgTUFORVJBIElOQ09SUkVDVEEuIFwiQUFcIiB5IFwiQVwiIHNpZ25pZmljYSBxdWUgZWwgUmVBYiB0dXZvIGludGVyYWNjaW9uZXMgcG9zaXRpdmFzIGx1ZWdvIGRlIGxhIGZhbGxhLiAgQ1VBTkRPIEVTVEEgRU4gXCJudWxsXCIgTk8gU0UgVE9NQSBFTiBDVUVOVEEuICBEZSBsYSBcIlogYSBsYSBVXCIgaW5kaWNhbiB0aWVtcG9zIHByb2xvbmdhZG9zIGRlIGRlc2NhbnNvLlxyXG5cdCAgfSxcclxuXHQgIFwiaW5mb1wiIDoge1xyXG5cdFx0XCJsaWNlbnNlXCI6IFJlQWJsaWNlbnNlLFxyXG5cdFx0XCJzY29yZVwiIDogWyAgICAgICAgICAgIC8vLyBTRSBQT05ERVJBIEVMIFNDT1JFIERFIFRPRE9TIExPUyBQUk9DRVNPUyBQQVJBIFNBQ0FSIEVTVEEgUFVOVFVBQ0nDk05cclxuXHRcdCAgMFxyXG5cdFx0XSxcclxuXHRcdFwidGFnc1wiIDogdGFnc09mUmVBYiwgICAgICAgICAgICAvLy8gRVRJUVVFVEFTIFFVRSBHVUFSREFOIElORk9STUFDScOTTiBERUwgUmVBYiwgREUgRUpFQ1VDSU9OLCBZIERFIExBIFZFUlNJT04gUEFSQSBGQUNJTElUQVIgTyBTVUdFUklSIFNVIEFDVFVBTElaQUNJw5NOXHJcblx0XHRcInNjaG9vbD9cIiA6IFJlQWJTY2hvb2wsICAgICAgLy8vICAqKiogIElkZW50aWZpY2Fkb3JlcyBhY2Fkw6ltaWNvcyBlbiBjYXNvIGRlIHF1ZSBsb3MgaGF5YSwgY29tbyBub21icmUgZGUgbGEgaW5zdGl0dWNpw7NuLCBlc2N1ZG8sIGV0Yy4uXHJcblx0XHRcImdyb3VwSWRlbnRpZmllcj9cIiA6IFJlQWJHcm91cElkZW50aWZpZXIsICAgICAgLy8vIEdVQVJEQSBVTiBISVNUT1JJQUwgREUgTE9TIEdSVVBPUyBERSBFU1RVRElPIFBPUiBMT1MgUVVFIEhBIFBBU0FETyBFTCBSZUFiLiAgQUxHVU5BIERFIEVTVEEgSU5GT1JNQUNJw5NOIEVOUklRVUVDRSBMQVMgRVRJUVVFVEFTIChcInRhZ3NcIikgcGFyYSBlbCBhbmFsaXNpcyBkZSBkYXRvc1xyXG5cdFx0XCJpZGVudGlmaWNhdG9yT3JRcj9cIiA6IFJlYWJJZGVudGlmaWNhdG9yT3JRciwgICAgIC8vLyBHVUFSREEgVU4gQ8OTRElHTyBFTiBDQURBIEFSUkFZIFFVRSBJREVOVElGSUNBIEVMIFVTVUFSSU8gQ1JFQURPUiBERUwgU0lTTywgTE9TIFVTVUFSSU9TIFFVRSBIQU4gTU9ESUZJQ0FETyBTVSBDT05URU5JRE8sIFkgRUwgVUxUSU1PIFVTVUFSSU8gVEVORURPUiBERUwgTUlTTU9cclxuXHRcdFwiaW50ZXJuYWxpemF0aW9uP1wiIDogbnVsbCwgICAgICAvLy8gUFVOVEFKRSBHTE9CQUwgUkVBTCBPQ1VMVE8gRU4gVU4gQ8OTRElHTyBIQVNIIERFIFwiaW5mby5zY29yZVwiXHJcblx0XHRcImhyZWY/XCIgOiBudWxsICAgICAgLy8vIFNFIFVTQSBDT01PIFNFR1VORE8gRklMVFJPIENPUlJBQk9SQVRJVk8gREVMIExBRE8gREVMIEJBQ0tFTkQgUVVFIExPUyBEQVRPUyBERSBcImludGVybmFsaXphdGlvblwiLCBcInNjb3JlXCIgRSBcImlkZW50aWZpY2F0b3JPclFyXCIgXHJcblx0ICB9XHJcblx0fTtcclxufSIsImNvbnN0IGZhc3RBcnJheVN0YW5kYXJkQ29udmVydGVyID0gKCkgPT4ge30iLCJleHBvcnQgY29uc3QgZmFzdFdyaXRpbmdTdGFuZGFyZENvbnZlcnRlciA9ICgpID0+IHtcclxuXHJcbn0iLCIvKiogICAgICAgIDEuLSBjcmVhdGVSZUFiUHJvY2Vzc2VzKClcclxuICogICAgICAgICAgICAgRnVuY2nDs24gcHJpbmNpY3BhbFxyXG4gKiBSZXRvcm5hIHRvZG9zIGxvcyBwcm9jZXNvcyB5IGJpZnVyY2FjaW9uZXMgXHJcbiAqIHBhcmEgY29sb2NhcmxvcyBlbiBlbCBSZUFiIHByaW5jaXBhbFxyXG4gKiBcclxuICogQHBhcmFtIHthcnJheU9iamVjdH0gYXJyYXlPYmplY3RcclxuICogQHJldHVybiB7UmVBYlByb2Nlc3NBcnJheU9iamVjdH0gXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY3JlYXRlUmVBYlByb2Nlc3NlcyA9IGFycmF5T2JqZWN0ID0+IGFycmF5T2JqZWN0Lm1hcChwcm9jZXNzID0+IGNyZWF0ZVJlQWJQcm9jZXNzKHByb2Nlc3MpKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLyoqICAgICAgICAgICAgIDIuLSAgY3JlYXRlUmVBYlByb2Nlc3MoKVxyXG4gKiBJbnRlcnByZXRhIGxvcyBkYXRvcyBpbnRyb2R1Y2lkb3MgcG9yIGVsIHVzdWFyaW8gcGFyYSBcclxuICogY3JlYXIgbG9zIHByb2Nlc29zIHkgbGFzIGJpZnVyY2FjaW9uZXMgbmVjZXNhcmlhc1xyXG4gKiBcclxuICogQHBhcmFtIHsqfSBvYmplY3RPclN0cmluZyBcclxuICovXHJcbmNvbnN0IGNyZWF0ZVJlQWJQcm9jZXNzID0gKG9iamVjdE9yU3RyaW5nKSA9PiB7XHJcblx0bGV0IFJlQWJRdWVzdGlvbnMgPSBvYmplY3RPclN0cmluZy5wcmVndW50YSA/IG9iamVjdE9yU3RyaW5nLnByZWd1bnRhIDogb2JqZWN0T3JTdHJpbmcucHJlZ3VudGFzID8gb2JqZWN0T3JTdHJpbmcucHJlZ3VudGFzIDogb2JqZWN0T3JTdHJpbmcucXVlc3Rpb24gPyBvYmplY3RPclN0cmluZy5xdWVzdGlvbiA6IG9iamVjdE9yU3RyaW5nW1wicXVlc3Rpb24/XCJdID8gb2JqZWN0T3JTdHJpbmdbXCJxdWVzdGlvbj9cIl0gOiBvYmplY3RPclN0cmluZy5xdWVzdGlvbnMgPyBvYmplY3RPclN0cmluZy5xdWVzdGlvbnMgOiBvYmplY3RPclN0cmluZy5xdWVzdCA/IG9iamVjdE9yU3RyaW5nLnF1ZXN0IDogbnVsbDtcclxuXHRsZXQgUmVBYkNhbnZhcyA9IG9iamVjdE9yU3RyaW5nLmNhbnZhcyA/IG9iamVjdE9yU3RyaW5nLmNhbnZhcyA6IG51bGwgO1xyXG5cdGxldCBSZUFiQW5zd2VycyA9IG9iamVjdE9yU3RyaW5nLnJlc3B1ZXN0YSA/IG9iamVjdE9yU3RyaW5nLnJlc3B1ZXN0YSA6IG9iamVjdE9yU3RyaW5nLnJlc3B1ZXN0YXMgPyBvYmplY3RPclN0cmluZy5yZXNwdWVzdGFzIDogb2JqZWN0T3JTdHJpbmcuYW5zd2VyID8gb2JqZWN0T3JTdHJpbmcuYW5zd2VyIDogb2JqZWN0T3JTdHJpbmcuYW5zd2VycyA/IG9iamVjdE9yU3RyaW5nLmFuc3dlcnMgOiBudWxsO1xyXG5cdGxldCBSZUFiV3JvbmdBbnN3ZXJzID0gb2JqZWN0T3JTdHJpbmcucHJlZ3VudGFJbmNvcnJlY3RhID8gb2JqZWN0T3JTdHJpbmcucHJlZ3VudGFJbmNvcnJlY3RhIDogb2JqZWN0T3JTdHJpbmcucHJlZ3VudGFzSW5jb3JyZWN0YXMgPyBvYmplY3RPclN0cmluZy5wcmVndW50YXNJbmNvcnJlY3RhcyA6IG9iamVjdE9yU3RyaW5nLndyb25nQW5zd2VyID8gb2JqZWN0T3JTdHJpbmcud3JvbmdBbnN3ZXIgOiBvYmplY3RPclN0cmluZy53cm9uZ0Fuc3dlcnMgPyBvYmplY3RPclN0cmluZy53cm9uZ0Fuc3dlcnMgOiBudWxsO1xyXG5cdGxldCBSZUFiT3BlcmF0aW9ucyA9IG9iamVjdE9yU3RyaW5nLm9wZXJhdGlvbnMgPyBvYmplY3RPclN0cmluZy5vcGVyYXRpb25zIDogbnVsbDtcclxuXHRsZXQgUmVBYlNwYWNlID0gb2JqZWN0T3JTdHJpbmcuc3BhY2UgPyBvYmplY3RPclN0cmluZy5zcGFjZSA6IG51bGw7XHJcblxyXG5cdGxldCBSZUFiQW5vdGF0aW9ucyA9IG9iamVjdE9yU3RyaW5nLmFub3RhdGlvbnMgPyBvYmplY3RPclN0cmluZy5hbm90YXRpb25zIDogb2JqZWN0T3JTdHJpbmcuYW5vdGF0aW9uID8gb2JqZWN0T3JTdHJpbmcuYW5vdGF0aW9uIDogb2JqZWN0T3JTdHJpbmcuYW5vdGFjaW9uID8gb2JqZWN0T3JTdHJpbmcuYW5vdGFjaW9uIDogIG9iamVjdE9yU3RyaW5nLmFub3RhY2lvbmVzID8gb2JqZWN0T3JTdHJpbmcuYW5vdGFjaW9uZXMgOiBudWxsO1xyXG5cdGxldCBSZUFiTW5lbW9uaWNzID0gb2JqZWN0T3JTdHJpbmcubW5lbW9uaWNzID8gb2JqZWN0T3JTdHJpbmcubW5lbW9uaWNzIDogbnVsbDtcclxuXHRsZXQgUmVBYlF1ZXN0aW9uQW5zd2VyID0gb2JqZWN0T3JTdHJpbmcucXVlc3Rpb25BbnN3ZXIgPyBvYmplY3RPclN0cmluZy5xdWVzdGlvbkFuc3dlciA6IG9iamVjdE9yU3RyaW5nLnF1ZXN0QW5zd2VyID8gb2JqZWN0T3JTdHJpbmcucXVlc3RBbnN3ZXIgOiBvYmplY3RPclN0cmluZy5xdWVzdEFucyA/IG9iamVjdE9yU3RyaW5nLnF1ZXN0QW5zIDogbnVsbDsgICAgXHJcblx0bGV0IFJlQWJRdWVzdE91dFJlc291cmNlcyA9IG9iamVjdE9yU3RyaW5nLnF1ZXN0T3V0UmVzb3VyY2VzID8gb2JqZWN0T3JTdHJpbmcucXVlc3RPdXRSZXNvdXJjZXMgOiBudWxsO1xyXG5cdGxldCBSZUFiUmVhY3Rpb24gPSBvYmplY3RPclN0cmluZy5yZWFjdGlvbiA/IG9iamVjdE9yU3RyaW5nLnJlYWN0aW9uIDogbnVsbDtcclxuXHRsZXQgUmVBYlByb2Nlc3NSZWFjdGlvbk1hcCA9IG9iamVjdE9yU3RyaW5nLnByb2Nlc3NSZWFjdGlvbk1hcCA/IG9iamVjdE9yU3RyaW5nLnByb2Nlc3NSZWFjdGlvbk1hcCA6IG51bGw7XHJcblxyXG5cdGxldCBSZUFiQnJhbmNoZXMgPSBvYmplY3RPclN0cmluZy5icmFuY2ggPyBvYmplY3RPclN0cmluZy5icmFuY2ggOiBvYmplY3RPclN0cmluZy5icmFuY2hlcyA/IG9iamVjdE9yU3RyaW5nLmJyYW5jaGVzIDogb2JqZWN0T3JTdHJpbmcucmFtYSA/IG9iamVjdE9yU3RyaW5nLnJhbWEgOiBvYmplY3RPclN0cmluZy5yYW1hcyA/IG9iamVjdE9yU3RyaW5nLnJhbWFzIDogb2JqZWN0T3JTdHJpbmcucmFtaWZpY2FjaW9uID8gb2JqZWN0T3JTdHJpbmcucmFtaWZpY2FjaW9uIDogb2JqZWN0T3JTdHJpbmcucmFtaWZpY2FjaW9uZXMgPyBvYmplY3RPclN0cmluZy5yYW1pZmljYWNpb25lcyA6IG51bGw7XHJcblxyXG5cdHJldHVybiBSZUFiUHJvY2Vzc0NyZWF0b3IoUmVBYlF1ZXN0aW9ucyxSZUFiQ2FudmFzLFJlQWJBbnN3ZXJzLFJlQWJXcm9uZ0Fuc3dlcnMsUmVBYk9wZXJhdGlvbnMsUmVBYlNwYWNlLFJlQWJBbm90YXRpb25zLFJlQWJNbmVtb25pY3MsUmVBYlF1ZXN0aW9uQW5zd2VyLFJlQWJRdWVzdE91dFJlc291cmNlcyxSZUFiUmVhY3Rpb24sUmVBYlByb2Nlc3NSZWFjdGlvbk1hcCxSZUFiQnJhbmNoZXMpO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8qKiAgICAgIDMuLSAgUmVBYlByb2Nlc3NDcmVhdG9yKClcclxuICogRnVuY2nDs24gcXVlIGVudHJlZ2EgdG9kb3MgbG9zIHByb2Nlc29zIHkgXHJcbiAqIGJpZnVyY2FjaW9uZXMgcmVxdWVyaWRhc1xyXG4gKiBcclxuICogQHBhcmFtIHtzdHJpbmdPck51bWJlckFycmF5fSBSZUFiUXVlc3Rpb25zIFxyXG4gKiBAcGFyYW0ge3N0cmluZ09yTnVtYmVyQXJyYXl9IFJlQWJDYW52YXMgXHJcbiAqIEBwYXJhbSB7c3RyaW5nT3JOdW1iZXJBcnJheX0gUmVBYkFuc3dlcnMgXHJcbiAqIEBwYXJhbSB7c3RyaW5nT3JOdW1iZXJBcnJheX0gUmVBYldyb25nQW5zd2VycyBcclxuICogQHBhcmFtIHtzdHJpbmdPck51bWJlckFycmF5fSBSZUFiT3BlcmF0aW9ucyBcclxuICogQHBhcmFtIHtzdHJpbmdPck51bWJlckFycmF5fSBSZUFiU3BhY2UgXHJcbiAqIEBwYXJhbSB7c3RyaW5nT3JOdW1iZXJBcnJheX0gUmVBYkFub3RhdGlvbnMgXHJcbiAqIEBwYXJhbSB7c3RyaW5nT3JOdW1iZXJBcnJheX0gUmVBYk1uZW1vbmljcyBcclxuICogQHBhcmFtIHtzdHJpbmdPck51bWJlckFycmF5fSBSZUFiUXVlc3Rpb25BbnN3ZXIgXHJcbiAqIEBwYXJhbSB7c3RyaW5nT3JOdW1iZXJBcnJheX0gUmVBYlF1ZXN0T3V0UmVzb3VyY2VzIFxyXG4gKiBAcGFyYW0ge3N0cmluZ0FycmF5fSBSZUFiUmVhY3Rpb24gXHJcbiAqIEBwYXJhbSB7c3RyaW5nQXJyYXl9IFJlQWJQcm9jZXNzUmVhY3Rpb25NYXAgXHJcbiAqIEBwYXJhbSB7b2JqZWN0QXJyYXl9IFJlQWJCcmFuY2hlcyBcclxuICovXHJcbmNvbnN0IFJlQWJQcm9jZXNzQ3JlYXRvciA9IChSZUFiUXVlc3Rpb25zLFJlQWJDYW52YXMsUmVBYkFuc3dlcnMsUmVBYldyb25nQW5zd2VycyxSZUFiT3BlcmF0aW9ucyxSZUFiU3BhY2UsUmVBYkFub3RhdGlvbnMsUmVBYk1uZW1vbmljcyxSZUFiUXVlc3Rpb25BbnN3ZXIsUmVBYlF1ZXN0T3V0UmVzb3VyY2VzLFJlQWJSZWFjdGlvbixSZUFiUHJvY2Vzc1JlYWN0aW9uTWFwLFJlQWJCcmFuY2hlcykgPT57XHJcblx0cmV0dXJuIHsgXHJcblx0XHRcInByb2Nlc3NJZFwiIDogWyAgICAgICAgICAgICAgXHJcblx0XHQgIDFcclxuXHRcdF0sXHJcblx0XHRcInF1ZXN0aW9uP1wiIDogUmVBYlF1ZXN0aW9ucyxcclxuXHRcdFwiY2FudmFzP1wiIDogUmVBYkNhbnZhcyxcclxuXHRcdFwiYW5zd2VyXCIgOiBSZUFiQW5zd2VycyxcclxuXHRcdFwid3Jvbmc/XCIgOiBSZUFiV3JvbmdBbnN3ZXJzLFxyXG5cdFx0XCJhblNjb3JlXCIgOiBbICAgICAgICBcclxuXHRcdCAgMCwwXHJcblx0XHRdLFxyXG5cdFx0XCJpbnRlcmNvbmVjdGlvbnM/XCIgOiB7XHJcblx0XHQgIFwiYW5vdGF0aW9uc1wiOiBSZUFiQW5vdGF0aW9ucyxcclxuXHRcdCAgXCJtbmVtb25pY3NcIjogUmVBYk1uZW1vbmljcyxcclxuXHRcdCAgXCJxdWVzdGlvbkFuc3dlclwiOiBSZUFiUXVlc3Rpb25BbnN3ZXIsXHJcblx0XHQgIFwicXVlc3RBdXhSZXNvdXJjZXNcIjogUmVBYlF1ZXN0T3V0UmVzb3VyY2VzLCAgICAvLy8gUmVjdXJzb3MgY29tcGxlbWVudGFyaW9zIGEgbGEgcHJlc2VudGFjacOzbiBkZSBsYSBwcmVndW50YSAgLy8gIFJVVEEoUykgREUgSU1BR0VOLCBWSURFTywgU09OSURPLCBFVEMgWSBFTCBBUlJBWSBERSBRVUVTVElPTiBBTCBRVUUgRVNUw4EgQVNJR05BRE9cclxuXHRcdCAgXCJyZWFjdGlvblwiOiBSZUFiUmVhY3Rpb24sXHJcblx0XHQgIFwicHJvY2Vzc1JlYWN0aW9uTWFwXCI6IFJlQWJQcm9jZXNzUmVhY3Rpb25NYXAgICAvLy8vIFByb2dyYW1hcyBydXRhcyBlbnRyZSBsb3MgZWxlbWVudG9zIGFuc3dlciBhY3RpdmFkb3MgeSBiaWZ1cmNhY2lvbmVzIGVzcGVjw61maWNhcyBcImJyYW5jaFwiIGVuIGxvcyBzaWd1aWVudGVzIHByb2Nlc29zICAvLyBsYSBydXRhIGRlc3Rpbm8gZXMgbGEgaW5kaWNhZGEgZGVzcHVlcyBkZSAgXCIgOjogXCJcclxuXHRcdH0sXHJcblx0XHRcIm9wZXJhdGlvbnM/XCIgOiBSZUFiT3BlcmF0aW9ucywgICAgLy8vICAqICAgQVFVSSBTRSBHVUFSREEgTEEgRElEQUNUSUNBIElOVEVSTkEgZXNwYWNpYWwvcmVsYWNpb25hbCBQQVJBIEVOU0XDkUFSIEFMIFJlQWIgQSBFSkVDVVRBUiBMQSBPUEVSQUNJw5NOIE1BVEVNw4FUSUNBXHJcblx0XHRcInNwYWNlP1wiIDogUmVBYlNwYWNlLCAgICAgIC8vLyAgKiAgQVFVw40gU0UgR1VBUkRBTiBDT09SREVOQURBUyBZIEFSRUFTIERFIExBIFBBTlRBTExBIENPTiBGT1JNQVMgR0VPTUVUUklDQVMgUVVFIEFMIFBVTFNBUiBPIElOVEVSQUNUVUFSIERFIE1BTkVSQSBDT1JSRUNUQSwgUkVTVUVMVkUgRUwgUmVBYiBPIFBBU0EgQUwgU0lHVUlFTlRFIFBST0NFU09cclxuXHRcdFwiYnJhbmNoP1wiIDogUmVBYkJyYW5jaGVzID8gY3JlYXRlUmVBYlByb2Nlc3NlcyhSZUFiQnJhbmNoZXMpIDogbnVsbCAgIC8vLyBMYSByYW1pZmljYWNpw7NuIGRlIG9iamV0b3Mgc3VicHJvY2Vzb3MgZW4gY2FzbyBkZSBxdWUgbG9zIGhheWEsIHNvbiBndWFyZGFkb3MgYXF1w61cclxuXHQgIH0gXHJcbn0gXHJcbiIsIi8vIExPIERFIERFVEVDVEFSIFRBR1MgWSBUWVBFIEVOIE9UUk9TIE9CSkVUT1MgREVMIEFSUkFZIElNUExFTUVOVEFSTE8gREVTUFXDiVMgREUgUkVGQUNUT1JJWkFSIENyZWF0ZVJlQWJzXHJcbi8qKlxyXG4gKiBQYXJhIHZhbGlkYXIgc2kgZWwgdmFsb3IgZGUgUmVBYlR5cGUgc2UgZW5jdWVudHJhIGRlbnRybyBkZSBsb3MgdGlwb3MgcG9zaWJsZXNcclxuICogVHJhYmFqYSBjb24gbG9zIHZhbG9yZXMgZGUgdHlwZSB5IHRhZ3MgcGFyYSByZXRvcm5hciBlbCBhcnJheSBsaXN0byBwYXJhIGNvbG9jYXJzZSBlbiBlbCBSZUFiLmluZm8udGFnc1xyXG4gKiBTaSBubyBleGlzdGUgdHlwZSBuaSBudWxsLCBvIGFsZ3VuIGVsZW1lbnRvIHF1ZSBheXVkZSBhIGRlZmluaXIgZWwgdGlwbywgcmV0b3JuYSBbXCJDb25jZXB0c1wiXVxyXG4gKiBcclxuICogQHBhcmFtIHthcnJheSBvciBzdHJpbmd9IFJlQWJUeXBlIFxyXG4gKiBAcGFyYW0ge2FycmF5IG9yIHN0cmluZ30gdGFncyBcclxuICogQHJldHVybiB7YXJyYXl9XHJcbiAqIFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHR5cGVWYWxpZGF0b3IgPSAoUmVBYlR5cGUsdGFncykgPT4ge1xyXG4gICAgbGV0IHRhZ3NBcnJheSA9IHR5cGVvZiB0YWdzICE9IFwib2JqZWN0XCIgPyBbdGFnc10gOiB0YWdzO1xyXG5cclxuXHRpZiAoUmVBYlR5cGUgPT09IG51bGwgJiYgdGFncyA9PT0gbnVsbCl7XHJcblx0XHRyZXR1cm4gW1wiQ29uY2VwdHNcIl1cclxuXHR9IGVsc2UgaWYgKFJlQWJUeXBlICE9IG51bGwgJiYgdGFncyAhPSBudWxsKXtcclxuXHRcdGxldCB1bmlvblRhZ3MgPSB0YWdzQXJyYXkuc3BsaWNlKHRhZ3MubGVuZ3RoLDAsUmVBYlR5cGUpO1xyXG5cdFx0cmV0dXJuIGZvdW5kUmVBYlR5cGUodW5pb25UYWdzKSAgLy8gRlVOQ0lPTiBRVUUgUFJJTUVSTyBCVVNDQSBFTCBNQVRDSCBFWENBQ1RPIFkgU0kgTk8gTE8gRU5DVUVOVFJBLCBsbGFtYSBhIG90cmEgZnVuY2lvbiBxdWUgYWdyZWdhIGVsIHRpcG8gcG9yIHBhbGFicmFzIGNsYXZlXHJcblx0fSBlbHNlIGlmKFJlQWJUeXBlID09PSBudWxsKXtcclxuXHRcdHJldHVybiBmb3VuZFJlQWJUeXBlKHRhZ3NBcnJheSkgIC8vIEZVTkNJT04gUVVFIFBSSU1FUk8gQlVTQ0EgRUwgTUFUQ0ggRVhDQUNUTyBZIFNJIE5PIExPIEVOQ1VFTlRSQSwgbGxhbWEgYSBvdHJhIGZ1bmNpb24gcXVlIGFncmVnYSBlbCB0aXBvIHBvciBwYWxhYnJhcyBjbGF2ZVxyXG5cdH0gZWxzZSBpZih0YWdzID09PSBudWxsKXtcclxuICAgICAgICBsZXQgUmVBYlR5cGVBcnJheSA9IHR5cGVvZiBSZUFiVHlwZSAhPSBcIm9iamVjdFwiID8gW1JlQWJUeXBlXSA6IFJlQWJUeXBlO1xyXG5cdFx0cmV0dXJuIGZvdW5kUmVBYlR5cGUoUmVBYlR5cGVBcnJheSkgIC8vIEZVTkNJT04gUVVFIFBSSU1FUk8gQlVTQ0EgRUwgTUFUQ0ggRVhDQUNUTyBZIFNJIE5PIExPIEVOQ1VFTlRSQSwgbGxhbWEgYSBvdHJhIGZ1bmNpb24gcXVlIGFncmVnYSBlbCB0aXBvIHBvciBwYWxhYnJhcyBjbGF2ZVxyXG5cdH0gXHJcbn1cclxuXHJcblxyXG5jb25zdCBmb3VuZFJlQWJUeXBlID0gKGFycmF5VG9Gb3VuZCkgPT4ge1xyXG4gICAgbGV0IG5ld0FycmF5VG9Gb3VuZCA9IFsuLi5hcnJheVRvRm91bmRdO1xyXG5cclxuXHRpZih0eXBlTWF0Y2goYXJyYXlUb0ZvdW5kLHR5cGVDb2RlKSl7XHJcblx0XHRyZXR1cm4gcmVtb3ZlRHVwbGljYXRlKFtcIkNvZGVcIiwgLi4ubmV3QXJyYXlUb0ZvdW5kXSkgICBcclxuXHR9ZWxzZSBpZih0eXBlTWF0Y2goYXJyYXlUb0ZvdW5kLHR5cGVNYXRoKSl7XHJcblx0XHRyZXR1cm4gcmVtb3ZlRHVwbGljYXRlKFtcIk1hdGhcIiwgLi4ubmV3QXJyYXlUb0ZvdW5kXSkgICAgXHJcblx0fWVsc2V7XHJcblx0XHRyZXR1cm4gcmVtb3ZlRHVwbGljYXRlKFtcIkNvbmNlcHRzXCIsIC4uLm5ld0FycmF5VG9Gb3VuZF0pICAgXHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbmNvbnN0IHR5cGVDb2RlID0gW1wiY29kZVwiLFwiY29kaWdvXCIsXCJqYXZhc2NyaXB0XCIsXCJwaHl0b25cIixcImdpdFwiLFwiamF2YVwiLFwicnVieVwiXTtcclxuY29uc3QgdHlwZU1hdGggPSBbXCJtYXRoXCIsXCJtYXRlbWF0aWNhc1wiLFwic3VtYVwiLFwic3VtYXNcIixcInJlc3RhXCIsXCJyZXN0YXNcIixcIm11bHRpcGxpY2FjaW9uXCIsXCJkaXZpc2lvblwiLFwiYWxnZWJyYVwiXTtcclxuY29uc3QgdHlwZVNwYWNlID0gW1wic3BhY2VcIl07XHJcblxyXG5jb25zdCB0eXBlTWF0Y2ggPSAoYXJyYXlUYWdzLGFycmF5VHlwZU1hdGNoKSA9PiB7XHJcblx0Zm9yKGxldCBLZXlXb3JkRWxlbWVudCBvZiBhcnJheVR5cGVNYXRjaCl7XHJcbiAgICAgICAgbGV0IFJlQWJUeXBlRm91bmRlZCA9IGFycmF5VGFncy5maWx0ZXIoZWxlbWVudCA9PiBlbGVtZW50LnRvTG93ZXJDYXNlKCkubWF0Y2gobmV3IFJlZ0V4cChLZXlXb3JkRWxlbWVudCkpKVxyXG4gICAgICAgIGlmIChSZUFiVHlwZUZvdW5kZWQubGVuZ3RoID49IDEpe1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuXHR9ICBcclxufSBcclxuXHJcblxyXG5cclxuLyoqICBSRU1VRVZFIEVMIFwiVEFHXCIgU0lNSUxBUiBBTCBcIlRZUEVcIiBFTiBDQVNPIERFIFFVRSBMTyBIQVlBIFxyXG4gKiBcclxuICogQHBhcmFtIHthcnJheX0gYXJyYXlUb1JldmlldyBcclxuICogQHJldHVybiB7YXJyYXl9XHJcbiAqIFxyXG4gKiByZW1vdmVEdXBsaWNhdGUgUE9SIEFIT1JBIE5PIEZVTkNJT05BXHJcbiAqIC5zcGxpY2Ugc2UgY29tcG9ydGEgbXV5IGRpZmVyZW50ZSBhIGxvIHF1ZSBkaWNlIGVsIG1hbnVhbCBkZSBNb3ppbGxhIGRlIGNvbW8gc2UgY29tcG9ydGFcclxuICogXHJcbiAqIGFycmF5VG9SZXZpZXcuc3BsaWNlKDEsNCkgIFxyXG4gKiBwcmltZXIgYXJndW1lbnRvIFwiMVwiIGEgcGFydGlyIGRlIGRvbmRlIHNlIHF1aWVyZSBib3JyYXJcclxuICogc2VndW5kbyBhcmd1bWVudG8gXCI0XCIgbG9zIHF1ZSBzZSBxdWllcmVuIGNvbnNlcnZhciBhIHBhcnRpciBkZSBsYSBwb3NpY2lvbiBkb25kZSBzZSBib3JyYVxyXG4gKi9cclxuY29uc3QgcmVtb3ZlRHVwbGljYXRlID0gKGFycmF5VG9SZXZpZXcpID0+IHtcclxuICAgIGZvcihsZXQgaT0wOyBpPD0gYXJyYXlUb1Jldmlldy5sZW5ndGg7IGkrKyl7ICAgICAgICBcclxuICAgICAgICBpZiAoYXJyYXlUb1Jldmlld1swXS50b0xvd2VyQ2FzZSA9PSBhcnJheVRvUmV2aWV3WyhpKzEpXS50b0xvd2VyQ2FzZSl7ICAgLy8gY2FtYmlhcmxvIGEgLm1hdGNoIHBhcmEgcXVlIHNlYSBjYXNlIHNlbnNpdGl2ZVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImkgPSBcIiArIGkpIFxyXG4gICAgICAgICAgICByZXR1cm4gYXJyYXlUb1JldmlldyAvKi5zcGxpY2UoKGkrMSksMSk7ICovXHJcbiAgICAgICAgICAgIC8vYnJlYWtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJyYXlUb1Jldmlld1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=