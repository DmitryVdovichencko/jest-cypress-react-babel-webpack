module.exports = {
	testEnvironment: "jest-environment-jsdom",
	moduleNameMapper:{
		'\\.css$': require.resolve('./test/file-mock.js'),
		'\\.module\\.css$': 'identity-obj-proxy'
	}
}