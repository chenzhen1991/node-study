const fs = require('fs');
const {promisify} = require('util');

const readFile = promisify(fs.readFile);

// fs.readFile('./config.js', (err, data) => {
//     if(err) {
//         console.log(err)
//     }

//     console.log('data', data, data.toString())
// })

//相当于设置了一个0秒的定时器  放入到eventLoop
process.nextTick(async () => {
    const data = await readFile('./config.js')
    console.log('data', data, data.toString());
    
})