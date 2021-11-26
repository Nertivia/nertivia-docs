export default [
  {
    name: "Users",
    path: "/users",
    description: "Interact with the users API.",
    routes: async () => (await import('./routes/users/routes')).default
  }
]