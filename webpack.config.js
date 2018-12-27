const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
const MODE =
      process.env.npm_lifecycle_event === "build" ? "production" : "development";


// Plugins of the main config shared between development and production
var commonMainPlugins = [];
var developmentMainPlugins = [ // Suggested for hot-loading.
                               new webpack.NamedModulesPlugin() 
                               // Prevents compilation errors causing the hot loader to 
                               // lose state.
                             , new webpack.NoEmitOnErrorsPlugin() 
                             ];

var productionMainPlugins = [];

// Config for the main.js bundle, which contains all relevant code for the main process
// of the electron app.
var mainConfig = { mode: MODE
                 , entry: { main: "./src/gui/main.ts" }
                 , target: "electron-main"
                 , output: { path: path.resolve(__dirname, "target")
                           , filename: "[name].js"
                           }
                 , plugins: commonMainPlugins.concat( MODE === "development"
                                                           ? developmentMainPlugins
                                                           : productionMainPlugins)
                 , module: { rules: [ { test: /\.ts$/, loader: "ts-loader" }
                                    ]
                           }
                 , resolve: { extensions: [".js", ".ts", ]
                            }
                 , serve: { inline: true
                          , stats: "errors-only"
                          }
                 };


// Plugins of the renderer config shared between development and production
var commonRendererPlugins = [ new HtmlWebpackPlugin({ title: "Quick-start application"
                                                    , template: "./src/gui/index.html"
                                                })
                            ];

var developmentRendererPlugins = [ // Suggested for hot-loading.
                                   new webpack.NamedModulesPlugin() 
                                   // Prevents compilation errors causing the hot loader to 
                                   // lose state.
                                 , new webpack.NoEmitOnErrorsPlugin() 
                                 ];

var productionRendererPlugins = [];


//  Config for the renderer.js bundle, which contains all relevant code for the 
// renderer process of the electron app.
var rendererConfig = 
        { mode: MODE
        , entry: { renderer: "./src/gui/renderer.ts" }
        , target: "electron-renderer"
        , output: { path: path.resolve(__dirname, "target")
                  , filename: "[name].js"
                  , publicPath: ""
                  }
        , plugins: commonRendererPlugins.concat( MODE === "development"
                                                      ? developmentRendererPlugins
                                                      : productionRendererPlugins)
        , module: { rules: [ { test: [/\.elm$/]
                             , exclude: [/elm-stuff/, /node_modules/]
                             , use: [ //{ loader: "elm-hot-webpack-loader" },
                                      { loader: "elm-webpack-loader"
                                      , options: MODE === "production" 
                                                      ? {} 
                                                      : { debug: true
                                                        , forceWatch: true 
                                                        }
                                      }
                                    ]
                             }
                           , { test: /\.ts$/, loader: "ts-loader" }
                           ]
                  }
        , resolve: { extensions: [".ts", ".elm", ".js"] }
        , serve: { inline: true
                 , stats: "errors-only"
                 }
        };


module.exports = function(env) { 
    return [ mainConfig, rendererConfig ];
};
