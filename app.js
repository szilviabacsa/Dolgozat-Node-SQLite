import express from 'express'
import * as db from './data/db.js'

const app = express()
const PORT = 3080
app.use(express.json())

app.get("/posts", (req, res) =>{
    const posts = db.getPosts()
    res.status(200).json(posts)
})

app.get("/posts/:id", (req, res) =>{
    const id = +req.params.id
    const post = db.getPostsById(id)
    if(!post){
        return res.status(404).json({error: "Poszt nem található"})
    }
    res.status(200).json(post)
})

app.post("/posts", (req,res) =>{
    const {title, content} = req.body
    if(!title || !content){
        return res.status(400).json({error: "Poszt adat hiány"})
    }
    const saved = db.savePost(lasInsertRow)
    
    res.status(201).json(post)
})

app.delete("/posts/:id", (req, res) =>{
    const id = +req.params.id
    const post = db.getPostsById(id)
    if(!post){
        return res.status(404).json({error: "Poszt nem található"})
    }

    res.status(204).json()
})

app.listen(PORT, () =>{
    console.log(`Server runs on port ${PORT}`)
})