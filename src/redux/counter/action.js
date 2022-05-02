import {INCREMENT, DECREMENT} from '../type';


export const increment = () => {
    return {
        type: INCREMENT,
        payload: "Bien incrémenté",
    }
}

export const decrement = (nbrToDecrement) => {

    return {
        type: DECREMENT,
        payload: nbrToDecrement,
    }
}