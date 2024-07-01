const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/api-runa', {
    useNewUrlParser: true,
    useUnifiedtopology: true
}).then(() => {
    console.log('mongo conectado')
}).catch(err => {
    console.log(err)
})

module.exports = mongoose