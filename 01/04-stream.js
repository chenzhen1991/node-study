const  fs = require('fs');
const rs2 = fs.createReadStream('./111.jpg')
const ws2 = fs.createWriteStream('./222.jpg')
rs2.pipe(ws2)