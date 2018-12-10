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
    var simultaneous = false;
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
            if (simultaneous == false) {
                var ReAbMinTurn = [];
                if (exports.ReAbSelect.length >= 2) {
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
            }
        };
        ReAbSelector.chooseForPreferenceOfLearning = function () {
            if (simultaneous == false) {
                var ReAbChooseForLearning = [];
                if (exports.ReAbSelect.length >= 1) {
                    for (var i = 0; i <= 999; i++) {
                        if (ReAbChooseForLearning.length >= 1) {
                            console.log("Filtro de preferencia de aprendizaje >=1");
                            exports.ReAbSelect = ReAbChooseForLearning;
                            console.log(exports.ReAbSelect);
                            break;
                        }
                        ReAbChooseForLearning = exports.ReAbSelect.filter(function (ReAbSelecTurn) { return ReAbSelecTurn.rank.preferenceOfLearning == i; });
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
        return ReAbScore;
    })();
    exports.ReAbScore = ReAbScore;
});
//# sourceMappingURL=1-ReAbSelect.js.map