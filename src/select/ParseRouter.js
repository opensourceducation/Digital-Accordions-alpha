
/**  parseRouter()
 * 
 * Used in: [processRouter.js, ReAbScore.js]
 * 
 * @param {*} collection 
 */
export const parseRouter = (collection,route) => {
    switch(route.length){ 
        case 2: return collection [route[0]] [route[1]];  
        case 3: return collection [route[0]] [route[1]] [route[2]];
        case 4: return collection [route[0]] [route[1]] [route[2]] [route[3]];
        case 5: return collection [route[0]] [route[1]] [route[2]] [route[3]] [route[4]];
        case 6: return collection [route[0]] [route[1]] [route[2]] [route[3]] [route[4]] [route[5]];
        case 7: return collection [route[0]] [route[1]] [route[2]] [route[3]] [route[4]] [route[5]] [route[6]];
        case 8: return collection [route[0]] [route[1]] [route[2]] [route[3]] [route[4]] [route[5]] [route[6]] [route[7]];
        case 9: return collection [route[0]] [route[1]] [route[2]] [route[3]] [route[4]] [route[5]] [route[6]] [route[7]] [route[8]];
        case 10: return collection [route[0]] [route[1]] [route[2]] [route[3]] [route[4]] [route[5]] [route[6]] [route[7]] [route[8]] [route[9]];
        case 11: return collection [route[0]] [route[1]] [route[2]] [route[3]] [route[4]] [route[5]] [route[6]] [route[7]] [route[8]] [route[9]] [route[10]];
        case 12: return collection [route[0]] [route[1]] [route[2]] [route[3]] [route[4]] [route[5]] [route[6]] [route[7]] [route[8]] [route[9]] [route[10]] [route[11]];
        case 13: return collection [route[0]] [route[1]] [route[2]] [route[3]] [route[4]] [route[5]] [route[6]] [route[7]] [route[8]] [route[9]] [route[10]] [route[11]] [route[12]];
        case 14: return collection [route[0]] [route[1]] [route[2]] [route[3]] [route[4]] [route[5]] [route[6]] [route[7]] [route[8]] [route[9]] [route[10]] [route[11]] [route[12]] [route[13]];
        case 15: return collection [route[0]] [route[1]] [route[2]] [route[3]] [route[4]] [route[5]] [route[6]] [route[7]] [route[8]] [route[9]] [route[10]] [route[11]] [route[12]] [route[13]] [route[14]];
        case 16: return collection [route[0]] [route[1]] [route[2]] [route[3]] [route[4]] [route[5]] [route[6]] [route[7]] [route[8]] [route[9]] [route[10]] [route[11]] [route[12]] [route[13]] [route[14]] [route[15]];
        case 17: return collection [route[0]] [route[1]] [route[2]] [route[3]] [route[4]] [route[5]] [route[6]] [route[7]] [route[8]] [route[9]] [route[10]] [route[11]] [route[12]] [route[13]] [route[14]] [route[15]] [route[16]];
        case 18: return collection [route[0]] [route[1]] [route[2]] [route[3]] [route[4]] [route[5]] [route[6]] [route[7]] [route[8]] [route[9]] [route[10]] [route[11]] [route[12]] [route[13]] [route[14]] [route[15]] [route[16]] [route[17]];
        case 19: return collection [route[0]] [route[1]] [route[2]] [route[3]] [route[4]] [route[5]] [route[6]] [route[7]] [route[8]] [route[9]] [route[10]] [route[11]] [route[12]] [route[13]] [route[14]] [route[15]] [route[16]] [route[17]] [route[18]];
        case 20: return collection [route[0]] [route[1]] [route[2]] [route[3]] [route[4]] [route[5]] [route[6]] [route[7]] [route[8]] [route[9]] [route[10]] [route[11]] [route[12]] [route[13]] [route[14]] [route[15]] [route[16]] [route[17]] [route[18]] [route[19]];
        case 21: return collection [route[0]] [route[1]] [route[2]] [route[3]] [route[4]] [route[5]] [route[6]] [route[7]] [route[8]] [route[9]] [route[10]] [route[11]] [route[12]] [route[13]] [route[14]] [route[15]] [route[16]] [route[17]] [route[18]] [route[19]] [route[20]];
        case 22: return collection [route[0]] [route[1]] [route[2]] [route[3]] [route[4]] [route[5]] [route[6]] [route[7]] [route[8]] [route[9]] [route[10]] [route[11]] [route[12]] [route[13]] [route[14]] [route[15]] [route[16]] [route[17]] [route[18]] [route[19]] [route[20]] [route[21]];
        case 23: return collection [route[0]] [route[1]] [route[2]] [route[3]] [route[4]] [route[5]] [route[6]] [route[7]] [route[8]] [route[9]] [route[10]] [route[11]] [route[12]] [route[13]] [route[14]] [route[15]] [route[16]] [route[17]] [route[18]] [route[19]] [route[20]] [route[21]] [route[22]];
        case 24: return collection [route[0]] [route[1]] [route[2]] [route[3]] [route[4]] [route[5]] [route[6]] [route[7]] [route[8]] [route[9]] [route[10]] [route[11]] [route[12]] [route[13]] [route[14]] [route[15]] [route[16]] [route[17]] [route[18]] [route[19]] [route[20]] [route[21]] [route[22]] [route[23]];
        case 25: return collection [route[0]] [route[1]] [route[2]] [route[3]] [route[4]] [route[5]] [route[6]] [route[7]] [route[8]] [route[9]] [route[10]] [route[11]] [route[12]] [route[13]] [route[14]] [route[15]] [route[16]] [route[17]] [route[18]] [route[19]] [route[20]] [route[21]] [route[22]] [route[23]] [route[24]];
        case 26: return collection [route[0]] [route[1]] [route[2]] [route[3]] [route[4]] [route[5]] [route[6]] [route[7]] [route[8]] [route[9]] [route[10]] [route[11]] [route[12]] [route[13]] [route[14]] [route[15]] [route[16]] [route[17]] [route[18]] [route[19]] [route[20]] [route[21]] [route[22]] [route[23]] [route[24]] [route[25]];
    }
}