import {ADD_TYPE,REMOVE_TYPE} from './types'

const Reducer = (state = [] , action)=>{
    let elements = [...state] ;

    if(action.type == ADD_TYPE){
        if(elements.length != 0) elements[0].push(action.payload);
        else elements.push(action.payload)
        return elements;
    }
    else if(action.type == REMOVE_TYPE){
        elements[0] = elements[0].filter(el => el.el_id != action.payload)
        return elements;
    }
    return state;
}

export default Reducer 