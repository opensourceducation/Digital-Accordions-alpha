 import { ReAbCollection } from '../ReAb-Database/ReAb-Database' ;
 import {} from './2-mnemonics';


 var Acordeones = ReAbCollection;
 console.log(Acordeones);

 export let ReAbSelect;

 let simultaneous = false;





////////////     1.-    ESTE OBJETO DECIDE QUE ReAb O ReAbs SIMULTANEOS SE VAN A EJECUTAR 
export class ReAbSelector {


    //   Esta función busca el o los ReAbs con el rank priority más alto.   Si solo hay 1 este se ejecuta
    static	chooseRankPriorityHighest () {

        var CicloPriority = ["AAA","AA","A",null];

        for ( let letra of CicloPriority) {

          ReAbSelect = Acordeones.filter(Acordeones => Acordeones.rank.priority == letra );

            if (ReAbSelect.length >= 2) {                            
                    console.log("Hay 2 o más acordeones con rank priority de " + letra);
                    break;

               }  else if (ReAbSelect.length == 1) {                          
                    console.log("Hay 1 acordeón con rank priority de " + letra);
                    break;

             }       else {                                                                     
                    console.log(" NO HAY acordeones con rank priority de " + letra);
             }

        }

    }





    static chooseForRankTurn () {     

        if (simultaneous == false) {

          let ReAbMinTurn = [];

          if (ReAbSelect.length >= 2){

            for (let i=0; i<= 33; i++) {

                if (ReAbMinTurn.length >= 1) {
                  console.log("1 o más acordeones tienen el mismo rank turn");
                  ReAbSelect = ReAbMinTurn;
                  console.log(ReAbSelect);
                  break;
                }

              ReAbMinTurn = ReAbSelect.filter(ReAbSelecTurn => ReAbSelecTurn.rank.turn == i );

            }

          } 

         }

        }






    static chooseForPreferenceOfLearning () {

          if (simultaneous == false) {

          let ReAbChooseForLearning = [];

            if (ReAbSelect.length >= 1){

              for (let i=0; i<= 999; i++) {

                  if (ReAbChooseForLearning.length >= 1) {
                    console.log("Filtro de preferencia de aprendizaje >=1");
                    ReAbSelect = ReAbChooseForLearning;
                    console.log(ReAbSelect);
                    break;
                  }

                ReAbChooseForLearning = ReAbSelect.filter(ReAbSelecTurn => ReAbSelecTurn.rank.preferenceOfLearning == i );

              }

            } 
            
          }

    }


}






















////////////                  2.-    ESTE OBJETO TIENE MÉTODOS QUE DETECTAN PROPIEDADES INTERNAS Y EL TIPO DE ReAb QUE SE VA A EJECUTAR    
export class ReAbType {

}


























////////////                  3.-    ESTE OBJETO TIENE MÉTODOS QUE BUSCAN ReAbs DEL MISMO TIPO AL QUE SE VA A EJECUTAR     
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
////                                 INTERIORIZACION DENTRO DEL ReAb(s) EJECUTADO(S)
export class ReAbScore{}



