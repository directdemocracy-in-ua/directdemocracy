
var NodeRSA = require('node-rsa');

exports.importPKCS8 = importPKCS8;
function importPKCS8(keyDataInPKCS1Format) {
	var rsa = new NodeRSA(keyDataInPKCS1Format);
	return new KeyStore(rsa);
}


function KeyStore(rsaKey) {
	this._rsaKey = rsaKey;
}

KeyStore.prototype = {
	getLength: function() {
		return this._rsaKey.keyPair.cache.keyBitLength;
	}
};