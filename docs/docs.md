## Los acordeones digitales (ReAbs o abstracciones relacionales) son un standard de implementacion de quizzes dentro de una estructura de datos, que te permitirán almacenar desde conceptos simples, hasta tareas complejas, junto con tus datos personales de interiorización de los mismos, para medir tus progresos y automatizar su seguimiento.

# 1
## Crea tus acordeónes 

`ReAb.create(collection,position, input)`
El primer argumento de entrada es obligatorio (string, stringUrl, array u objecto), y el segundo de salida (stringUrl) para generar un archivo de salida .txt o .json es opcional


Puedes crear un acordeón usando el [standard de escritura rápida] pasando como argumento el contenido en un string
`ReAbCollection = []`
`ReAb.create(ReAbCollection,0,"comando para crear una rama -- git branch, git checkout -b")`

`ReAb.create(ReAbCollection,"last","Crea una rama -- git branch ^(\w)^, git checkout -b ^(\w)^ |\n| <Code,git -v2.16.2.windows.1>")` 


O de manera tradicional a partir de un objeto sencillo:
`ReAb.create({question: "dog", answer: ["perro","canino"], wrongAnswer: ["gato","gatos","mininos"], tags: "spanish"})`


Un acordeón se puede crear unicamente con un argumento de respuesta "answer" o uno de resultado "result"

`ReAb.create(ReAbCollection,"first",{answer:"Murray Rothbard"})`

`ReAb.create(ReAbCollection,"3",{result:3})`

`ReAb.create(ReAbCollection,"2",{result: "devuelve esto"})`


A partir de ahí, esta es toda la lista de argumentos opcionales con la que puedes crear el acordeón:

| Argumento | Descripción | sinónimos aceptados como argumentos |
| ------ | ------ | ------ |
| questions | LAS PREGUNTAS PUEDEN SER 1 PALABRA, UN TEXTO, UNA OPERACIÓN MATEMÁTICA, IMÁGENES, VIDEO, SONIDO O CUALQUIER CANTIDAD DE ELEMENTOS ABSTRACTOS | question, pregunta,preguntas |
| wrongAnswers | ELEMENTOS ABSTRACTOS CON RELACIÓN NEGATIVA | wrong, wrongAnswer, respuestasInorrectas, respuestaIncorrecta, respuestaErronea, respuestasErroneas|
| liscence | cualquier licencia de software libre o comercial para el uso y distribución del ReAb | licencia |
| tags | las etiquetas pueden incluir la bandera -v para posteriores sugerencias de actualización ` "tags": "angular -v6.3.9"`| tag, etiqueta, etiquetas |
| type | SOLO ACEPTA 4 TIPOS: Concepts, Code, Space y Math | types, tipo, tipos |
| answers | GUARDA LOS ELEMENTOS ABSTRACTOS CON RELACIÓN POSITIVA: 1 PALABRA, UN TEXTO, UN RESULTADO MATEMÁTICO, IMÁGENES, VIDEO, SONIDO, ETC.. | answer, respuesta, respuestas |
| canvas | GUARDA DATOS ESPACIALES DE COLOCACIÓN DE ELEMENTOS ESPECÍFICOS DE "question" |   |
| operations | AQUI SE GUARDA LA DIDACTICA INTERNA espacial/relacional PARA ENSEÑAR AL ReAb A EJECUTAR LA OPERACIÓN MATEMÁTICA |  |
| space | AQUÍ SE GUARDAN COORDENADAS Y AREAS DE LA PANTALLA CON FORMAS GEOMETRICAS QUE AL PULSAR O INTERACTUAR DE MANERA CORRECTA, RESUELVE EL ReAb O PASA AL SIGUIENTE PROCESO |  |
| anotations | ANOTACIONES GUARDADAS EN ESTE PROCESO DEL ReAb |  |
| mnemonics | RELACIONES MNEMOTÉCNICAS QUE GUARDE EL USUARIO, O GENERADAS AUTOMÁTICAMENTE |  |
| questionAnswer | ELEMENTOS EN question QUE TAMBIEN PUEDEN FUNGIR COMO ELEMENTOS answer Y VICEVERSA |  |
| questOutResources | Recursos complementarios a la presentación de la pregunta  //  RUTA(S) DE IMAGEN, VIDEO, SONIDO, ETC Y EL ARRAY DE QUESTION AL QUE ESTÁ ASIGNADO `"questAuxResources": ["../recursos/ruta_de_ejemplo/imagen.jpg", ": a"]`|  |
| reaction | Aquí se colocan elementos y/o programan reacciones al activar los elementos de answer o wrong, a nivel general o particular **En desarrollo** |  |
| processReactionMap | Programas rutas entre los elementos answer activados y bifurcaciones específicas "branch" en los siguientes procesos  // la ruta destino es la indicada despues de :: `"processReactionMap": ["git checkout -B respaldo :: 2,2 "]`| router |
| school | Identificadores académicos en caso de que los haya, como nombre de la institución, escudo, etc.. ||
| identificatorOrQr | GUARDA UN CÓDIGO EN CADA ARRAY QUE IDENTIFICA EL USUARIO CREADOR DEL SISO, LOS USUARIOS QUE HAN MODIFICADO SU CONTENIDO, Y EL ULTIMO USUARIO TENEDOR DEL MISMO ||
| groupIdentifier |  GUARDA UN HISTORIAL DE LOS GRUPOS DE ESTUDIO POR LOS QUE HA PASADO EL ReAb.  ALGUNA DE ESTA INFORMACIÓN ENRIQUECE LAS ETIQUETAS ("tags") para el analisis de datos ||


