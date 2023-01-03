// @ts-ignore
const path = require(`path`);

module.exports = {
    webpack: {
        alias: {
            "@components": path.resolve(__dirname, "src/components"),
            "@pages": path.resolve(__dirname, "src/pages"),
            "@utils": path.resolve(__dirname, "src/utils"),
            "@api": path.resolve(__dirname, "src/api"),
            "@services": path.resolve(__dirname, "src/services"),
            "@store": path.resolve(__dirname, "src/store")
        }
    }
};
