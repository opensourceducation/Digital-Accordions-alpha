# DEPRECATED 
  
  
## Seguimiento automático de lo que aprendes

## Crea tus acordeones digitales de manera rápida y sencilla para dar seguimiento permanente a lo que aprendes, desde conceptos sencillos, hasta tareas complejas.

## Mide tu habilidad y entendimiento real de una tarea o tema incluso cuando tu crees que ya la entiendes.

## Selecciona automáticamente el contenido en base a tu interiorización de la información y problemas de aprendizaje.

## Herramientas mnemotécnicas, entornos de aprendizaje pre-configurados y más..



ProReLedge es una librería trabajar con acordeones digitales https://www.github.com/opensourceducation/ReAb-Writing-Standard, implementa los standares de escritura, sistemas de puntuación basados en la interiorización de la información y la frecuencia de uso, peticiones de certificación, selección automática del contenido y herramientas mnemotécnicas en casos de problemas de aprendizaje.

Creemos que los problemas más graves de la educación, como la latencia de informacion entre los agentes laboral-científico-educativos, y la imposibilidad económica de una educación de alta calidad personalizada, y eficiente para el sistema laboral, pueden resolverse cambiando la forma en la que medimos, evaluamos y certificamos las capacidades académicas de la mayor cantidad de personas posible, que cuenten con un dispositivo electrónico de bajo costo. 


ReAb (Relational Abstraction o Acordeones Digitales) es un standard de implementación de quizzes dentro de una estructura de datos, que propone nuevas formas de medición de progresos del aprendizaje humano más preciso, como una alternativa futura al sistema de calificaciones, certificaciones, e implementacion de planes de estudio actuales.

Su implementación es agnóstica de la experiencia de apredizaje, y puede usarse tanto en quizzes tradicionales, como para simular y/o medir progresos en tareas más complejas, Ya sea para uso personal como herramienta de aprendizaje semi-autodidacta, o en aplicaciones educativas nuevas o ya existentes para delegar, o mejorar el proceso de toma de deciciones.



# Instalación
`npm install ProReLedge --save`


# Uso
`import ReAb from 'ProReLedge'`


# Guía rápida para empezar

## Crea tu primer acordeón sencillo

Puedes crear un acordeón usando el [standard de escritura rápida] pasando como argumento string el contenido
`ReAb.create("comando para crear una rama -- git branch, git checkout -b")`

`ReAb.create("Crea una rama -- git branch ^regex(\w)^, git checkout -b ^regex(\w)^ |\n| <Code,git -v2.16.2.windows.1>")` 


o de manera tradicional a partir de un objeto sencillo:
`ReAb.create({question: "dog", answer: ["perro","canino"], wrongAnswer: ["gato","gatos","mininos"], tags: "spanish"})`


Un acordeón se puede crear unicamente con un argumento de respuesta "answer" o uno de resultado "result"

`ReAb.create({answer:"Murray Rothbard"})`

`ReAb.create({result:3})`

`ReAb.create({result: "devuelve esto"})`


A partir de ahí, esta es la lista de argumentos opcionales más usados con la que puedes crear el acordeón:

| Argumento | Descripción | sinónimos aceptados como argumentos |
| ------ | ------ | ------ |
| questions | LAS PREGUNTAS PUEDEN SER 1 PALABRA, UN TEXTO, UNA OPERACIÓN MATEMÁTICA, IMÁGENES, VIDEO, SONIDO O CUALQUIER CANTIDAD DE ELEMENTOS ABSTRACTOS | question, pregunta,preguntas |
| wrongAnswers | ELEMENTOS ABSTRACTOS CON RELACIÓN NEGATIVA | wrong, wrongAnswer, respuestasInorrectas, respuestaIncorrecta, respuestaErronea, respuestasErroneas|
| liscence | cualquier licencia de software libre o comercial para el uso y distribución del ReAb | licencia |
| tags | las etiquetas pueden incluir la bandera -v para posteriores sugerencias de actualización ` "tags": "angular -v6.3.9"`| tag, etiqueta, etiquetas |
| type | SOLO ACEPTA 4 TIPOS: Concepts, Code, Space y Math | types, tipo, tipos |
| answers | GUARDA LOS ELEMENTOS ABSTRACTOS CON RELACIÓN POSITIVA: 1 PALABRA, UN TEXTO, UN RESULTADO MATEMÁTICO, IMÁGENES, VIDEO, SONIDO, ETC.. | answer, respuesta, respuestas |


Para más detalles revisa la [documentación de ReAb.create()]



## Seguimiento y selección automática

`ReAb.select([colecciónDeAcordeones],{configuraciónDeValoresDeSalida})`

El [objeto con los valores de salida] es opcional

Según los valores de salida que le des, la función te devolverá un acordeón con características específicas, varios de ellos en un array


## Calificar acordeones
Los acordeones pueden calificarse por respuesta o por resultado
Bajo estandares de medición de interiorización y frecuencia, o únicamente de frecuencia en casos en los que en lugar de quizzes, se usa un entorno realista donde se miden los comandos o conceptos más usados sin una pregunta previa.

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




## Comparte tus acordeones

`ReAb.share(ReAb)` 

Setea los valores de medición de progresos personales para que puedas compartir los(s) acordeone(s) con otros usuarios

Acepta como argumentos un objeto o un array con una colección de acordeones




Para ver la documentación completa:
https://opensourceducation.github.io/ProReLedge



#Licencia
"Eclipse Public License (EPL) 2.0" 





[standard de escritura rápida]: <https://opensourceducation.github.io/ReAb-Writing-Standard/Standard/fast-writing-standard>

[documentación de ReAb.create()]: <https://opensourceducation.github.io/ProReLedge>

[objeto con los valores de salida]: <https://opensourceducation.github.io/ProReLedge>
