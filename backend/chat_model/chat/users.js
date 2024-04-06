const mongoose = require('mongoose')

const userSechema = mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,'Name must be Required']
        },
        email:{
            type:String,
            unique:true,
            required:[true, 'Email ']
        },
        password:{
            type:String,
            required:[true]
        },
        profile:{
            type:String

        },
        createdAt: {
            type: Date,
            default: Date.now,
          }
    }
)

module.exports = mongoose.model('users',userSechema)