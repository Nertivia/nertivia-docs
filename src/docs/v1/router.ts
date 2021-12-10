export default {
  "/users": {
    name: "Users",
    path: "/users",
    description: "Interact with the users API.",
    routes: async () => (await import('./routes/users/routes')).default
  },
  "/relationships": {
    name: "Relationships",
    path: "/relationships",
    description: "Interact with the relationships API.",
    routes: async () => (await import('./routes/relationships/routes')).default
  }
}