const path = require(`path`);

module.exports = {
    entry: `./src/index.tsx`,
    output: {
        filename: `bundle.js`,
        path: path.join(__dirname, `public`)
    },
    devServer: {
        contentBase: path.join(__dirname, `public`),
        open: false,
        port: 1337,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    "style-loader",
                    "@teamsupercell/typings-for-css-modules-loader",
                    {
                        loader: "css-loader",
                        options: { modules: true },
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|jpg|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.svg$/,
                use: {
                    loader: 'svg-url-loader',
                    options: {
                        encoding: 'base64'
                    }
                }
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: `babel-loader`,
                },
            },
            {
                test: /\.(tsx|ts)?$/,
                loader: `ts-loader`
            }
        ],
    },
    resolve: {
        extensions: [`.ts`, `.tsx`, `.js`, `json`, ".css"]
    },
    devtool: 'source-map',
};
