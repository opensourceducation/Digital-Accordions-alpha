(function (deps, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(deps, factory);
    }
})(["require", "exports", '../ReAb-Database/ReAb-Database'], function (require, exports) {
    var ReAb_Database_1 = require('../ReAb-Database/ReAb-Database');
    var Acordeones = ReAb_Database_1.ReAbCollection;
    console.log(Acordeones);
    exports.process_to_score = 0;
    exports.ReAbPosition = [-1];
    exports.summation = 0;
    exports.simultaneous = false;
    ////////////     1.-    ESTE OBJETO DECIDE QUE ReAb O ReAbs SIMULTANEOS SE VAN A EJECUTAR 
    var ReAbSelector = (function () {
        function ReAbSelector() {
        }
        //   Esta función busca el o los ReAbs con el rank priority más alto.   Si solo hay 1 este se ejecuta
        ReAbSelector.chooseRankPriorityHighest = function () {
            var CicloPriority = ["AAA", "AA", "A", null];
            for (var _i = 0; _i < CicloPriority.length; _i++) {
                var letra = CicloPriority[_i];
                exports.ReAbSelect = Acordeones.filter(function (Acordeones) { return Acordeones.rank.priority == letra; });
                if (exports.ReAbSelect.length >= 2) {
                    console.log("Hay 2 o más acordeones con rank priority de " + letra);
                    break;
                }
                else if (exports.ReAbSelect.length == 1) {
                    console.log("Hay 1 acordeón con rank priority de " + letra);
                    break;
                }
                else {
                    console.log(" NO HAY acordeones con rank priority de " + letra);
                }
            }
        };
        ReAbSelector.chooseForRankTurn = function () {
            var ReAbMinTurn = [];
            if (exports.simultaneous == false && exports.ReAbSelect.length >= 2) {
                for (var i = 0; i <= 33; i++) {
                    if (ReAbMinTurn.length >= 1) {
                        console.log("1 o más acordeones tienen el mismo rank turn");
                        exports.ReAbSelect = ReAbMinTurn;
                        console.log(exports.ReAbSelect);
                        break;
                    }
                    ReAbMinTurn = exports.ReAbSelect.filter(function (ReAbSelecTurn) { return ReAbSelecTurn.rank.turn == i; });
                }
            }
        };
        ReAbSelector.chooseForPreferenceOfLearning = function () {
            var ReAbChooseForLearning = [];
            if (exports.simultaneous == false && exports.ReAbSelect.length >= 2) {
                for (var i = 0; i <= 999; i++) {
                    if (ReAbChooseForLearning.length >= 1) {
                        console.log("Filtro de preferencia de aprendizaje " + i);
                        exports.ReAbSelect = ReAbChooseForLearning;
                        console.log(exports.ReAbSelect);
                        break;
                    }
                    ReAbChooseForLearning = exports.ReAbSelect.filter(function (ReAbSelecTurn) { return ReAbSelecTurn.rank.preferenceOfLearning == i; });
                }
            }
        };
        ReAbSelector.selectProcess = function () {
            if (exports.simultaneous == false && exports.ReAbSelect[0].process.length >= 2) {
                for (var _i = 0, _a = exports.ReAbSelect[0].process; _i < _a.length; _i++) {
                    var proceso = _a[_i];
                    // Este método se modificará en versiones posteriores
                    if (exports.ReAbSelect[0].process[0].anScore[exports.process_to_score] == 0 || exports.ReAbSelect[0].process[0].anScore[exports.process_to_score] == null) {
                        break;
                    }
                    else {
                        exports.process_to_score++;
                    }
                }
            }
        };
        return ReAbSelector;
    })();
    exports.ReAbSelector = ReAbSelector;
    ////////////                  2.-    ESTE OBJETO TIENE MÉTODOS QUE DETECTAN PROPIEDADES INTERNAS Y EL TIPO DE ReAb QUE SE VA A EJECUTAR    
    var ReAbType = (function () {
        function ReAbType() {
        }
        return ReAbType;
    })();
    exports.ReAbType = ReAbType;
    ////////////                  3.-    ESTE OBJETO TIENE MÉTODOS QUE BUSCAN ReAbs DEL MISMO TIPO AL QUE SE VA A EJECUTAR     
    var SimultaneousReAbs = (function () {
        function SimultaneousReAbs() {
        }
        //    Este método busca ReAbs que tengan en el primer tag "Concepts" y que solo tengan una respuesta correcta. De ser así 
        //    se ejecutarían hasta 3 ReAbs que cumpliesen estas condiciones en una sola pantalla Y SE PASARÍA DIRECTAMENTE A LA 
        //    CLASE 4 " ExcersiceSelect{} "  SI NO SE CUMPLEN LAS CONDICIONES PARA EJECUTAR LOS MÉTODOS DESEADOS DEL MODULO "2-mnemonics"
        SimultaneousReAbs.multipleConcepts = function () { };
        return SimultaneousReAbs;
    })();
    exports.SimultaneousReAbs = SimultaneousReAbs;
    ////////////                  4.-    ESTE OBJETO TIENE MÉTODOS QUE escogen/deciden que diseño de Ejercicio va a 
    ////                                 implementarse en esta ocasión para el ReAb(s) escogido(s) tomando también 
    ////                                 en cuenta la información arrojada 
    var ExcersiceSelect = (function () {
        function ExcersiceSelect() {
        }
        return ExcersiceSelect;
    })();
    exports.ExcersiceSelect = ExcersiceSelect;
    ////////////                  5.-    ESTE OBJETO TIENE MÉTODOS QUE AUMENTAN O DISMINUYEN LAS PUNTUACIONES DE SCORES DE 
    ////                                 INTERIORIZACION DENTRO DEL ReAb(s) EJECUTADO(S)
    var ReAbScore = (function () {
        function ReAbScore() {
        }
        ReAbScore.score = function () {
            ////  Esto evalua si la pregunta del ReAb es correcta o no
            var respuestas = exports.ReAbSelect[0].process[0].answer;
            var preguntas = exports.ReAbSelect[0].process[0]["question?"];
            var rightAnswer;
            var anScoreArray = 0;
            for (var _i = 0; _i < respuestas.length; _i++) {
                var consulta = respuestas[_i];
                anScoreArray++;
                if (consulta == exports.writtenAnswer) {
                    console.log("COOORRECTOOOO !!");
                    rightAnswer = true;
                    break;
                }
                else {
                    console.log("MAL");
                    rightAnswer = false;
                }
            }
            console.log("ReAb seleccionado antes de aplicar los scores :");
            console.log(exports.ReAbSelect);
            if (rightAnswer) {
                console.log("sis");
                ReAb_Database_1.ReAbCollection[exports.ReAbPosition[0]].process[exports.process_to_score].anScore[anScoreArray]++;
                ReAb_Database_1.ReAbCollection[exports.ReAbPosition[0]].process[exports.process_to_score].anScore[0]++;
                ReAbScore.weigh_ponderar();
                ReAbScore.newRankPriority();
                ReAbScore.turnReset();
            }
            else {
                console.log("non");
                ReAb_Database_1.ReAbCollection[exports.ReAbPosition[0]].process[exports.process_to_score].anScore[anScoreArray]--;
                ReAb_Database_1.ReAbCollection[exports.ReAbPosition[0]].process[exports.process_to_score].anScore[0]--;
                ReAb_Database_1.ReAbCollection[exports.ReAbPosition[0]].rank.priority = "AAA";
                ReAbScore.weigh_ponderar();
                ReAbScore.turnReset();
            }
            console.log("ReAb seleccionado DESPUES!! de aplicar los scores :");
            console.log(ReAb_Database_1.ReAbCollection[exports.ReAbPosition[0]]);
            ReAbScore.turn();
            rightAnswer;
            anScoreArray = 0;
            exports.summation = 0;
            exports.ReAbPosition = [-1];
            exports.ReAbSelect = [];
            exports.process_to_score = 0;
            exports.simultaneous = false;
        };
        ReAbScore.turn = function () {
            ////  Esto baja el "turn" de toda tu colección de ReAbs
            for (var i = 0; i < ReAb_Database_1.ReAbCollection.length; i++) {
                if (ReAb_Database_1.ReAbCollection[i].rank.turn >= 1) {
                    ReAb_Database_1.ReAbCollection[i].rank.turn--;
                }
            }
        };
        ///// Este ciclo localiza la posición del array del/los ReAb(s) de ReAb Collection seleccionado(s)
        // !!  FALTA COLOCAR LA VARIACIÓN CUANDO SE TRATA DE MÁS DE 1ReAb (pero para esto es necesario crear 
        //     concepts y tener listo el metodo multipleReAbs funcionando para regresar aqui !!)
        ReAbScore.collectionPosition = function () {
            for (var i = 0; i < ReAb_Database_1.ReAbCollection.length; i++) {
                exports.ReAbPosition[0]++;
                if (ReAb_Database_1.ReAbCollection[i] == exports.ReAbSelect[0]) {
                    console.log("Let ReAbPosition es igual a : ");
                    console.log(exports.ReAbPosition);
                    break;
                }
            }
        };
        ReAbScore.weigh_ponderar = function () {
            for (var i = 0; i < ReAb_Database_1.ReAbCollection[exports.ReAbPosition[0]].process.length; ++i) {
                exports.summation += ReAb_Database_1.ReAbCollection[exports.ReAbPosition[0]].process[i].anScore[0];
            }
            var division = ReAb_Database_1.ReAbCollection[exports.ReAbPosition[0]].process.length;
            ReAb_Database_1.ReAbCollection[exports.ReAbPosition[0]].info.score[0] = exports.summation / division;
            console.log("suMMation vale ::");
            console.log(exports.summation);
            console.log("DIVISION es igual a :");
            console.log(division);
            console.log("PONDERA !");
            console.log(ReAb_Database_1.ReAbCollection[exports.ReAbPosition[0]].info.score[0]);
        };
        ReAbScore.turnReset = function () {
            /////    A MODIFICAR UNA VEZ SE EJECUTEN MULTIPLES ReAbs 
            if (ReAb_Database_1.ReAbCollection[exports.ReAbPosition[0]].rank.turn == 0 && ReAb_Database_1.ReAbCollection[exports.ReAbPosition[0]].info.score[0] >= 1) {
                ReAb_Database_1.ReAbCollection[exports.ReAbPosition[0]].rank.turn = ReAb_Database_1.ReAbCollection[exports.ReAbPosition[0]].info.score[0];
            }
        };
        ReAbScore.newRankPriority = function () {
            var CicloPriority = ["AAA", "AA", "A", null];
            var Posterior_Length = 0;
            for (var _i = 0; _i < CicloPriority.length; _i++) {
                var Priority = CicloPriority[_i];
                Posterior_Length++;
                if (ReAb_Database_1.ReAbCollection[exports.ReAbPosition[0]].rank.priority == Priority && ReAb_Database_1.ReAbCollection[exports.ReAbPosition[0]].rank.priority != null) {
                    console.log("El rank Priority bajó de " + Priority + " a " + CicloPriority[Posterior_Length]);
                    ReAb_Database_1.ReAbCollection[exports.ReAbPosition[0]].rank.priority = CicloPriority[Posterior_Length];
                    Posterior_Length = 0;
                    break;
                }
            }
        };
        return ReAbScore;
    })();
    exports.ReAbScore = ReAbScore;
});
//# sourceMappingURL=1-ReAbSelect.js.map