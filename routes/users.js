var express = require('express')
var router = express.Router()

// let db = require('../server/config')
/* POST users listing. */
router.post('/', function (req, res, next) {
    // db.query(sql, (err, rows) => {
    //     if (err) {
    //         res.json({ err: 'chucuole' })
    //     } else {
    //         res.json({ list: rows })
    //     }
    // })
    const json = {
        name: '张三',
        age: 18,
        gender: 'male',
    }
    res.json(json)
})

module.exports = router
