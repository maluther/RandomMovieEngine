interface IMovies {[name: string]: string[]};

class userService {

    userMovies: IMovies = {
        'Dale': ['I am Legend', 'WALL-E']
    }

    getUserMovies(user: string) {
        return this.userMovies[user];
    }
}

export default new userService();