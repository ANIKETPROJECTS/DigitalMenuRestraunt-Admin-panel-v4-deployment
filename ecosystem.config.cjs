module.exports = {
  apps: [
    {
      name: "restaurant-management-app",
      script: "dist/index.js",
      env: {
        NODE_ENV: "production",
        PORT: 5000
      }
    }
  ]
};
