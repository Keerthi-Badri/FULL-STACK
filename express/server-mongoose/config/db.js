const mongoose=require('mongoose')

mongoose.connect("mongodb+srv://badrikeerthi18:keerthi1824@in-aws.apsg1.mongodb.net/")

const connection=mongoose.connection;

connection.on('connected',() => (console.log("DB Connected")))
connection.on('error',() => (console.log("DB Error")))

module.experts=mongoose