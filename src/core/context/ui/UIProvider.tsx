import { useReducer } from "react";
import { EUIActionType, TUIState } from "./types";
import { UIReducer } from "@core/context/ui/UIReducer";
import { UIContext } from "@core/context/ui/UIContext";

const UI_INITIAL_STATE:TUIState =  {
  sideIsOpen: false,
}

type TUIProvider = {
  children: React.ReactNode | React.ReactNode[];
}


export const UIProvider = ({children}:TUIProvider) =>{
  const [state, dispatch] = useReducer(UIReducer, UI_INITIAL_STATE);

  const setIsOpen = () =>{
    dispatch({
      type: EUIActionType.UI_OPEN_SIDEBAR,
      payload: state
    })
  }
  return (
    <UIContext.Provider value={{
      ...state,

      //methods
      setIsOpen,
    }}>
      {children}
    </UIContext.Provider>
  )
}