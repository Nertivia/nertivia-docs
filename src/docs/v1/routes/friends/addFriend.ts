export default {
  name: "Add Friend",
  path: "/add",
  method: "POST",
  description: "Add a friend",
  requestBody: {
    id: {type: 'String', example: "123456789123456"},
    username: {type: 'String', example: "Someone"},
    discriminator: {type: 'String', example: "Owo1"},
  },
  responseBody: {
    token: {type: 'String', example: "UJKGHkjghkssgkdfilghdfiojghfsdgkljdrghidfghkl1223"}
  }
}