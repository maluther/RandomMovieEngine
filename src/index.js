let express = require("express");

let userService = require("./users/userService.js");
let movieService = require("./movies/movieService.js");
let nightService = require("./nights/nightService.js");

let app = express();

app.get('/users', function(req, res){
    let users = userService.getUsers();
    res.json(users);
    res.status(200);
});

app.get('/users/:name/movies', function(req, res){
    const name = req.params.name;
    let userMovies = movieService.getUserMovies(name);
    res.status(200);
    res.json(userMovies);
 });

 app.get('/users/:name/movies/:movie', function(req, res){
    const name = req.params.name;
    const movie = req.params.movie;
    let userMovies = movieService.getUserMovie(name, movie);
    res.status(200);
    res.json(userMovies);
 });
 
 app.put('/users/add/:name', function(req, res){
     const name = req.params.name;
     userService.createUser(name);
     movieService.initializeUser(name);
     res.links('http:localhost:4242/users/' + name);
     res.status(201);
     res.end();
 });

 app.delete('/users/delete/:name', function(req, res){
    const name = req.params.name;
    userService.deleteUser(name);
    movieService.deleteUser(name);
    res.status(204);
    res.end();
 });

 app.patch('/users/:name/add/:movie', function(req, res){
    const name = req.params.name;
    const movie = req.params.movie;
    movieService.addMovie(name, movie);
    res.links('http://localhost:4242/users/' + name + '/movies/' + movie);
    res.status(200);
    res.end();
 });

 app.patch('/users/:name/remove/:movie', function(req, res){
    const name = req.params.name;
    const movie = req.params.movie;
    movieService.removeMovie(name, movie);
    res.status(200);
    res.end();
 });

 app.post('/nights/create', function(req, res){
    const nightId = nightService.createNight(req);
    res.links('http://localhost:4242/nights/' + nightId);
    res.status(201);
    res.end();
 });

 app.get('/nights/', function(req, res){
    let nights = nightService.getNights();
    res.status(200);
    res.json(nights);
 });

 app.get('/nights/:id', function(req, res){
    const nightId = req.params.id;    
    let night = nightService.getNight(nightId);
    res.status(200);
    res.json(night);
 });

 app.get('/nights/roll/:id', function(req, res){
    const nightId = req.params.id;
    let result = nightService.roll(nightId);
    res.status(200);
    res.json(result);
 });

app.listen(4242);