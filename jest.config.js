module.exports = {
    moduleFileExtensions: [
        "js"
    ],
    transform: {
        "^.+\\.(js)$": "<rootDir>/node_modules/babel-jest"
    },
    testMatch: [
        "**/*.(test|spec).(js)"
    ],
};