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
    ////////////     1.-    ESTE OBJETO DECIDE QUE ReAb O ReAbs SIMULTANEOS SE VAN A EJECUTAR 
    var ReAbSelect = (function () {
        function ReAbSelect() {
        }
        //         	     a) Esta función busca el o los ReAbs con el rank priority más alto.   Si solo hay 1 este se ejecuta
        ReAbSelect.rankPriorityHighest = function () {
            var RankPriorityMaximoJavascript = Acordeones.filter(function (Acordeones) { return Acordeones.rank.priority > 2; });
            console.log(RankPriorityMaximoJavascript); // 		
        };
        return ReAbSelect;
    })();
    exports.ReAbSelect = ReAbSelect;
    ////////////                  2.-    ESTE OBJETO TIENE MÉTODOS QUE DETECTAN EL TIPO DE ReAb QUE SE VA A EJECUTAR 
    ////                                 y sus propiedades internas     
    var ReAbType = (function () {
        function ReAbType() {
        }
        return ReAbType;
    })();
    exports.ReAbType = ReAbType;
    ////////////            **      3.-    ESTE OBJETO TIENE MÉTODOS QUE BUSCAN ReAbs DEL MISMO TIPO AL QUE SE VA A EJECUTAR     
    var SimultaneousReAbs = (function () {
        function SimultaneousReAbs() {
        }
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
    ////                                 INTERIORIZACION DENTRO DEL ReAb(s) ejecutado(s)
    var ReAbScore = (function () {
        function ReAbScore() {
        }
        return ReAbScore;
    })();
    exports.ReAbScore = ReAbScore;
});
//# sourceMappingURL=1-ReAbSelect.js.map