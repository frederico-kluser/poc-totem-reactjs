import '@testing-library/jest-dom';

export default {
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.(ts|tsx)$': [
			'ts-jest',
			{
				babelConfig: {
					presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
				},
			},
		],
	},
	moduleNameMapper: {
		'\\.(css|less|sass|scss)$': 'identity-obj-proxy',
		'^.+\\.svg$': 'jest-transformer-svg',
	},
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
