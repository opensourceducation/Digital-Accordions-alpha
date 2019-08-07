import {customFilter} from './customFilter.js';
import {extractInformation} from './extractInformation.js';


export const ReAbSelect = (collection,searchParameters) => {
    const filterCollection = customFilter(collection,searchParameters);

    return extractInformation(collection,filterCollection,searchParameters);  // el router se ejecuta aqui dentro       
}





//ReAbSelector se ejecuta desde customFilter de ReAb.create  y desde algun modulo de ReAb.score()

  // la baja de interiorizacion al comparar la seleccion tradicional con la escogida se hará en ReAb.score() para no dañar el retorno de esta función