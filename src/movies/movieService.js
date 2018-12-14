class movieService{

    constructor(){
        this.userMovies = [
                { name: 'Dale', movies: ['I am Legend', 'WALL-E']},
                { name: 'Matt', movies: ['Pulp Fiction']}
        ]
    }

    getUserMovies(user) {
        let movieList = null;
        this.userMovies.forEach(userRecord =>{
            if(userRecord.name == user){
                movieList = userRecord.movies;
            }
        })
        return movieList;
    }

    addMovie(user, movie){
        this.userMovies.forEach(userRecord =>{
            if(userRecord.name == user){
                userRecord.movies.push(movie);
            }
        })
    }

    removeMovie(user, movie){
        this.userMovies.forEach(userRecord =>{
            if(userRecord.name == user){
                user.movies.splice(user.movies.indexOf(movie));
            }
        });
    }

    initializeUser(user){
        this.userMovies.push({name: 'Alan', movies: []});
    }

    deleteUser(user){
        for (let i = 0; i < this.userMovies.length; i++) {
            const userRecord = this.userMovies[i];
            if(userRecord.name == user){
                this.userMovies.splice(i);
            }
        }
    }
}

module.exports = new movieService();