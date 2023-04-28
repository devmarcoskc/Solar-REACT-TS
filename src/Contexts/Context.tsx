import { createContext, useReducer } from "react";
import { UserType, UsersInitialState, UserReducer } from "../Reducers/userReducer";
import { ReducerActionType } from "../Types/types";

type initialStateType = {
    user: UserType;
}

type ContextType = {
    state: initialStateType;
    dispatch: React.Dispatch<any>;
}

const initialState = {
    user: UsersInitialState,
}

export const Context = createContext<ContextType>({
    state: initialState,
    dispatch: () => null
});

const mainReducer = (state: initialStateType, action: ReducerActionType) => ({
    user: UserReducer(state.user, action)
});

export const ContextProvider = ({children}: React.PropsWithChildren) => {
    const [state, dispatch] = useReducer(mainReducer, initialState);

    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
}