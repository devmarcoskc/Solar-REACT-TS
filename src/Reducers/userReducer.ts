import { ReducerActionType } from "../Types/types";

export type UserType = {
    isLogged: boolean;
    name: string;
    carItemLenght: number;
    carItemNames: {
        name: string
    }[]; 
}

export const UsersInitialState: UserType = {
    isLogged: false,
    name: '',
    carItemLenght: 0,
    carItemNames: []
}

export const UserReducer = (state: UserType, action: ReducerActionType) => {
    switch(action.type) {
        case 'CHANGE_NAME':
            return {
                ...state, name: action.payload.name
            }
        break;
        case 'CHANGE_LOG':
            return {
                ...state, isLogged: action.payload.isLogged
            }
        break;
        case 'CHANGE_CARTITEMLENGHT':
            return {
                ...state, cartItems: action.payload.cartItems
            }
        break;
        case 'CHANGE_CARTITEMNAMES':
            return {
                ...state, cartItems: action.payload.cartItems
            }
        break;
    }

    return state;
}