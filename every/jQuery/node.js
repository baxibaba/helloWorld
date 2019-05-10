var fs = require('fs')
fs.readFile('a.md', 'utf8', function (err, data) {
    console.log("第0次", data);
    fs.readFile('a.md', 'utf8', function (err, data) {
        console.log("第1次", data)
    })
    setTimeout(() => {
        fs.readFile('a.md', 'utf8', function (err, data) {
            console.log("第3次", data)
        })
    }, 1000)
    setTimeout(() => {
        fs.readFile('a.md', 'utf8', function (err, data) {
            console.log("第4次", data)
        })
    }, 0)
    setTimeout(() => {
        fs.readFile('a.md', 'utf8', function (err, data) {
            console.log("第5次", data)
        })
    }, 1000)
    // fs.readFile(data.toString() + "md", function () {
    //     console.log(data.toString())
    // })
})