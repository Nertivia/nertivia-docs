export default {
  "/users": {
    name: "Users",
    path: "/users",
    description: "Interact with the users API.",
    routes: async () => (await import('./routes/users/routes')).default
  },
  "/friends": {
    name: "Friends",
    path: "/friends",
    description: "Interact with the friends API.",
    routes: async () => (await import('./routes/friends/routes')).default
  }
}