import addFriend from "./addFriend";
import acceptFriend from "./acceptFriend";
import removeFriend from "./removeFriend";
import blockUser from "./blockUser";

export default {
  "/friends/add": addFriend,
  "/friends/accept": acceptFriend,
  "/friends/remove": removeFriend,
  "/users/block": blockUser,
}