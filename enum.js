function enumeration(namesToValues){
	var enumeration = function (){throw "Can't create new impement of " + " Enumeration";};

	var proto = enumeration.prototype = {
		constructor: enumeration, 
		toString: function() {return this.name;},
		valueOf: function() {return this.value; },
		toJSON: function() { return this.name; }
	};

	enumeration.values = [];

	for (name in namesToValues) {
		var e = Object.create(proto);
		e.name = name;
		e.value = namesToValues[name];
		enumeration[name] = e;
		enumeration.values.push(e);
	}

	enumeration.forEach = function(f,c) {
		for (let i = 0; i<this.values.length; i++) f.call(c, this.values[i]);
	};

	return enumeration;
}
      
 module.exports = enumeration;
