const mongoose = require('mongoose')
const uri = 'mongodb+srv://sukhi:sukhvinder@cluster0.ruugl0h.mongodb.net/whatsapp?retryWrites=true&w=majority'

const db = () => {
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Database Connected")
    }).catch((err) => {
        console.error(`Error connecting to database ${err}`)
    })
}

module.exports = db