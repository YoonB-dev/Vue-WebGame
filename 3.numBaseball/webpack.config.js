const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

module.exports = {
    devtool : 'eval',
    entry:{
        app: path.join(__dirname,'main.js'),
    },
    module:{
        rules:[{
            test: /\.vue$/,
            loader: 'vue-loader',
        }],
    },
    plugins:[
        new VueLoaderPlugin(),
    ],
    output:{
        filename: '[name].js',
        path: path.join(__dirname,'dist'),
    },
};