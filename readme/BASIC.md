##workflow

1.  add the following files:
        a. .gitignore
        b. package.json
        c. webpack.config.js
2.  install npm (npm i)

3. create src folder, this is your working area
4. at src create two files
    1. index.html template file that config at webpack
        plugins: [
             new HtmlWebPackPlugin({
                 template: "./basic/index.html",
                 filename: "./index.html"
             })
         ]
    2. index.js entry point. if you like to config it at webpack
        entry: {
                bundle: './basic/index.js'
        },
5. run the app in dev: npm run start = webpack-dev-server --open --mode development
   run webpack dev server with default webpack.config.js file.
   if you like to custom the webpack config file use:
   example: webpack-dev-server --open --mode development --config basic-webpack.config.js
6. at this point webpack dev server will do the following things:
    1. open our app in browser on a new tab
    2. will display our index.html file
    3. inject index.js to the bottom
    4. refresh on every change on our js files and html files

 7. create dist folder for later "webpack --mode production" that will send result to dist
 8. now our dist in actually our application waiting for production
