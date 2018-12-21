module.exports = {
    root: true,

    env: {
        browser: true,
        node: true,
    },

    extends: [
        'eslint-config-ads',
    ],

    parserOptions: {
        parser: 'babel-eslint',
    },
};
