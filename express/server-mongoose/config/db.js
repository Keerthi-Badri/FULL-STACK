const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://badrikeerthi18:keerthi1824@in-aws.apsg1.mongodb.net/max-store')

const connection = mongoose.connection;

connection.on('connected',() => (console.log("DB Connected")))
connection.on('error',(error) => (console.log("DB Error" + error)))

module.exports = mongoose

