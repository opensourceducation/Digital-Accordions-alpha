/**   1.-  ReAbSelector()
 * 
 * @param {ObjectsArray} collection 
 */
export const ReAbSelector = (collection) => {   
    return  chooseForPreferenceOfLearning(chooseForRankTurn(chooseRankPriorityHighest(collection)));   
}







/**   2.- chooseRankPriorityHighest()
 * 
 * @param {*} collection 
 */
const chooseRankPriorityHighest = (collection) => {
    const CicloPriority = ["AAA","AA","A","Learning in Process..",null];

    for (let priority of CicloPriority){
        const filterCollection = collection.filter(ReAb => ReAb.rank.priority == priority)

        if (filterCollection.length >= 2) {                            
            return filterCollection;

        }  else if (filterCollection.length == 1) {                          
            return filterCollection;

        }  
    }
}









/**    3.-  chooseForRankTurn()
 * 
 * @param {*} collection 
 */
const chooseForRankTurn = (collection) => {

    if(collection.length >=2){
        for (let i=0; i<= Infinity; i++){
            const ReAbWithMinimunRankTurn = collection.filter(ReabSelecTurn => ReabSelecTurn.rank.turn == i);            
            
            if(ReAbWithMinimunRankTurn.length >= 1) {
                return ReAbWithMinimunRankTurn;
            }
        }
    } else  return collection;
}










/**    4.-  chooseForPreferenceOfLearning()
 * 
 * @param {*} collection 
 */
const chooseForPreferenceOfLearning = (collection) => {
    let position = [0,collection[0].rank.chooseForPreferenceOfLearning];
    
    for(let i=0; i < collection.length; i++){

        if(collection[i].rank.chooseForPreferenceOfLearning < position[1]){
            position = [i,collection[i].rank.chooseForPreferenceOfLearning]
        }

        if(i == (collection.length-1)){
            return collection[position[0]];
        }
    }
}



