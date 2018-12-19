(function (deps, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(deps, factory);
    }
})(["require", "exports", './1-ReAbSelect'], function (require, exports) {
    var 1_ReAbSelect_1 = require('./1-ReAbSelect');
    // import {} from '../Exercise-Designs/Code/Console' ;
    //////////////////////////////////////////////////////////////////////////////////////
    //
    //                             AVAILABLE EXERCISES
    //////////////////////////////////////////////////////////////////////////////////////
    // Catalogo de ejercicios que ejecuta tu entorno de ejecución
    var exerciseCatalog = (function () {
        function exerciseCatalog() {
        }
        return exerciseCatalog;
    })();
    exports.exerciseCatalog = exerciseCatalog;
    /////////////////////////////////////////////////
    //      SUGERENCIA DE ESCRITURA ALTERNATIVA
    //   
    // export class exerciseCode {}
    // export class exerciseConcepts {}
    // export class exerciseMath {}
    // export class exerciseSpace {}
    // export class exerciseMixed {}
    //
    ////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////
    //
    //                             		EXECUTE
    //////////////////////////////////////////////////////////////////////////////////////
    // Aquí se toman las desiciones de ejecución de todos los archivos de ProReLedge según el entorno de Ejecución de Aprendizaje
    var learningExecute = (function () {
        function learningExecute(seleccionarReAb, MultiplesReAbs, puntuacion) {
            this.seleccionarReAb = 1_ReAbSelect_1.ReAbSelector;
            this.MultiplesReAbs = 1_ReAbSelect_1.SimultaneousReAbs;
            this.puntuacion = 1_ReAbSelect_1.ReAbScore;
            seleccionarReAb.chooseRankPriorityHighest();
            1_ReAbSelect_1.SimultaneousReAbs.multipleConcepts();
            seleccionarReAb.chooseForRankTurn();
            1_ReAbSelect_1.SimultaneousReAbs.multipleConcepts();
            seleccionarReAb.chooseForPreferenceOfLearning();
            seleccionarReAb.selectProcess();
            puntuacion.collectionPosition();
        }
        return learningExecute;
    })();
    exports.learningExecute = learningExecute;
    //////////////////////////////////////////////////////////////////////////////////////
    //
    //                             LEARNING ENVIRONMENTS
    //////////////////////////////////////////////////////////////////////////////////////
    // Entornos de aprendizaje interesantes en los que puede usarse ProReLedge
    // Puedes mandar a llamar alguno de estos objetos en tu entorno de ejecución
    // Puedes copiar y pegar código, links o cualquier tipo de sugerencias para mejorar y/o completar el funcionamiento del entorno de ejecución específico
    var learningEnvironments = (function () {
        function learningEnvironments() {
        }
        ////////////////////////////////////////////////////////////////////////////////////////
        //
        //    	a)   SI SE EJECUTA EN LA PANTALLA DE BLOQUEO "Lockscreen" DEL CELULAR
        learningEnvironments.LockScreen = function () {
        };
        //////////////////////////////////////////////////////////////////////////////////////
        //
        //                             copy paste o sugerencias para LockScreen
        //////////////////////////////////////////////////////////////////////////////////////
        //
        //
        //
        //		
        //		
        //
        //
        //
        //
        //
        //
        //////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////////////
        //
        //    b) PEQUEÑOS CICLOS DE APRENDIZAJE DURANTE EL DÍA RECORDADOS CON UN AVISO DEL NAVEGADOR
        learningEnvironments.MicroLearning = function () {
            var MicroLearningExecute = new learningExecute(1_ReAbSelect_1.ReAbSelector, 1_ReAbSelect_1.SimultaneousReAbs, 1_ReAbSelect_1.ReAbScore);
            // ARCHIVO console.js
            var question = document.getElementById("questionReAb");
            var textBox = document.getElementById("answerBox");
            // TEXTO DE LA PREGUNTA EN LA PARTE SUPERIOR DE LA CONSOLA
            question.textContent = 1_ReAbSelect_1.ReAbSelect[0].process[0]["question?"];
            textBox.addEventListener("keyup", function (tecla) {
                if (tecla.key == "Enter") {
                    // RESPUESTA ESCRITA POR EL USUARIO
                    1_ReAbSelect_1.writtenAnswer = document.getElementById("answerBox").value;
                    console.log("process_to_score =");
                    console.log(1_ReAbSelect_1.process_to_score);
                    1_ReAbSelect_1.ReAbScore.score();
                    document.getElementById("answerBox").value = "";
                    var MicroLearningExecuteEnter = new learningExecute(1_ReAbSelect_1.ReAbSelector, 1_ReAbSelect_1.SimultaneousReAbs, 1_ReAbSelect_1.ReAbScore);
                    // TEXTO DE LA PREGUNTA EN LA PARTE SUPERIOR DE LA CONSOLA
                    question.textContent = 1_ReAbSelect_1.ReAbSelect[0].process[0]["question?"];
                }
            });
        };
        //////////////////////////////////////////////////////////////////////////////////////
        //
        //                             copy paste o sugerencias para learnSession
        //////////////////////////////////////////////////////////////////////////////////////
        //
        //
        //
        //		
        //		
        //
        //
        //
        //
        //
        //
        //////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////////////
        //
        //   	 c)   SI SE EJECUTA DE 5 A 10 MINUTOS AL DÍA EN UN ENTORNO WEB O MOVIL
        learningEnvironments.LearnSession = function () {
        };
        //////////////////////////////////////////////////////////////////////////////////////
        //
        //                             copy paste o sugerencias para LockScreen
        //////////////////////////////////////////////////////////////////////////////////////
        //
        //
        //
        //		
        //		
        //
        //
        //
        //
        //
        //
        //////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////////////
        //
        //  				  d)	VIDEOJUEGOS QUE EJECUTEN LOS ACORDEONES 
        learningEnvironments.VideoGame = function () {
        };
        return learningEnvironments;
    })();
    exports.learningEnvironments = learningEnvironments;
    //////////////////////////////////////////////////////////////////////////////////////
    //
    //                          ENTORNO DISPONIBLE MicroLearning ()
    //        Falta terminar exercise select y ReAbScore Para ejecución exitosa
    //////////////////////////////////////////////////////////////////////////////////////
    learningEnvironments.MicroLearning();
});
//////////////////////////////////////////////////////////////////////////////////////
//# sourceMappingURL=3-ReAbExecute.js.map