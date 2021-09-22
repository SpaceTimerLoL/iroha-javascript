/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
    transform: {
        '^.+\\.(ts|js)$': [
            'esbuild-jest',
            {
                sourcemap: true,
            },
        ],
    },
    testEnvironment: 'node',
    testMatch: ['**/*.spec.ts'],
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
    modulePathIgnorePatterns: ['/dist/'],
};

module.exports = config;
