class userService {

    constructor(){
        this.users = ['Dale', 'Matt'];
    }

    getUsers(){
        return this.users;
    }

    createUser(user){
        this.users.push(user);
    }

    deleteUser(user){
        this.users.splice(this.users.indexOf(user));
    }
}

module.exports = new userService();