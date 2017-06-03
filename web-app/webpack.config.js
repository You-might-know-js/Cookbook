const path = require('path');
const webpack = require('webpack');

const PATHS = {
    client: path.join(__dirname, 'client'),
    dist: path.join(__dirname, 'dist'),
};

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        index: path.join(PATHS.app, 'index.jsx'),
    },

    output: {
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
        publicPath: '/',
        path: path.join(PATHS.dist)
    },

    module: {
        rules: [
            {
                test: /\.(jsx|js)?$/,
                exclude: /node_modules/,
                use: 'babel-loader',  
            },

            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },

            {
                test: /\.svg?$/,
                use: [
                    {
                        loader: 'svg-sprite-loader',
                    },

                    {
                        loader: 'svgo-loader',
                        options: {
                            plugins: [
                                { removeTitle: true },
                                { convertColors: { shorthex: false }},
                                { convertPathData: false},
                            ],
                        },
                    },
                ],

                //include: path.resolve('./client/static/icons'),
            },

            {
              test: /\.(jpg|png|webp)$/,
              use: 'url-loader',
            },
        ],
    },

    resolve: {
        extensions: ['.js', '.jsx', '.json', '.css', '.svg'],
        alias: {
         /* styles: path.resolve('./client/static/styles'),
            icons: path.resolve('./client/static/icons'),
            images: path.resolve('./client/static/images'),
         */       
        },
    },
};
