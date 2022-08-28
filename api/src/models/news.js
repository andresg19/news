const mongoose = require('mongoose')
const NewsSchema = new mongoose.Schema(
    {
        titleNew: {
            type: String
        },
        descriptionNew: {
            type: String
        },
        textNew: {
            type: String
        },
        imageNew: {
            type: String
        },
        dateNew: {
            type: String
        },
    },
    {
        versionKey: false,
        timestamps: true
    }
)

module.exports = mongoose.model('news', NewsSchema)