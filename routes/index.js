var express = require('express')
var router = express.Router()
var Mock = require('mockjs')
/* GET home page. */

router.get('/', function (req, res, next) {
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
    // res.send('发送文本格式的内容')   //发送文本格式的内容
    res.json({ data: data, code: 200, msg: 'success' }) //发送json格式的内容
})

module.exports = router
