
var logger = require("./logger");
var directSignatureModule = require('./direct-signature');

var application = new directSignatureModule.DirectSignatureApplication({
	
})

logger.log("Running Application");

application.createKey();




