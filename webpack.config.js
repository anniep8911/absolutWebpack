const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports={
    mode: 'production',
    entry:'./src/index.js',
    output:{
        filename:'main.js',
        path:path.resolve(__dirname,'dist'),
    },
    module:{
        rules:[
            {
                test:/\.scss$/,
                use:[MiniCssExtractPlugin.loader,"css-loader",'sass-loader']
            },{
                test:/\.jpg$\.png$/,
                use:["file-loader"]
            },{
                test:/\.html$/,
                use:['html-loader']
            }
        ]
    },
    plugins:[new htmlWebpackPlugin({
        title:'index title',
        hash:'true',
        filename:'index.html',
        excludeChunks:['header'],
        template: './index.html',
    }),
     new MiniCssExtractPlugin({
         filename:'style.min.css',
     })
    ],
    devServer:{
        static:{
            directory : path.resolve(__dirname,'dist'),
        },
        port:8081,
    }
    
}