const express = require("express");
const userService = require("./users/userService");

let app = express();

app.get('/users/:name', function(req: any, res: any){
    const name = req.params.name;
    let userMovies = userService.getUserMovies(name);
    res.json(userMovies);
 });

app.listen(4242);