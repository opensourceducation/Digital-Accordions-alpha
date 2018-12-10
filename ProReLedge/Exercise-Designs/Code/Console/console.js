// import ProReLedge from './1-ReAbSelect';

//  Debe de tener mínimo 1 Question y 1 answer
// Debe de tener mínimo 1 Question y 1 answer hechos de texto
// Puede poseer cualquier cantidad de procesos y ramificaciones deseadas
// debe tener el tag "code"
// opcionalmente puede tener el tag "console"




/// RECORDAR QUE AQUI LOS EXPORTS NO SIRVEN, Y QUE HAY QUE ENLAZAR EL console.html al ../../../javascriptVersion/ProReLedge.js




let question = document.getElementById("questionReAb");
let textBox = document.getElementById("answerBox");

console.log(question);

question.textContent = "ReAb";

textBox.addEventListener("keyup", function(tecla){

	if (tecla.key == "Enter" ){

	//	textBox.preventDefault();  EVITA EL COMPORTAMIENTO POR DEFAULT  // VER SI ESTO ME AYUDA A MANTENER LOS DATOS DE MANERA TEMPORAL EN EL NAVEGADOR SI SE RECARGA LA PAGINA

		let writtenAnswer = document.getElementById("answerBox").value;
		console.log(writtenAnswer);  
	}
	
})


// key: Enter   keyCode: 13













/*  animationiteration 	The event occurs when a CSS animation is repeated 	AnimationEvent


animationstart 	The event occurs when a CSS animation has started 	AnimationEvent

change 	The event occurs when the content of a form element, the selection, or the checked state have changed (for <input>, <select>, and <textarea>)


input 	The event occurs when an element gets user input 	InputEvent, Event

keypress 	The event occurs when the user presses a key 	KeyboardEvent

https://www.w3schools.com/jsref/dom_obj_event.asp   






animationiteration El evento ocurre cuando se repite una animación CSS AnimationEvent


animationstart El evento ocurre cuando una animación CSS ha comenzado AnimationEvent

cambiar El evento ocurre cuando el contenido de un elemento del formulario, la selección o el estado marcado han cambiado (para <input>, <select> y <textarea>)


input El evento ocurre cuando un elemento obtiene la entrada del usuario InputEvent, Event

pulsación de tecla El evento ocurre cuando el usuario presiona una tecla KeyboardEvent

https://www.w3schools.com/jsref/dom_obj_event.asp          */