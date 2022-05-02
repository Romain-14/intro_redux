import {INCREMENT, DECREMENT} from '../type';


const INITIAL_STATE = {
    value: 0,
    age: 17,
    name: "Joe",
}

const counterReducer = ( state = INITIAL_STATE, action) => {
    console.log(action.type);
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                value: state.value + 1,
                msg: action.payload
            }
        case DECREMENT:
            return {
                ...state,
                value: state.value - action.payload,
            }            
    
        default: return state
            
    }
}

export default counterReducer;