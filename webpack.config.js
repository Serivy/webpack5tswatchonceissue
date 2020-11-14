module.exports = (env, argv) => {
    var isDev = env ? env.mode !== 'production' : false || argv ? argv.mode !== 'production'  : false;

    return {
        entry: {
            web: "./simple.ts"
        },
        context: __dirname + "/src/",
        output: {
            filename: "bundle.js",
            path: __dirname,
            publicPath: "dist",
        },
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".json"]
        },
        module: {
            rules: [
                { test: /\.tsx?$/, loader: "ts-loader",  options: { transpileOnly : false, experimentalWatchApi: true } },
                { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            ]
        }
    };
}