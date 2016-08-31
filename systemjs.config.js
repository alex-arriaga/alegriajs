SystemJS.config({
    paths: {
        "app/": "src/",
        "npm:*": "node_modules/*"
    },
    map: {
        'plugin-babel': 'npm:systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': 'npm:systemjs-plugin-babel/systemjs-babel-browser.js'
    },
    transpiler: "plugin-babel",
    packages: {
        "app": {
            defaultExtension: "js"
        }
    }
});