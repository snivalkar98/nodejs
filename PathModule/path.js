const path = require("path");

// console.log(path.dirname('C:/Users/Admin/Desktop/SSN/project1/PathModule/path.js'));
// console.log(path.extname('C:/Users/Admin/Desktop/SSN/project1/PathModule/path.js'));
// console.log(path.basename('C:/Users/Admin/Desktop/SSN/project1/PathModule/path.js'));
// console.log(path.parse('C:/Users/Admin/Desktop/SSN/project1/PathModule/path.js'));
const mypath = path.parse('C:/Users/Admin/Desktop/SSN/project1/PathModule/path.js');
console.log(mypath.root);