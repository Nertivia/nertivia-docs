
export default {
  name: "Update Presence",
  path: "/update",
  method: "PATCH",
  description: "Update user presence. 0 = offline, 1 = online, 2 = Away, 3 = Busy",
  requestBody: {
    presence: {type: 'Number', example: "1", required: true},
  },
}