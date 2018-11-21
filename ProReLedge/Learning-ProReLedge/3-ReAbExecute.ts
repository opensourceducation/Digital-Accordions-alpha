// Aquí se toman las desiciones de ejecución de todos los archivos de ProReLedge según el entorno de Ejecución de Aprendizaje

// Puedes mandar a llamar alguno de estos módulos en tu entorno de ejecución

// O puedes copiar y pegar este código para adherir las funciones a tu entorno de ejecución exportando también los modulos, cuidando siempre de revisar las rutas relativas


	import {ReAbSelect,ReAbType,SimultaneousReAbs,ExcersiceSelect,ReAbScore} from './1-ReAbSelect';
    import {} from './2-mnemonics' ;


	 



//    a)   SI SE EJECUTA EN LA PANTALLA DE BLOQUEO "Lockscreen" DEL CELULAR

export class Lockscreen {

	seleccionarReAb = ReAbSelect;

	constructor(seleccionarReAb){
			seleccionarReAb.rankPriorityHighest();  
	}

}


let ejecucionLockscreen= new Lockscreen (ReAbSelect); // ejemplo lockscreen



//////////////////////////////////////////////////////////////////////////////////////
//
//                             Copy Paste para Lockscreen
//////////////////////////////////////////////////////////////////////////////////////
//
//
//   1.-    ESTE OBJETO DECIDE QUE ReAb O ReAbs SIMULTANEOS SE VAN A EJECUTAR   
//		
//		ReAbSelect.rankPriorityHighest();
//		ReAbSelect();
//
//
//
//   2.-   ESTE OBJETO TIENE MÉTODOS QUE DETECTAN EL TIPO DE ReAb QUE SE VA A EJECUTAR      
//
//		ReAbType();   
//
//
//
//  3.-   ESTE OBJETO TIENE MÉTODOS QUE BUSCAN ReAbs DEL MISMO TIPO AL QUE SE VA A EJECUTAR
//
//		SimultaneousReAbs();
//
//
//
//	4.-   ESTE OBJETO TIENE MÉTODOS QUE deciden que diseño de Ejercicio va a implementarse 
//
//		ExcersiceSelect();
//
//
//
//	5.-   ESTE OBJETO TIENE MÉTODOS QUE aumentan o disminuyen las puntuaciones de Scores de 
//		  interiorización dentro de/los ReAb(s) ejecutados(s)
//
//		ReAbScore();
//
//
//
//////////////////////////////////////////////////////////////////////////////////////










//    b)   SI SE EJECUTA DE 5 A 10 MINUTOS AL DÍA EN UN ENTORNO WEB O MOVIL


export class learnSession {

}




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







