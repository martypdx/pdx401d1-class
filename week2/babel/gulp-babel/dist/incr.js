'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = incr;

var foo = 'foo';

function incr() {
	var arr = arguments.length <= 0 || arguments[0] === undefined ? [1, 2, 3] : arguments[0];

	return arr.map(function (x) {
		return x + 1;
	});
}