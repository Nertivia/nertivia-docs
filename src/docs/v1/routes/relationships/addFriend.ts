import User from "../../models/User";

export default {
  name: "Add Friend",
  path: "/friends/add",
  method: "POST",
  description: "Add a friend",
  requestBody: User,
}