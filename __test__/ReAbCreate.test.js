import {ReAb} from '../src/ProReLedgeLibrary.js';
import {argumentValidator} from '../src/createReAbs/argumentValidator.js';
import {typeValidator} from '../src/createReAbs/typeValidator.js';
import {fastWritingStandardConverter} from '../src/createReAbs/fastWritingStandardConverter.js';
import {fastArrayStandardConverter} from '../src/createReAbs/fastArrayStandardConverter.js';
import {createReAbProcesses} from '../src/createReAbs/processes&branchInstantiator.js';


describe('PRUEBAS CON ReAb.create() ', () => {
    test('PASANDO OBJETO VACÍO COMO ARGUMENTO', () => {
        let emptyReAb = {"info": {"groupIdentifier?": null, "href?": null, "identificatorOrQr?": null, "internalization?": null, "license": "MIT", "school?": null, "score": [0], "tags": ["Concepts"]}, "process": [[{"anScore": [0, 0], "answer": null, "branch?": null, "canvas?": null, "interconections?": {"anotations": null, "mnemonics": null, "processReactionMap": null, "questAuxResources": null, "questionAnswer": null, "reaction": null}, "operations?": null, "processId": [1], "question?": null, "results": null, "space?": null, "wrong?": null}]], "rank": {"preferenceOfLearning": 1, "priority": null, "turn": 0}};
        expect(ReAb.create({})).toEqual(emptyReAb);
    })  
    test('argumento escrito en el manual con router', () => {

        let processBranchArray = [{"anScore": [0, 0], "answer": ["git log", "git log --oneline"], "branch?": null, "canvas?": null, "interconections?": {"anotations": null, "mnemonics": null, "processReactionMap": null, "questAuxResources": null, "questionAnswer": null, "reaction": null}, "operations?": null, "processId": [1], "question?": null, "results": null, "space?": null, "wrong?": null}, {"anScore": [0, 0], "answer": ["git add .", 
        "git add -a"], "branch?": [{"anScore": [0, 0], "answer": ["git commit", "git commit -m ^regex(w)^"], "branch?": null, "canvas?": null, "interconections?": {"anotations": null, "mnemonics": null, "processReactionMap": null, "questAuxResources": null, "questionAnswer": null, "reaction": null}, "operations?": null, "processId": [1], "question?": null, "results": null, "space?": null, "wrong?": null}], "canvas?": null, "interconections?": {"anotations": null, "mnemonics": null, "processReactionMap": null, "questAuxResources": null, "questionAnswer": null, "reaction": null}, "operations?": null, "processId": [1], "question?": null, "results": null, "space?": null, "wrong?": null}, {"anScore": [0, 0], "answer": ["git commit", "git commit -m ^regex(w)^"], "branch?": null, "canvas?": null, "interconections?": {"anotations": null, "mnemonics": null, "processReactionMap": null, "questAuxResources": null, "questionAnswer": null, "reaction": null}, "operations?": null, "processId": [1], "question?": null, "results": null, "space?": null, "wrong?": null}];
        expect(createReAbProcesses([
            {answer: ["git log", "git log --oneline"], 
             router: ["git add . :: 2,2 ","git add -a :: 2,2 "]
            },
            {answer: ["git add .", "git add -a"],
             branch:[
                  {answer: ["git commit", "git commit -m ^regex(\w)^"]}
            ]},
            {answer: ["git commit", "git commit -m ^regex(\w)^"]}
          ])).toEqual(processBranchArray);
    })
})





/*

describe('PROBANDO EL CONVERSOR DEL STANDARD DE ESCRITURA RÁPIDA', () => {
    test('La afirmación es verdadera', () => {
        expect(true).toBeTruthy();
    })
})
*/






/*
describe('PROBANDO EL CONVERSOR DE ESCRITURA RÁPIDA BASADA EN ARRAYS', () => {
    test('La afirmación es verdadera', () => {
        expect(true).toBeTruthy();
    })
})
*/






/*
describe('PROBANDO EL MODULO argumentValidator()', () => {
    test('La afirmación es verdadera', () => {
        expect(true).toBeTruthy();
    })
})  */








describe('PROBANDO EL MODULO argumentValidator()', () => {
    test('Pasando un array con un objeto y un parametro "etiqueta" dentro', () => {
        expect(argumentValidator([{etiqueta:"pizza"}])).toEqual([{etiqueta:"pizza"}]);
    }) 

    test('Pasando un array con 2 objetos y un parametro "tag" en cada objeto', () => {
        expect(argumentValidator([{tag:"pizza"},{tag:"con queso"}]))
         .toEqual([{license: ["MIT"],tag: "pizza",tags:["pizza", "con queso"]},{tag: "con queso"}]); 
    })

    test('Pasando un array con 2 objetos: un "tipo" en el objeto 1 y un parametro "tag" en cada objeto', () => {
        expect(argumentValidator([{tag:"pizza",tipo:"conceptos"},{tag:"con queso"}]))
         .toEqual([{license: ["MIT"],tag: "pizza",tags:["pizza", "con queso"],tipo:"conceptos",type:["conceptos"]},{tag: "con queso"}]); 
    })

    test('Pasando un array con 2 objetos: un "tipo" en el objeto 1, un "tipos" en el objeto 2 y un parametro "tag" en cada objeto', () => {
        expect(argumentValidator([{tag:"pizza",tipo:"conceptos"},{tag:"con queso",tipos:"codigo"}]))
         .toEqual([{license: ["MIT"],tag: "pizza",tags:["pizza", "con queso"],tipo:"conceptos",type:["conceptos", "codigo"]},{tag:"con queso",tipos:"codigo"}]); 
    })
})





describe('PROBANDO EL MODULO createReAbProcesses()', () => {
    const ArrayProcessToTest = [{"anScore": [0, 0], "answer": "git log --oneline", "branch?": null, "canvas?": null, "interconections?": {"anotations": null, "mnemonics": null, "processReactionMap": null, "questAuxResources": null, "questionAnswer": null, "reaction": null}, "operations?": null, "processId": [1], "question?": null, "results": null, "space?": null, "wrong?": null}, {"anScore": [0, 0], "answer": ["git add .", "git add -a"], "branch?": [{"anScore": [0, 0], "answer": ["git commit", "git commit -m ^regex(w)^"], "branch?": null, "canvas?": null, "interconections?": {"anotations": null, "mnemonics": null, "processReactionMap": null, "questAuxResources": null, "questionAnswer": null, "reaction": null}, "operations?": null, "processId": [1], "question?": null, "results": null, "space?": null, "wrong?": null}], "canvas?": null, "interconections?": {"anotations": null, "mnemonics": null, "processReactionMap": null, "questAuxResources": null, "questionAnswer": null, "reaction": null}, "operations?": null, "processId": [1], "question?": null, "results": null, "space?": null, "wrong?": null}, {"anScore": [0, 0], "answer": ["git commit", "git commit -m ^regex(w)^"], "branch?": null, "canvas?": null, "interconections?": {"anotations": null, "mnemonics": null, "processReactionMap": null, "questAuxResources": null, "questionAnswer": null, "reaction": null}, "operations?": null, "processId": [1], "question?": null, "results": null, "space?": null, "wrong?": null}];
    test('argumento escrito en el manual', () => {
        expect(createReAbProcesses([
            {answer: "git log --oneline"
            },
            {answer: ["git add .", "git add -a"],
             branch:[
                  {answer: ["git commit", "git commit -m ^regex(\w)^"]}
            ]},
            {answer: ["git commit", "git commit -m ^regex(\w)^"]}
          ])).toEqual(ArrayProcessToTest);
    })
})  


