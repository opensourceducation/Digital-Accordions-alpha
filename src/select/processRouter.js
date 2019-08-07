/**                 1.-  processRouter()
 *      convierte el processId de un string, o el router de un ReAb 
 *      en una ruta de acceso valida a un proceso y/o bifurcación
 * 
 * @param {string} argumentToRoute 
 * @return {array}
 */
export const processRouter = (argumentToRoute) => {
    return routeConverter(argumentToRoute)
}







const routeConverter = (argumentToRoute) => {   
    let route = [];
    let splitArgumentToRoute = argumentToRoute.split(', '); 

    if(splitArgumentToRoute.length == 1){
      route[0] = 'process';
      route[1] =  parseInt(splitArgumentToRoute[0]) -1 ;  
      return route;

    } else {
      route[0] = 'process';  
      route[1] =  parseInt(splitArgumentToRoute[0]) -1 ;  

        for(let i=1; i <= (splitArgumentToRoute+1); i++){

            if(splitArgumentToRoute[i].subString(0) != "1"){
                route.push('branch'); 
                route.push( (parseInt(splitArgumentToRoute[i].subString(0)) -2) );
            }

            if(i == splitArgumentToRoute){
                return route;
            }
        }
    }
}
