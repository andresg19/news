const mongoose = require('mongoose')

const DB_URI =  `mongodb://localhost:27017/appmusic`

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