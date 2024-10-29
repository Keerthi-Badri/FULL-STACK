const express=require('express')
const app=express()
const port=3000
app.use{express.json()}


app.get('/',(req,res)=> res.setMaxListeners(200).json({message:"Welcome"}))

app.listem(port,(()=> console.log(`Listening on ${port}`)))