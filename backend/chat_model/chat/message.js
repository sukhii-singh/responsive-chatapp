const mongoose=require('mongoose')
const schema=new mongoose.Schema({
    friendsAndConversationId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"friendsAndConversation",
    },
    sender_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true
    },
    reciever_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
    },
    message:{
        textmessage:{
            type:String
        },file:{
            type:Array
        },
        file_key:{
            type:Array
        }
    },
    chatGroupId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"chatgroup",
    },
    is_seen:{
        type:String,
        required:true,
        default:false
    },
    shoptDelete:{
        type:String,
        default:false
    },
    replyid:[{type:mongoose.Schema.Types.ObjectId,ref:"messages"}]
},{timestamps:true})

// schema.set('toObject',{virtuals:true})
// schema.set('toJSON',{virtuals:true})

// schema.virtual('replyid',{
//     ref:'replies',
//     localField:'_id',
//     foreignField:'message_id',
//     justOne:false,
//     // options:{strictPopulate:true}
// })

const messagesmodel=new mongoose.model("messages",schema)

module.exports=messagesmodel