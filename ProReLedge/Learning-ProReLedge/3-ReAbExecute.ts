import {ReAbSelector,ReAbType,SimultaneousReAbs,ExcersiceSelect,ReAbScore,ReAbSelect,process_to_score,ReAbPosition,summation,writtenAnswer,simultaneous} from './1-ReAbSelect';
import {} from './2-mnemonics' ;
// import {} from '../Exercise-Designs/Code/Console' ;






//////////////////////////////////////////////////////////////////////////////////////
//
//                             AVAILABLE EXERCISES
//////////////////////////////////////////////////////////////////////////////////////

// Catalogo de ejercicios que ejecuta tu entorno de ejecución

export class exerciseCatalog {

// Puede ser el export del objeto del ejercicio directamente, o una variable string que contenga la direccion relativa al HTML del ejercicio
}

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

export class learningExecute {

    seleccionarReAb = ReAbSelector;
    MultiplesReAbs = SimultaneousReAbs;
    puntuacion = ReAbScore;

  constructor(seleccionarReAb,MultiplesReAbs,puntuacion){

        seleccionarReAb.chooseRankPriorityHighest();                                             
        SimultaneousReAbs.multipleConcepts();
        seleccionarReAb.chooseForRankTurn();
        SimultaneousReAbs.multipleConcepts();
        seleccionarReAb.chooseForPreferenceOfLearning();
        seleccionarReAb.selectProcess();
        puntuacion.collectionPosition ();

  }

}



//////////////////////////////////////////////////////////////////////////////////////
//
//                             LEARNING ENVIRONMENTS
//////////////////////////////////////////////////////////////////////////////////////

// Entornos de aprendizaje interesantes en los que puede usarse ProReLedge

// Puedes mandar a llamar alguno de estos objetos en tu entorno de ejecución
// Puedes copiar y pegar código, links o cualquier tipo de sugerencias para mejorar y/o completar el funcionamiento del entorno de ejecución específico


export class learningEnvironments {



		////////////////////////////////////////////////////////////////////////////////////////
		//
		//    	a)   SI SE EJECUTA EN LA PANTALLA DE BLOQUEO "Lockscreen" DEL CELULAR

		static LockScreen () {

		}

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

		static MicroLearning () {
        
        let MicroLearningExecute= new learningExecute (ReAbSelector,SimultaneousReAbs,ReAbScore); 

// ARCHIVO console.js
        let question = document.getElementById("questionReAb");
        let textBox = document.getElementById("answerBox");

// TEXTO DE LA PREGUNTA EN LA PARTE SUPERIOR DE LA CONSOLA
        question.textContent = ReAbSelect[0].process[0]["question?"];
        textBox.addEventListener("keyup", function(tecla){

            if (tecla.key == "Enter" ){
        
        // RESPUESTA ESCRITA POR EL USUARIO
              writtenAnswer = document.getElementById("answerBox").value;

              console.log ("process_to_score =");
              console.log (process_to_score);

              ReAbScore.score ();                                          
              document.getElementById("answerBox").value = "";

              let MicroLearningExecuteEnter = new learningExecute (ReAbSelector,SimultaneousReAbs,ReAbScore);         

// TEXTO DE LA PREGUNTA EN LA PARTE SUPERIOR DE LA CONSOLA
        question.textContent = ReAbSelect[0].process[0]["question?"];

            }           
        })
    }

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

		static LearnSession () {

		}

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

		static VideoGame () {

		}

		//////////////////////////////////////////////////////////////////////////////////////
		//
		//                             copy paste o sugerencias para VideoGame
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



}








//////////////////////////////////////////////////////////////////////////////////////
//
//                          ENTORNO DISPONIBLE MicroLearning ()
//        Falta terminar exercise select y ReAbScore Para ejecución exitosa
//////////////////////////////////////////////////////////////////////////////////////


						learningEnvironments.MicroLearning();

//////////////////////////////////////////////////////////////////////////////////////
