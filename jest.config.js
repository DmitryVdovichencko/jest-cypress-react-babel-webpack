const path = require("path")

module.exports = {
	testEnvironment: "jest-environment-jsdom",
	moduleNameMapper:{
		'\\.css$': require.resolve('./test/file-mock.js'),
		'\\.module\\.css$': 'identity-obj-proxy'
	},
	moduleDirectories: ['node_modules', path.join(__dirname, 'src'), 'shared'],
	setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
	snapshotSerializers: ['@emotion/jest/serializer'],
}