import User from "../../models/User";

export default {
  name: "Block User",
  path: "/users/block",
  method: "PATCH",
  description: "Block and remove a user from your friends list",
  requestBody: User,

}