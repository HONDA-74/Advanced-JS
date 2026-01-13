var obj = {
  id: "xyz",
  nm: "dfdsf",
  fun: function () {
    console.log("test");
  },
  getSetGen: function () {
    for (var key of Object.keys(this)) {
      if (key == "getSetGen" || typeof this[key] == "function") continue;
      const capKey = key.charAt(0).toUpperCase() + key.slice(1);
      (function(k) {
      this["get" + capKey] = function() {
        return this[k];
      };
      this["set" + capKey] = function(val) {
        this[k] = val;
      };
    }).call(this,key);
    }
  },
};

console.log("before : " + Object.keys(obj));

obj.getSetGen();

console.log("after : " + Object.keys(obj));

console.log(obj.getId());
obj.setId("123");
console.log(obj.getId());
