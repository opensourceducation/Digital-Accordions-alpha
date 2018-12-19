 import { ReAbCollection } from '../ReAb-Database/ReAb-Database' ;
 import {} from './2-mnemonics';


 var Acordeones = ReAbCollection;
 console.log(Acordeones);

 export let ReAbSelect;
 export let process_to_score = 0;
 export let ReAbPosition =[-1];
 export let summation = 0;
 export let writtenAnswer;
 export let simultaneous = false;





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

        let ReAbMinTurn = [];

        if (simultaneous == false && ReAbSelect.length >= 2){

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





    static chooseForPreferenceOfLearning () {

        let ReAbChooseForLearning = [];

          if (simultaneous == false && ReAbSelect.length >= 2){

            for (let i=0; i<= 999; i++) {

                if (ReAbChooseForLearning.length >= 1) {
                  console.log("Filtro de preferencia de aprendizaje " + i );
                  ReAbSelect = ReAbChooseForLearning;
                  console.log(ReAbSelect);
                  break;
                }

              ReAbChooseForLearning = ReAbSelect.filter(ReAbSelecTurn => ReAbSelecTurn.rank.preferenceOfLearning == i );
            }
          }           
        }





    static selectProcess(){

          if (simultaneous == false && ReAbSelect[0].process.length >= 2) {

            for (let proceso of ReAbSelect[0].process) {

              // Este método se modificará en versiones posteriores
                if (ReAbSelect[0].process[0].anScore[process_to_score] == 0 || ReAbSelect[0].process[0].anScore[process_to_score] == null ) {
                    break;

                  } else { process_to_score ++; }
                    
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
export class ReAbScore{


    static score () {

////  Esto evalua si la pregunta del ReAb es correcta o no
            let respuestas = ReAbSelect[0].process[0].answer ;
            let preguntas =  ReAbSelect[0].process[0]["question?"]; 
            let rightAnswer;
            let anScoreArray = 0;

                for (let consulta of respuestas) {

                  anScoreArray ++;

                  if (consulta == writtenAnswer) {  

                  console.log("COOORRECTOOOO !!"); 
                  rightAnswer = true;
                  break;   

                  } else {
                    console.log("MAL");
                    rightAnswer = false;  
                  }
                  
                }

            console.log("ReAb seleccionado antes de aplicar los scores :");
            console.log(ReAbSelect);

                
                if (rightAnswer) {
                    console.log("sis");

                    ReAbCollection[ReAbPosition[0]].process[process_to_score].anScore[anScoreArray] ++;
                    ReAbCollection[ReAbPosition[0]].process[process_to_score].anScore[0] ++;
                    ReAbScore.weigh_ponderar ();
                    ReAbScore.newRankPriority();
                    ReAbScore.turnReset ();
                     
                } else { 

                  console.log("non");                     
                    ReAbCollection[ReAbPosition[0]].process[process_to_score].anScore[anScoreArray] --;
                    ReAbCollection[ReAbPosition[0]].process[process_to_score].anScore[0] --;
                    ReAbCollection[ReAbPosition[0]].rank.priority = "AAA";
                    ReAbScore.weigh_ponderar ();                    
                    ReAbScore.turnReset ();

                }
                  
              console.log("ReAb seleccionado DESPUES!! de aplicar los scores :");
              console.log(ReAbCollection[ReAbPosition[0]]);

              ReAbScore.turn();              
              rightAnswer;
              anScoreArray = 0;
              summation = 0;
              ReAbPosition = [-1];
              ReAbSelect = [];
              process_to_score = 0;
              simultaneous = false;
    }



    static turn () {     

////  Esto baja el "turn" de toda tu colección de ReAbs
        for (let i=0; i < ReAbCollection.length; i++) {
        
            if (ReAbCollection[i].rank.turn >= 1) {

                ReAbCollection[i].rank.turn --;
            }                     
        }

    }



///// Este ciclo localiza la posición del array del/los ReAb(s) de ReAb Collection seleccionado(s)
// !!  FALTA COLOCAR LA VARIACIÓN CUANDO SE TRATA DE MÁS DE 1ReAb (pero para esto es necesario crear 
//     concepts y tener listo el metodo multipleReAbs funcionando para regresar aqui !!)
    static collectionPosition () {

      for (let i = 0; i < ReAbCollection.length; i++) {
     
          ReAbPosition[0] ++;         

          if (ReAbCollection[i] == ReAbSelect[0] ) {
            console.log ("Let ReAbPosition es igual a : ");
            console.log(ReAbPosition);
            break;
          }
      }

    }   




    static weigh_ponderar () {

          for (var i = 0; i < ReAbCollection[ReAbPosition[0]].process.length; ++i) {
           
            summation += ReAbCollection[ReAbPosition[0]].process[i].anScore[0]; 
                       
          }

      let division = ReAbCollection[ReAbPosition[0]].process.length;
      ReAbCollection[ReAbPosition[0]].info.score[0] = summation / division;

      console.log("suMMation vale ::");
      console.log(summation);
      console.log("DIVISION es igual a :");
      console.log(division);
      console.log("PONDERA !");
      console.log(ReAbCollection[ReAbPosition[0]].info.score[0]);

    }      




    static turnReset () {

      /////    A MODIFICAR UNA VEZ SE EJECUTEN MULTIPLES ReAbs 
          if (ReAbCollection[ReAbPosition[0]].rank.turn == 0 && ReAbCollection[ReAbPosition[0]].info.score[0] >=1) {
                       
              ReAbCollection[ReAbPosition[0]].rank.turn = ReAbCollection[ReAbPosition[0]].info.score[0];
          }
    }




    static newRankPriority () {

      var CicloPriority = ["AAA","AA","A",null];
      let Posterior_Length = 0;

          for (let Priority of CicloPriority) {

              Posterior_Length ++;

                if (ReAbCollection[ReAbPosition[0]].rank.priority == Priority && ReAbCollection[ReAbPosition[0]].rank.priority != null ) {

                  console.log("El rank Priority bajó de " + Priority + " a " + CicloPriority[Posterior_Length]);

                    ReAbCollection[ReAbPosition[0]].rank.priority = CicloPriority[Posterior_Length];
                    Posterior_Length = 0;
                    break;
                }          
          } 
    }



}












