module.exports = {
  apps: [
    {
      name: "restaurant-management-app",
      script: "npm",
      args: "run start:prod",
      env: {
        NODE_ENV: "production",
        PORT: 5000
      }
    }
  ]
};