Si quieres crear un acordeón de multiples procesos sin escritura rápida, manda como argumento un array como en el ejemplo siguiente:
`ReAb.create(ReAbCollection,"last",
			[
			  {answer: ["git log", "git log --oneline"]},
              {answer: ["git add .", "git add -a"]},
              {answer: ["git commit", "git commit -m ^(\w)^"]}
            ])`


Si quieres que tenga bifurcaciones dentro de los procesos:
`ReAb.create(ReAbCollection,"last",
			[
			  {answer: ["git log", "git log --oneline"], 
			   router: ["git add . :: 2,2 ","git add -a :: 2,2 "]
			  },
              {answer: ["git add .", "git add -a"],
               branch:[
					{answer: ["git commit", "git commit -m ^(\w)^"]}
               ]},
              {answer: ["git commit", "git commit -m ^(\w)^"]}
            ])`



# 2
## Seguimiento y selección automática

Esta función escogerá el acordeón adecuado para el aprendizaje del usuario en base a interacciones pasadas y preferencias de aprendizaje

`ReAb.select([colecciónDeAcordeones],{configuraciónDeValoresDeSalida})`

El objeto con los valores de salida es opcional

Según los valores de salida que le des, la función te devolverá un acordeón con características específicas, varios de ellos en un array




Aquí la lista completa de parametros opcionales para la selección
	{
		"typeTags": ["Code"],
	    "obligatoryQuestion": boolean,
	    "multipleProcess": boolean,
	    "multipleReAbs": boolean,
	    "multipleOptions": boolean,
	    "resources": [boolean,"image","audio","video"],
	    "pad": [boolean,"shorText","longText"],
	    "text": [boolean,"question","answer"],
	    "anotations": boolean,
	}


|typeTags| Tanto etiquetas como tipos de array que se desea filtrar|Argumentos en string dentro de un array|
|obligatoryQuestion|Que el ReAb contenga obligatoriamente una o mas preguntas| true-false |
|multipleProcess|Seleccionar ReAbs con multiples procesos | true-false |
|multipleReAbs|Seleccionar multiples acordeones| true-false |
|multipleOptions| Para preguntas de opción multiple | true-false |
|resources|| true-false y el o los tipos de recursos "image","audio","video" *si no especificas, fitrará acordeones con los 3 tipos de recursos*|
|pad|| true-false |
|text|Que algun elemento de la pregunta o la respuesta este compuesta de texto| true-false y si quieres que el texto aparezca en cuestion, answer o ambas *si no especificas el resultado será en ambas*|
|anotations|Si deseas que el ReAb Seleccionado tenga o no obligatoriamente anotaciones| true-false |
|reactions|Si deseas que el ReAb Seleccionado tenga o no obligatoriamente reacciones| true-false |



