
var logger = require('./logger')("direct-signature.application");
var NodeRSA = require('node-rsa');

exports.DirectSignatureApplication = DirectSignatureApplication;
function DirectSignatureApplication(options) {
	
}

DirectSignatureApplication.prototype.createKey = function() {
	var newKey = new NodeRSA({b: 2048});
	logger.log("\n" + newKey.exportKey());
}

DirectSignatureApplication.prototype.stop = function() {
	
}

