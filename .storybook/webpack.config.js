const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');

module.exports = async ({ config }) => {

    // config.module.rules.push({
    //     test: /\.css$/,
    //     loaders: ['style-loader', 'css-loader', 'postcss-loader'],
    //     include: path.resolve(__dirname, '../'),
    // });

    config.module.rules.push({
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../src/assets')
    });

    config.resolve = {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            vue$: 'vue/dist/vue.esm.js',
            'assets': path.resolve('../src/assets'),
            '@': path.join(__dirname, '../src'),
        }
    };

    config.module.rules.push({
        test: /\.stories\.ts?$/,
        exclude: /node_modules/,
        use: [
            {
                loader: require.resolve('babel-loader')
            },
            {
                loader: require.resolve('@storybook/addon-storysource/loader')
            }
        ]
    });

    config.module.rules.push({
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
            {
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                    transpileOnly: true
                },
            }
        ]
    });

    config.plugins.push(new ForkTsCheckerWebpackPlugin());

    return config;
};