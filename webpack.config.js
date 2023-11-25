// const Dotenv = require("dotenv-webpack");
const path = require('path');

// const FilterWarningsPlugin = require("webpack-filter-warnings-plugin");
const nodeExternals = require('webpack-node-externals');
module.exports = {
  target: "node",
  entry: "./server.js",
  // externals: {
  //   bufferutil: "bufferutil",
  //   "aws-crt": "aws-crt",
  //   "utf-8-validate": "utf-8-validate",
  //   "pg-hstore":"pg-hstore"
  // },
  externals: [nodeExternals()], // Exclude Node.js modules from the bundle
  output: {
    path: path.resolve(__dirname, 'dist'), // Specify the output directory
    filename: "index.js",
    // libraryTarget: "commonjs2",
  },
  // module: {
  //   rules: [
  //     {
  //       // test: [/.js$/],
  //       // exclude: /(node_modules)/,
  //       use: {
  //         loader: "babel-loader",
  //         options: {
  //           presets: ["@babel/preset-env"],
  //         },
  //       },
  //     },
  //   ],
  // },
  // plugins: [
  //   new Dotenv(),
    // new FilterWarningsPlugin({
    //   exclude: [
    //     /mongodb/,
    //     /mssql/,
    //     /mysql/,
    //     /mysql2/,
    //     /oracledb/,
    //     /pg/,
    //     /pg-hstore/,
    //     /pg-native/,
    //     /pg-query-stream/,
    //     /react-native-sqlite-storage/,
    //     /redis/,
    //     /sqlite3/,
    //     /sql.js/,
    //     /typeorm-aurora-data-api-driver/,
    //     /Critical dependency/,
    //   ],
    // }),
  // ],
};
