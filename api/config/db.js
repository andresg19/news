const mongoose = require('mongoose')
require('dotenv').config()
const DB_URI =   process.env.MONGOURL

module.exports = () => {
    const connect = () => {
        mongoose.connect(
            DB_URI,
            {
                keepAlive: true,
                useNewUrlParser: true,
                useUnifiedTopology: true
            },
            (err) => {
                if(err) {
                    console.log('DB ERROR!')
                } else {
                    console.log('Conexion exitosa!')
                }
            }
        )
    }
    connect();
}