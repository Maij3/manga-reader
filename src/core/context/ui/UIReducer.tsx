import { EUIActionType, TUIActionType, TUIState } from "./types"



export const UIReducer = (state: TUIState, action: TUIActionType): TUIState => {

  switch (action.type) {
    case EUIActionType.UI_OPEN_SIDEBAR:
      return {
        ...state,
        sideIsOpen: !action.payload.sideIsOpen,
      }
    default:
      return state;
  }

}