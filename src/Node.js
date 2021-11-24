const data = require("./movies.json")
const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res)=>{
    res.send("Connected to server");
})

app.get("/getmovies", (req, res)=>{
    res.send(data);
})

app.post("/addmovie", (req, res)=>{
    const movie={
        movieName : req.body.movieName,
        rating : req.body.rating,
        releaseDate : req.body.releaseDate
    }

    data.push(movie);
    res.status(200).send(movie);
    console.log("Movie Added");
})
app.listen(port, ()=>{
    console.log(`Listening on Port ${port}...`);
})