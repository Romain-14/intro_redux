import {LOAD_ALL_USERS } from '../type';

const INITIAL_STATE = {
    isLogged: true,
    infos: [],
}

const userReducer = ( state = INITIAL_STATE, action) => {
    console.log(action.type);
    switch (action.type) {
        case LOAD_ALL_USERS:
            return {
                ...state,
                infos: [
                    {id:1, alias: "Roger", hobby:"PMU"},
                    {id:2, alias: "Jet Li", hobby:"Casser des tronches"},
                    {id:3, alias: "Morgana", hobby:"Film chelou"},
                    {id:4, alias: "Bob", hobby:"feuille, toncar, herbes"},
                ]
            }       
        default: return state            
    }
}

export default userReducer;