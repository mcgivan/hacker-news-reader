import React, { createContext, useReducer, useContext } from "react";
import initState from "./initState.js";
import { storePersistantData } from "../../utils/storage.js";

const AppContext = createContext();

const appReducer = (state, action) => {
  switch (action.type) {
    case "SET_PER_PAGE":
      storePersistantData("perPage", action.payload);
      return {
        ...state,
        perPage: action.payload,
      };
    case "SET_PREV_URL":
      storePersistantData("prevUrl", action.payload);
      return {
        ...state,
        prevUrl: action.payload,
      };
    case "SET_PREV_PAGE":
      storePersistantData("prevPage", action.payload);
      return {
        ...state,
        prevPage: action.payload,
      };
    default:
      return state;
  }
};

const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext should be used within AppContextProvider");
  }
  return context;
};

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initState);
  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContextProvider, useAppContext };
