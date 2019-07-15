//import {} from '';
import {createReAb} from './createReAbs/createReAbs.js';
import {fastWritingStandardConverter} from './createReAbs/fastWritingStandardConverter.js';
import {fastArrayStandardConverter} from './createReAbs/fastArrayStandardConverter.js';

export const ReAb = {
	create: (objectOrString) => {
		if(typeof objectOrString === "object"){
			return createReAb(objectOrString);
		} 
		else if(typeof objectOrString === "array" && objectOrString[0] == 1){
			return fastArrayStandardConverter(objectOrString);
		} 
		else if(typeof objectOrString === "array" && typeof objectOrString[0] === "object"){
			return createReAb(objectOrString);
		} 
		else if(typeof objectOrString === "string"){
			return fastWritingStandardConverter(objectOrString);
		} 
		else {
			return console.error('The argument can be only a "string" or an "object"');
		}
	}
} 