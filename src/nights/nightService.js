let movieService = require('../movies/movieService.js')

class nightService{
    
    constructor(){
        let night = {
            id: 1,
            location: "Dale's",
            date: "12/12/18",
            attendees: ["Dale", "Matt", "Alan"]
        }

        this.nights = [night];
        this.nightId = 1;
    }

    createNight(night){
        this.nights.push(night);
        this.nightId++;
        return this.nightId;
    }

    getNights(){
        return this.nights;
    }

    getNight(id){
        let selectedNight = null;

        this.nights.forEach(night => {
            if(night.id == id){
                selectedNight = night;
            }
        });
        return selectedNight;
    }

    roll(id){
        let result = null;
        this.nights.forEach(night => {
            if(night.id == id){

                let attendees = night.attendees;
                let selectedUser = Math.floor(Math.random() * attendees.length);

                let userMovies = movieService.getUserMovies(attendees[selectedUser]);
                let selectedMovie = Math.floor(Math.random()) * userMovies.length;

                result = {
                    selectedUser: attendees[selectedUser],
                    selectedMovie: userMovies[selectedMovie]
                };
            }
        });
        return result;
    }
}

module.exports = new nightService();