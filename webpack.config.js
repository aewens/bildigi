const path = require("path");
const dev = process.env.NODE_ENV !== "production";

module.exports = {
    entry: path.resolve(__dirname, "src/index.jsx"),
    output: {
        path: path.resolve(__dirname, "static/dist"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".js", ".jsx", ".css"]
    },
    devtool: dev ? "eval-cheap-module-source-map" : "inline-cheap-module-source-map",
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    }//,
    //plugins: [
    //    new HtmlWebpackPlugin({
    //        template: "src/index.html",
    //        filename: "./index.html"
    //    })
    //]
}
