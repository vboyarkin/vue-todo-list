const path = require("path");

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/vue-todo-list/" : "/",
  outputDir: path.resolve(__dirname, "./docs"),
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/styles/_variables.sass"`,
      },
    },
  },
};
