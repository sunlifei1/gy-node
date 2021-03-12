var express = require('express')
var router = express.Router()
var Mock = require('mockjs')
/* GET home page. */

router.get('/', function (req, res, next) {
    var data = Mock.mock({
        'list|1-10': [
            {
                'id|+1': 1,
            },
        ],
    })
    // res.send('发送文本格式的内容')   //发送文本格式的内容
    res.json({ title: data }) //发送json格式的内容
})

module.exports = router
