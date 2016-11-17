
var logger = require('./logger')("direct-signature.application");

exports.DirectSignatureApplication = DirectSignatureApplication;
function DirectSignatureApplication(options) {
	
}

DirectSignatureApplication.prototype.start = function() {
	logger.log("Direct Signature Application");
}

DirectSignatureApplication.prototype.stop = function() {
	
}

