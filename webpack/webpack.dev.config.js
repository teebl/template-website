var webpack = require("webpack");
var path = require("path");

var parentDir = path.join(__dirname, "../");

module.exports = {
  mode: "development",
  entry: [path.join(parentDir, "index.js")],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["env", "react"]
        }
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpg)$/,
        loader: "url?limit=25000"
      }
    ]
  },
  output: {
    path: parentDir + "/dist",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: parentDir,
    historyApiFallback: true
  }
};
