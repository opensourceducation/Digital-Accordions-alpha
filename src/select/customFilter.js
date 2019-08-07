import {ReAbSelector} from './ReAbSelector.js';

export const customFilter = (collection,searchParameters) => {
    if(!searchParameters){return ReAbSelector(collection)}
    else{
        console.log("operacion de filtrado de busqueda más complejo")
    }
}