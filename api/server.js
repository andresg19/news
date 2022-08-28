const express = require('express')
const initDb = require('./config/db')
const bodyParser = require('body-parser')
const app = express()

const port = 3001

const newsRouter = require('./src/routes/newsRoutes')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

app.use(
    express.json({
        limit: '20mb',
    })
)
app.use(
    express.urlencoded({
        limit: '20mb',
        extended: true
    })
)
app.use(logger('dev'));
app.use(cookieParser())

app.use(newsRouter)



app.listen(port, () => {
    console.log('La app esta en linea')
})

initDb()