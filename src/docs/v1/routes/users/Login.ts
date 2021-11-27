export default {
  name: "Login",
  path: "/login",
  method: "POST",
  description: "Login to an account. Returns your token.",
  requestBody: {
    email: {type: 'String', example: "someone@domain.com"},
    password: {type: 'String', example: "SuperSecure123"},
  },
  responseBody: {
    token: {type: 'String', example: "UJKGHkjghkssgkdfilghdfiojghfsdgkljdrghidfghkl1223"}
  }
}