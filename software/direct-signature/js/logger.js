
var GLOBAL_LOGGER_ID = "direct_signature";

module.exports = function(id) {
	return new Logger(id);
}

function Logger(id) {
	this._id = id;
}
Logger.prototype.getId = function() {
	return this._id;
}

Logger.prototype.log = function(message) {
	console.log("[LOG]", this._id + ":", message);
}


var globalLogger = new Logger(GLOBAL_LOGGER_ID)

module.exports.log = log;


function log(message) {
	globalLogger.log(message);
}


