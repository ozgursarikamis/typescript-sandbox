module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    },
    plugins: ["@typescript-eslint"],
    extends: [
        "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        "eslint:recommended"
    ],
    rules: {
        "@typescript-eslint/no-unused-vars": "off",
        "no-unused-vars": "off",
    },
    env: {
        "browser": true,
        "node": true
    }
};