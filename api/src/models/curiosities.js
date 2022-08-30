const mongoose = require('mongoose')
const CuriositiesSchema = new mongoose.Schema(
    {
        title: {
            type: String
        },
        text: {
            type: String
        },
        image: {
            type: String
        },
    },
    {
        versionKey: false,
        timestamps: true
    }
)

module.exports = mongoose.model('curiosities', CuriositiesSchema)