const withPlugins = require("next-compose-plugins");
const withTypescript = require("@zeit/next-typescript");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const less = require("@zeit/next-less");
const css = require("@zeit/next-css");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const commonsChunkConfig = require("@zeit/next-css/commons-chunk-config");
// next.js configuration
const nextConfig = {
    onDemandEntries: {
        maxInactiveAge: 25 * 1000,
        pagesBufferLength: 2,
    },
    pageExtensions: ['jsx', 'js', 'tsx'],
    webpack: (config, { dev, isServer, defaultLoaders }) => {
        // Perform customizations to webpack config
        if (isServer) config.plugins.push(new ForkTsCheckerWebpackPlugin());
        // Important: return the modified config
        extractCSSPlugin = new ExtractTextPlugin({
            filename: "static/style.css"
        });
        config.plugins.push(extractCSSPlugin)
        if (!isServer) {
            config = commonsChunkConfig(config, /\.less|\.css$/);
        }
        config.module.rules.push({
            test: /\.(woff|svg|eot|ttf)$/,
            loader: "url-loader?limit=163840&name=static/" + "/font/" + "[name].[ext]"
        });
        return config;
    },
    webpackDevMiddleware: config => {
        return config;
    },
};
module.exports = withPlugins(
    [
        less,
        css,
        withTypescript,
    ],
    nextConfig,
); 
