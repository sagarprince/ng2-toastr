// Toastr Config Model
export interface ConfigModel {
  type: string,
  title: string,
  message?: string,  
  position?: string,
  autoHide?: boolean
}