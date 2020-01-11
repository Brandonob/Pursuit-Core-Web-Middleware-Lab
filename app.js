const express = require('express')
const cors = require('cors')

 const port = 3000;

 
const app = express()
 app.use(cors())
 const animalArray = ['Lion','Zebra','Monkey','dinosaur','fish']
 const range = []
 const randomNum = (req, res, next) => {
     console.log(Math.floor(Math.random(2)*animalArray.length))
     next()
     // res.json(randomNum())
    }
    
    const isAnimal = (req, res, next) => {
        let animal = req.params.id 
        
        if(!animalArray.includes(animal)){
            res.json({
                status: "failed",
                message: "false"
            })
            
        } else{
            res.json({
                status: "success",
                message: "true"
            })
            
        }
        
        next()
    }
//     const generateSpread = (req,res,next) => {
        
//         next()
// }

app.use("/random", randomNum)
 app.get('/animal/:id',isAnimal,(req,res) => {
     res.json({
        animalArray
     })
 })

 app.get('/random'), randomNum,(req,res) => {

     res.json("sucess: " + randomNum)
     
 }

app.listen(port, () => {
    console.log("you are on port: ", port);
    
})