const express = require('express')
const app = express()
require('dotenv').config()
const PORT= process.env.PORT || 8000

app.use(express.json()) //undefined
app.use(express.urlencoded({extended:true})) //body data

// app.get('/', (req, res) => res.send('Hello World!'))

var arr=[]
//api
// app.post('/user',(req,res)=>{
//     res.send("post api")
//     console.log("post")

//     console.log(req.body)
//     arr.push(req.body)
//     // res.json('inserted')
// })

app.post('/user',(req,res)=>{
    const{Blog_title,blog_date,author_name,release_date,URL}=req.body;
    const newUser={
        title:Blog_title,
        date:blog_date,
        name:author_name,
        rdate:release_date,
        image:URL
    }
    console.log(newUser)
    arr.push(newUser);
    res.json({
        success:true,
        message:"Your record has been inserted"
    })
})

// app.post('/user',(req,res)=>{
//     const{username,grid}=req.body;
//     const newUser={
//         user_name:username,
//         user_grid:grid
//     }
//     console.log(newUser)
//     arr.push(newUser);
//     res.json({
//         success:true,
//         message:"Your record has been inserted"
//     })
// })


app.get('/',(req,res)=>{
    // res.send("get api")
    console.log("get api..........");
    
    // res.json(arr)
    res.json(arr)
})

app.delete('/user/:index',(req,res)=>{
    console.log(req.params.index)

    const{index}=req.params;
    console.log(index)

    arr.splice(index,1)
    res.json({
        message:'data delete'
    })

    app.put('/user',(req,res)=>{
        // http://localhost:8000/user/?index=2&index2=hgyj

        console.log(req.query)
        const {index}=req.query; //for multiple params
        arr.splice(index,1,req.body)
        res.json({
            message:"update"
        })
    })
})
app.listen(PORT, () => console.log(`Example app listening on PORT http://localhost:${PORT}`))