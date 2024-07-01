const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedtopology: true
}).then(() => {
    console.log('mongo conectado')
}).catch(err => {
    console.log(err)
})

module.exports = mongoose
