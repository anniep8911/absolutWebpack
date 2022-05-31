const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports={
    entry:'./src/index.js',
    output:{
        filename:'main.js',
        path:path.resolve(__dirname,'dist'),
    },
    module:{
        rules:[
            {
                test:/\.scss$/,
                // use:["style-loader","css-loader"]
                use:[MiniCssExtractPlugin.loader,"css-loader",'sass-loader']
            },{
                test:/\.jpg$\.png$/,
                use:["file-loader"]
            }
        ]
    },
    plugins:[new htmlWebpackPlugin({
        template: './index.html',
    }),
     new MiniCssExtractPlugin({
         filename:'style.css',
     })

    ],
    devServer:{
        static:{
            directory : path.resolve(__dirname,'dist'),
        },
        port:8081,
    }
}