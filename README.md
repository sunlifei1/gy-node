## 项目启动

```js
npm run dev
```

## 更改端口号

`在app.js中`

```js
process.env.PORT = 2000 //在这里更改端口号
```

## 新增接口api

`在根目录下routes下新建js文件`

```js
var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {

    res.json({ title: 'Express' })//
})

module.exports = router
```

`在根目录app.js文件下`

```js
var indexRouter = require('./routes/index') //导入上边新增的接口
app.use('/users', usersRouter) //并且注册到路由上
```