# 3
## Calificar acordeones

`ReAb.score(ReAbToScore,"input del usuario")`
El primer argumento recibe el acordeón del usuario para calificarlo, y el segundo puede recibir un objeto, un string o un number

En caso de recibir un string o un number, este argumento se toma por default como la respuesta.
`ReAb.score(ReAbToScore, 3)`


Los acordeones pueden calificarse por respuesta o por resultado
`ReAb.score(ReAbToScore,{answer: "input del usuario"})`
`ReAb.score(ReAbToScore,{result: "resultado de la interacción del usuario"})`


Si calificas usando el resultado, y añades la respuesta al argumento, en caso de ser correcta, se añadirá automáticamente en el parámetro de respuestas(answer) del acordeón
`ReAb.score(acordeón,{answer: "lalala", result: "3"})`


Para calificar por frecuencia de uso, y no por respuestas correctas o resultados, manda como argumento la colección de ReAbs completa sin haber usado previamente el método ReAbSelect()
`ReAb.score([{ReAb0},{ReAb1},{ReAb2}],{todos los inputs del usuario})`


La función retorna el acordeón con los nuevos valores del score de interiorización y de frecuencia de uso, o un error en caso de colocar parámetros incorrectos.

Para saber más a fondo como funcionan estos estandares, revisa la siguiente liga: https://github.com/opensourceducation/ReAb-Writing-Standard/tree/master/Standard/Evaluation-Standards 



# 4
## Modificar acordeones

*Para añadir información del ReAb deseado*
`ReAb.add({AcordeonDeseado},{argumentos})`
Esta función como segundo argumento recibe los mismos que ReAb.create()

EJEMPLOS:
`ReAb.add({AcordeonDeseado},{question: "dog", answer: ["perro","canino"], wrongAnswer: ["gato","gatos","mininos"], tags: "spanish"})`


`ReAb.add({AcordeonDeseado},{answer:"Murray Rothbard"})`

`ReAb.add({AcordeonDeseado},{result:3, tags:"Math"})`

`ReAb.add({AcordeonDeseado},{result: "devuelve esto"})`




*Para modificar información de un ReAb*
`ReAb.edit({AcordeonDeseado},{answer:"Ludwing Von Mises"},[0])`

Esta función como segundo argumento recibe los mismos que ReAb.create() y ReAb.add()

El tercer argumento es un array con la posición de lo que se desea cambiar o editar, para este ejemplo en "answer"



*Para modificar la preferencia de aprendizaje*
`ReAb.changePreferenceOfLearning([colecciónDeAcordeones],,newPreferenceOfLearning)`

El primer argumento es la colección de acordeones del usuario
El segundo argumento es un objeto con el acordeón a cambiar o un array con la posición del acordeón de la colección a cambiar
El tercer argumento puede ser el numero con la nueva prioridad de aprendizaje, o un array con un numero indicando la nueva posición en la colección

La función retornará la colección con los nuevos cambios de preferencia de aprendizaje


Aunque para añadir información adicional o para la edición de los Acordeones, no es necesario usar las funciones `ReAb.add()` y `ReAb.edit()`  la funcion `ReAb.changePreferenceOfLearning()` si es recomendable para cambiar correctamente la preferencia de aprendizaje de los acordeones sin fallos posteriores


# 5
## Comparte tus acordeones

`ReAb.share(ReAb)` 

Setea los valores de medición de progresos personales para que puedas compartir los(s) acordeone(s) con otros usuarios

Acepta como argumentos un objeto o un array con una colección de acordeones


**Los módulos mnemonics y learning environments aún se encuentran en desarrollo**




[standard de escritura rápida]: <https://opensourceducation.github.io/ReAb-Writing-Standard/Standard/fast-writing-standard>