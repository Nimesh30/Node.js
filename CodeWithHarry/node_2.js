const fs = require('fs');
let newFile = fs.readFileSync('sample.txt','utf-8');
console.log(newFile);

newFile = newFile.replace('nimesh','vishal');
console.log(newFile);

console.log("creating a new file..");
fs.writeFileSync('newFile.txt',newFile);

