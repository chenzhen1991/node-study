const {promisify} = require('util');
const figlet = promisify(require('figlet'));
const clear = require('clear');
const chalk = require('chalk');
const open = require('open')

const log = content => console.log(chalk.green(content));
const {clone} = require('./download')

const spawn = async (...args) => {
    console.log('zhixig');
    
    const { spawn } = require('child_process');

    return new Promise(resolve => {
        const proc = spawn(...args)
        proc.stdout.pipe(process.stdout)
        proc.stderr.pipe(process.stderr)
        console.log(333);
        proc.on('close', () => {
            console.log(234);
            
            resolve()
        })
    })
}
module.exports = async name => {
    // clear()

    // const data = await figlet('zzr we are family')
    // log(data)

    // log('小跩  ' + name);
    // await clone('github:su37josephxia/vue-template', name)

    // log('安装依赖')
    // await spawn('cnpm.cmd', ['install'], { cwd: `./${name}` })
    // log(
    //     chalk.green(
    //         `ok 安装完成：
    //         To Get Start:
    //         ================================
    //         cd  ${name}
    //         npm run serve
    //         ================================
    //         `
    //     )
    // )
//     // 打开浏览器
    open(`http://localhost:8080`)
    await spawn('npm.cmd', ['run', 'serve'], {cwd: `./${name}`})
}
