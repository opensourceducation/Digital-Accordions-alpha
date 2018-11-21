 import { ReAbCollection } from '../ReAb-Database/ReAb-Database' ;
 import {} from './2-mnemonics';


 var Acordeones = ReAbCollection;

 console.log(Acordeones);














////////////     1.-    ESTE OBJETO DECIDE QUE ReAb O ReAbs SIMULTANEOS SE VAN A EJECUTAR 

export class ReAbSelect {


//         	     a) Esta función busca el o los ReAbs con el rank priority más alto.   Si solo hay 1 este se ejecuta
static	rankPriorityHighest () {
		 var RankPriorityMaximoJavascript = Acordeones.filter(Acordeones => Acordeones.rank.priority > 2 );
		 console.log(RankPriorityMaximoJavascript); // 		
	}



//                        ** )  Si más de 1 ReAb tiene el rank.priority igual de alto, se ejecuta el método:
//                      SimultaneousReAbs.multipleConcepts ()



//               b) Si más de 1 ReAb tiene el rank.priority igual de alto, pero no coinciden en el tag "Concepts", 
//                  este método selecciona entre estos ReAbs el que tenga el rank.turn en 0

static chooseForRankTurn () {}


//                           ** )   Si más de 1 ReAb tiene el rank.turn igual de alto, se ejecuta el método:
//                      SimultaneousReAbs.multipleConcepts () 




//               c) Si más de 1 ReAb tiene el rank.turn en 0, pero no coinciden en el tag "Concepts", este método 
//                  selecciona entre estos ReAbs el que tenga el rank.preferenceOfLearning más bajo

static chooseForPreferenceOfLearning () {}






}
































////////////                  2.-    ESTE OBJETO TIENE MÉTODOS QUE DETECTAN EL TIPO DE ReAb QUE SE VA A EJECUTAR 
////                                 y sus propiedades internas     

export class ReAbType {

//     Con un if en base al primer tag para saber de cual de los 4 tipos de ReAb se está ejecutando,
//     se pasa a usar el método para leer las propiedades internas correspondiente al tipo de ReAb





// Una vez terminada esta serie de pasos, se pasa a los métodos de mnemonics


}


























////////////            **      3.-    ESTE OBJETO TIENE MÉTODOS QUE BUSCAN ReAbs DEL MISMO TIPO AL QUE SE VA A EJECUTAR     

export class SimultaneousReAbs {



//    Este método busca ReAbs que tengan en el primer tag "Concepts" y que solo tengan una respuesta correcta. De ser así 
//    se ejecutarían hasta 3 ReAbs que cumpliesen estas condiciones en una sola pantalla Y SE PASARÍA DIRECTAMENTE A LA 
//    CLASE 4 " ExcersiceSelect{} "  SI NO SE CUMPLEN LAS CONDICIONES PARA EJECUTAR LOS MÉTODOS DESEADOS DEL MODULO "2-mnemonics"

static multipleConcepts () {}

}

















////////////                  4.-    ESTE OBJETO TIENE MÉTODOS QUE escogen/deciden que diseño de Ejercicio va a 
////                                 implementarse en esta ocasión para el ReAb(s) escogido(s) tomando también 
////                                 en cuenta la información arrojada 

export class ExcersiceSelect{}    
















////////////                  5.-    ESTE OBJETO TIENE MÉTODOS QUE AUMENTAN O DISMINUYEN LAS PUNTUACIONES DE SCORES DE 
////                                 INTERIORIZACION DENTRO DEL ReAb(s) ejecutado(s)

export class ReAbScore{}





