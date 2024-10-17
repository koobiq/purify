import {resolve} from 'node:path';

import type {Config} from 'jest';
import {pathsToModuleNameMapper} from 'ts-jest';

process.env.TZ = 'Europe/Moscow';
process.env['FORCE_COLOR'] = 'true';
process.env['TS_JEST_DISABLE_VER_CHECKER'] = 'true';

const {compilerOptions} = require(resolve(__dirname, 'tsconfig.json'));

const config: Config = {
    rootDir: __dirname,
    preset: 'jest-preset-angular',
    testEnvironment: 'jsdom',
    extensionsToTreatAsEsm: ['.ts'],
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    modulePathIgnorePatterns: ['dist'],
    transform: {'^.+\\.(ts|js|mjs|html|svg)$': 'jest-preset-angular'},
    testMatch: ['<rootDir>/**/*.spec.ts'],
    coverageDirectory: '<rootDir>/coverage/purify',
    collectCoverageFrom: ['<rootDir>/projects/purify/**/*.ts', '!<rootDir>/**/*.spec.ts'],
    coveragePathIgnorePatterns: ['public-api.ts'],
    coverageReporters: ['html', 'lcov', 'json', 'text'],
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
        prefix: `<rootDir>/${compilerOptions.baseUrl}/`
            .replaceAll('./', '/')
            .replaceAll(/\/\/+/g, '/'),
    }),
    verbose: true,
};

export default config;
