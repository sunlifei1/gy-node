var express = require('express')
var router = express.Router()
var Mock = require('mockjs')
var fs = require('fs')
/* GET home page. */

router.get('/', function (req, res, next) {
    // 异步读取
    fs.readFile('./123.txt', function (err, data) {
        if (err) {
            return console.error(err)
        }
        console.log('异步读取：' + data.toString())
        res.send({
            data: JSON.parse(data),
            code: 200,
            msg: 'success',
        }) //发送json格式的内容
    })
    let data = [
        {
            id: 1,
            url: 'https://www.baidu.com',
            title: '每日逛',
            sonItem: [
                {
                    title: 99,
                    id: 99,
                    url: 'https://www.baidu.com',
                },
            ],
        },
        {
            id: 2,
            url: 'https://www.fuliba2020.net',
            title: '福利吧',
        },
        {
            title: '百度',
            id: 3,
            url: 'https://www.baidu.com',
            title: '百度',
        },
        {
            title: '吾爱破',
            id: 4,
            url: 'https://www.52pojie.cn/index.php',
        },
        {
            title: '小刀网',
            id: 5,
            url: 'https://www.xd0.com',
        },
        {
            title: 6,
            id: 6,
            url: 'https://www.baidu.com',
        },
        {
            title: 7,
            id: 7,
            url: 'https://www.baidu.com',
        },
        {
            title: 8,
            id: 8,
            url: 'https://www.baidu.com',
        },
        {
            title: 9,
            id: 9,
            url: 'https://www.baidu.com',
        },
        {
            title: 10,
            id: 10,
            url: 'https://www.baidu.com',
        },
    ]
})
router.post('/add', function (req, res, next) {
    console.log(req.body.data)
    // 异步读取
    //3. fs.writeFile 写入文件（会覆盖之前的内容）（文件不存在就创建） utf8参数可以省略
    fs.writeFile('123.txt', JSON.stringify(req.body.data), 'utf8', function (
        error
    ) {
        if (error) {
            console.log(error)
            return false
        }
        console.log('写入成功')
    })
    res.header('Access-Control-Allow-Origin', '*')

    //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行

    res.header('Access-Control-Allow-Headers', '*')

    res.header('Access-Control-Allow-Methods', '*')

    res.header('Content-Type', 'application/json;charset=utf-8')

    res.send({ data: [], code: 200, msg: 'success' })
})

module.exports = router
