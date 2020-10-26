module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "https://cseweb.ucsd.edu/~jgarzagu/"
      : "",
  devServer: {
    watchOptions: {
      // Enable re-build when the a file changes.
      aggregateTimeout: 500, // Time between rebuilds
      poll: 1500, // Poll every second to prevent high-CPU
      ignored: ["node_modules/", "src/"]
    },
    liveReload: false // Reload the webpage manually
  }
};
