export default {
  name: "Create Account",
  url: "/create",
  method: "POST",
  description: "Creates an account.",
  requestBody: {
    email: {type: 'String', example: "someone@domain.com"},
    username: {type: 'String', example: "Someone"},
    password: {type: 'String', example: "SuperSecure123"},
  },
  responseBody: {
    token: {type: 'String', example: "UJKGHkjghkssgkdfilghdfiojghfsdgkljdrghidfghkl1223"}
  }
}