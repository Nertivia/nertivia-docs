import User from "../../models/User";

export default {
  name: "Remove Friend",
  path: "/friends/remove",
  method: "DELETE",
  description: "Remove a friend from your friends list.",
  requestBody: User,

}