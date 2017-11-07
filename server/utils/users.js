const _ = require('lodash');

class Users {
    constructor () {
        this.users = [];
    }
    addUser (id, name, room) {
        var user = {id, name, room};
        this.users.push(user);
        return user;
    }
    removeUser (id) {
        const removedUser = _.remove(this.users, (user) => user.id === id);
        return removedUser[0];
    }
    getUser (id) {
        return this.users.find((user) => user.id === id);
    }
    getUserList (room) {
        let users = this.users.filter((user) => user.room === room);
        let namesArray = users.map((user) => user.name);
        return namesArray;
    }
}

module.exports = {Users};
