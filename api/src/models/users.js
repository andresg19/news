const mongoose = require('mongoose')
const UsersSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true
      },
      lastName: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true,
        unique: true
      },
      password: {
        type: String,
        required: true
      },
      address: {
        type: String,
        required: true
      },
      isLogged: {
        type: Boolean,
        default: 
          false
    }
    },
    {
        versionKey: false,
        timestamps: true
    }
)

module.exports = mongoose.model('users', UsersSchema)