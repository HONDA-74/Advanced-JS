const course = (obj) => {
  const defaults = {
    courseName: "ES6",
    courseDuration: "3days",
    courseOwner: "JavaScript",
  };
  
  const result = Object.assign({},defaults, obj);
  for (const key in result) {
    if (!defaults.hasOwnProperty(key)) {
      throw new Error("Invalid key");
    }
  }
  return result;
};

console.log("==============Task1==============");

console.log(course({ courseName: "C++", courseDuration: "5days" }));

console.log(course({ courseName: "C++", courseDuration: "5days", courseOwner: "Google" }));

console.log(course({}));

console.log(course({ courseName: "C++", courseFee: "5000" }));
