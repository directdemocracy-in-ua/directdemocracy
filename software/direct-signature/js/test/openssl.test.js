

const openssl = require("../openssl");


describe('openssl', () => {
	it("run",  () => {
		openssl.generateKeys().then((key) => {
			console.log(key);
		});
	});
});