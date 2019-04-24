const path = require("path");

module.exports = {
  mode: "development",
  entry: "./script.js",
  output: {
    path: path.resolve(__dirname, "./"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      }
    ]
  }
};
