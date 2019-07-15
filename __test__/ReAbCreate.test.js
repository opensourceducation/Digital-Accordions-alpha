import {ReAb} from '../src/ProReLedgeLibrary.js';

describe('PRUEBAS CON ReAb.create() ', () => {
    test('PASANDO OBJETOS COMO ARGUMENTO', () => {
        console.log(ReAb.create({}))
        expect(ReAb.create({})).toBe("funciona");
    })
})



describe('PROBANDO EL CONVERSOR DEL STANDARD DE ESCRITURA RÁPIDO CON DIFERENTES ARGUMENTOS', () => {
    test('La afirmación es verdadera', () => {
        expect(true).toBeTruthy();
    })
})