//#region  require packages used in the project(該專案需使用的Packages)
const express = require('express')
const app = express()
// 如果在 Heroku 環境則使用 process.env.PORT
// 否則為本地環境，使用 3000 
const PORT = process.env.PORT || 3000

//setting express-handlebars
const exphbs = require('express-handlebars')
app.engine('hbs' , exphbs({defaultLayout:'main' , extname:'.hbs'}))
app.set('view engine' , 'hbs')

// setting body-parser
app.use(express.urlencoded({extended:true}))

//setting method-override
const methodOverride = require('method-override') // 載入 method-override
app.use(methodOverride('_method'))// 設定每一筆請求都會透過 methodOverride 進行前置處理

//setting routes
const routes = require('./routes')// 引用路由器
app.use(routes)// 將 request 導入路由器

//setting database 
require('./config/mongoose')

const Todo = require('./models/todo.js') // 載入 Todo model

//#endregion

//#endregion

//#region  routes setting(設定路由)





//#endregion

//#region  start and listen on the Express server(啟動伺服器)
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})
//#endregion