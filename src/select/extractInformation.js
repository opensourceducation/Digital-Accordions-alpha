import {processRouter} from './processRouter.js';
import {parseRouter} from './ParseRouter.js';



/** 
 * 
 * @param {*} collection 
 * @param {*} filterCollection 
 * @param {*} searchParameters 
 */
export const extractInformation = (collection,filterCollection,searchParameters) => {

    const positionInCollection = positionInCollectionMatch(collection,filterCollection);
    let routeDirection = processRouter(filterCollection.info.route);   

    routeDirection.splice(0,0,positionInCollection);  
    const question = routeDirection.concat('question');
    const mnemonics = routeDirection.concat('mnemonics');
    const questAuxResources = routeDirection.concat('interconections','questAuxResources');
    const canvas = routeDirection.concat('canvas');
    const anotations = routeDirection.concat('interconections','anotations');
    const space = routeDirection.concat('space');


    return {
        route: routeDirection,
        question: questionSelector(parseRouter(collection,question)),   
        Id: filterCollection.info.route,
        multipleChoiceAnswers: ["no disponible por ahora"],       
        mnemonics: parseRouter(collection,mnemonics),
        questAuxResources: parseRouter(collection,questAuxResources),
        canvas: parseRouter(collection,canvas),
        anotations: parseRouter(collection,anotations),
        space: parseRouter(collection,space),
        };
}






const questionSelector = (questions) => {
    if (questions.length == 1){
        return questions[0];
    } else{
        return questions[Math.floor(Math.random()*questions.length)];
    }
}






const positionInCollectionMatch = (collection,filterCollection) => {
    for(let i=0; i<= collection.length; i++){
        if(filterCollection == collection[i]){
            return  i 
        }
    }
}