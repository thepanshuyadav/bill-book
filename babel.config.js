module.exports = {
    presets:[
        "@babel/preset-env",
        ["@babel/preset-react", { "runtime": "automatic" }]
    ],
    plugins: [
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-syntax-dynamic-import",
        [
            "@babel/plugin-transform-runtime", {"regenerator": true}
        ]
    ]
}