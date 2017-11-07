const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

    let users;

    beforeEach(() => {
        users = new Users();
        users.users = [
            {
                id: '1',
                name: 'Pera',
                room: 'Node Course'
            },
            {
                id: '2',
                name: 'Zika',
                room: 'React Course'
            },
            {
                id: '3',
                name: 'Laza',
                room: 'Node Course'
            }
        ];
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Andrew',
            room: 'The Office Fans'
        };
        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        const user = {
            id: '2',
            name: 'Zika',
            room: 'React Course'
        };
        const removedUser = users.removeUser(user.id);
        expect(users.users.length).toBe(2);
        expect(removedUser).toEqual(user);
    });

    it('should not remove user', () => {
        users.removeUser('12345');
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        const user = users.getUser('1');
        expect(users.users.length).toBe(3);
        expect(user.name).toBe('Pera');
    });

    it('should not find user', () => {
        const user = users.getUser('123123');
        expect(users.users.length).toBe(3);
        expect(user).toBeFalsy();
    });

    it('should return name for node course', () => {
        let userList = users.getUserList('Node Course');
        expect(userList).toEqual(['Pera', 'Laza']);
    });

    it('should return name for react course', () => {
        let userList = users.getUserList('React Course');
        expect(userList).toEqual(['Zika']);
    });
});
