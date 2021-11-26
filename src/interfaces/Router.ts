export interface Router {
  name: string,
  path: string,
  description: "Interact with the users API.",
  routes(): Promise<InnerRouter[]>
}

export interface InnerRouter {
  name: string,
  url: string,
  method: string,
  description: string,
  requestBody: {
    [keyof: string]: {type: string, example: string},
  },
  responseBody: {
    token: {type: 'String', example: "UJKGHkjghkssgkdfilghdfiojghfsdgkljdrghidfghkl1223"}
  }
}