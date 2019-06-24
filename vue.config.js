// vue.config.js
module.exports = {
    pluginOptions: {
        electronBuilder: {
            builderOptions: {
                "artifactName": "maze-game.exe",
                "win": {
                    "target": [
                        {
                            "target": "nsis",
                            "arch": [
                                "x64",
                                "ia32"
                            ]
                        }
                    ]
                }
            }
        }
    }
}


