export interface SuccessResponse {
  success: Success,
  error: Error
}

export interface Success {
  authToken: string,
  message: string,
  info: string
}

export interface Error {
  message: string,
  info: string
}