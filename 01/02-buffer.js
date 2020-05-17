const buffer1 = Buffer.alloc(10)
console.log(buffer1);

const buf2 = Buffer.from('xiao');
console.log(buf2);

const buf3 = Buffer.from('跩')
console.log(buf3);

const buf4 = Buffer.concat([buf2,buf3])
console.log(buf4, buf4.toString());

