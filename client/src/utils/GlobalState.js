import React, { createContext, useReducer, useContext } from "react";

// Use context to create Globally managed data...
const UserContext = createContext({
    id: 0,
    userType: 0,
});

// create instance of a provider??
const { Provider } = UserContext;

// Creating reducer fnc that will only have 2 things, login & logout
function reducer(state, action) {
    switch (action.type) {
        case "login":
            return [
                ...state,
                {
                    id: action.id,
                    userType: action.userType
                }
            ];
        case "logout":
            return [
                ...state,
                {
                    id: 0,
                    userType: 0
                }
            ];
        default:
            return state;
    }
};

function UserProvider({value = [], ...props}) {
    const [state, dispatch] = useReducer(reducer, []);
    return <Provider value={[state, dispatch]} {...props} />;
};

function useUserContext() {
    return useContext(UserContext);
}
  
export { UserProvider, useUserContext };