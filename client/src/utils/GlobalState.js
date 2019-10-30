import React, { createContext, useReducer, useContext } from "react";

// Use context to create Globally managed data...
// const UserContext = createContext({
//     authUser: {
//         id: 0,
//         userType: 0,
//         authenticated: false
//     }
// });
const UserContext = createContext();
// create instance of a provider??
const { Provider } = UserContext;


// Creating reducer fnc that will only have 2 things, login & logout
function reducer(state, action) {
    switch (action.type) {
        case "login":
            return {
                ...state,
                id: action.id,
                userType: action.userType,
                authenticated: true
            };
        case "logout":
            return {
                ...state,
                id: 0,
                userType: 0,
                authenticated: true
            };
        default:
            return state;
    }
};

function UserProvider({value = [], ...props}) {
    const [state, dispatch] = useReducer(reducer, {
        id: 0,
        userType: 0,
        authenticated: false
        // authUser: {}
    });

    return <Provider value={[state, dispatch]} {...props} />;
};

function useUserContext() {
    return useContext(UserContext);
}
  
export { UserProvider, useUserContext };