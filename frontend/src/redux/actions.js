import {ADD_TYPE,REMOVE_TYPE} from './types';

export const add_action = payload =>{
    const action = {
        type : ADD_TYPE , 
        payload
    }
    return action ;
} 
export const remove_action = payload =>{
    const action = {
        type : REMOVE_TYPE , 
        payload
    }
    return action ;
} 