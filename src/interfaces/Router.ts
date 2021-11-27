export interface Router {
  name: string,
  path: string,
  description: "Interact with the users API.",
  routes(): Promise<{[key: string]: InnerRouter}>
}

export interface InnerRouter {
  name: string,
  path: string,
  method: string,
  description: string,
  requestBody: {
    [keyof: string]: {type: string, example: string},
  },
  responseBody: {
    token: {type: 'String', example: "UJKGHkjghkssgkdfilghdfiojghfsdgkljdrghidfghkl1223"}
  }
}