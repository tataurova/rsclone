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
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: `babel-loader`,
                },
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: {
                                localIdentName: '[name]__[local]___[hash:base64:5]',
                            },
                        }
                    }
                ],
                include: /\.module\.css$/
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
                exclude: /\.module\.css$/
            },
            {
                test: /\.(tsx|ts)?$/,
                loader: `ts-loader`
            }
        ],
    },
    resolve: {
        extensions: [`.ts`, `.tsx`, `.js`, `json`]
    },
    devtool: 'source-map',
};
