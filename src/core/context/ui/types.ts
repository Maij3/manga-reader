export enum EUIActionType {
  UI_OPEN_SIDEBAR = 'UI - Open Sidebar'
}
export type TUIActionType = { type: EUIActionType, payload: any }
export type TUIState = {
  sideIsOpen: boolean;
}