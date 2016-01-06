var util = require("util");
var EventEmitter = require("events");

function MyStream() {
    EventEmitter.call(this);
}

util.inherits(MyStream, EventEmitter);

MyStream.prototype.write = function(data) {
    this.emit("data", data);
};

var stream = new MyStream();

stream.on("data", data => {
    console.log('Received data: "' + data + '"');
});

stream.write("It works!"); // Received data: "It works!"

function MyStream2() {
    this._ee = new EventEmitter();
}

MyStream2.prototype.on = function(event, cb) {
    this._ee.on(event, cb);
};

MyStream2.prototype.emit = function(event) {
    this._ee.emit(event);
};

MyStream2.prototype.write = function(data) {
    this._ee.emit("data", data);
};

var stream2 = new MyStream2();

stream2.on("data", function(data) {
    console.log('Received data: "' + data + '"');
});

stream2.write("It works 2!"); // Received data: "It works!"
