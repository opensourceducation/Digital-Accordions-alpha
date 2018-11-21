// Aquí se toman las desiciones de ejecución de todos los archivos de ProReLedge según el entorno de Ejecución de Aprendizaje
(function (deps, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(deps, factory);
    }
})(["require", "exports", './1-ReAbSelect'], function (require, exports) {
    // Puedes mandar a llamar alguno de estos módulos en tu entorno de ejecución
    // O puedes copiar y pegar este código para adherir las funciones a tu entorno de ejecución exportando también los modulos, cuidando siempre de revisar las rutas relativas
    var 1_ReAbSelect_1 = require('./1-ReAbSelect');
    //    a)   SI SE EJECUTA EN LA PANTALLA DE BLOQUEO "Lockscreen" DEL CELULAR
    var Lockscreen = (function () {
        function Lockscreen(seleccionarReAb) {
            this.seleccionarReAb = 1_ReAbSelect_1.ReAbSelect;
            seleccionarReAb.rankPriorityHighest();
        }
        return Lockscreen;
    })();
    exports.Lockscreen = Lockscreen;
    var ejecucionLockscreen = new Lockscreen(1_ReAbSelect_1.ReAbSelect); // ejemplo lockscreen
    //////////////////////////////////////////////////////////////////////////////////////
    //
    //                             Copy Paste para Lockscreen
    //////////////////////////////////////////////////////////////////////////////////////
    //
    //
    //   1.-    ESTE OBJETO DECIDE QUE ReAb O ReAbs SIMULTANEOS SE VAN A EJECUTAR   
    //		
    //		ReAbSelect.rankPriorityHighest();
    //
    //
    //
    //   2.-   ESTE OBJETO TIENE MÉTODOS QUE DETECTAN EL TIPO DE ReAb QUE SE VA A EJECUTAR      
    //
    //		ReAbSelect.ReAbType();   
    //
    //
    //
    //  3.-   ESTE OBJETO TIENE MÉTODOS QUE BUSCAN ReAbs DEL MISMO TIPO AL QUE SE VA A EJECUTAR
    //
    //		ReAbSelect.SimultaneousReAbs();
    //
    //
    //
    //	4.-   ESTE OBJETO TIENE MÉTODOS QUE deciden que diseño de Ejercicio va a implementarse 
    //
    //		ReAbSelect.ExcersiceSelect();
    //
    //
    //
    //	5.-   ESTE OBJETO TIENE MÉTODOS QUE aumentan o disminuyen las puntuaciones de Scores de 
    //		  interiorización dentro de/los ReAb(s) ejecutados(s)
    //
    //		ReAbSelect.ReAbScore();
    //
    //
    //
    //////////////////////////////////////////////////////////////////////////////////////
    //    b)   SI SE EJECUTA DE 5 A 10 MINUTOS AL DÍA EN UN ENTORNO WEB O MOVIL
    var learnSession = (function () {
        function learnSession() {
        }
        return learnSession;
    })();
    exports.learnSession = learnSession;
});
//////////////////////////////////////////////////////////////////////////////////////
//
//                             copy paste para learnSession
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
//
//////////////////////////////////////////////////////////////////////////////////////
//# sourceMappingURL=3-ReAbExecute.js.map