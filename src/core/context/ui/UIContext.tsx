import {createContext} from "react"

type TContextProps = {
  setIsOpen: ()=> void;
  sideIsOpen: boolean;
  
}

export const UIContext = createContext({} as TContextProps);