import User from "../../models/User";

export default {
  name: "Accept Friend",
  path: "/accept",
  method: "POST",
  description: "Accept a friend request",
  requestBody: User,

}