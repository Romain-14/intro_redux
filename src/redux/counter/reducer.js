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
            console.log('inc');
            return {
                ...state,
                value: state.value + 1,
            }
        case DECREMENT:
            return {
                ...state,
                value: state.value - 1,
            }            
    
        default: return state
            
    }
}

export default counterReducer;