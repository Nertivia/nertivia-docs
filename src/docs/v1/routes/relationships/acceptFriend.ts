import User from "../../models/User";

export default {
  name: "Accept Friend",
  path: "/friends/accept",
  method: "POST",
  description: "Accept a friend request",
  requestBody: User,

}