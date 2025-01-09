const redisClient = require('../config/redis');

class User {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    static async create(user) {
        const userKey = `user:${user.id}`;
        await redisClient.hmset(userKey, 'id', user.id, 'name', user.name, 'email', user.email);
        return user;
    }

    static async findById(id) {
        const userKey = `user:${id}`;
        const user = await redisClient.hgetall(userKey);
        return user;
    }

    static async update(id, updatedUser) {
        const userKey = `user:${id}`;
        await redisClient.hmset(userKey, 'name', updatedUser.name, 'email', updatedUser.email);
        return updatedUser;
    }

    static async delete(id) {
        const userKey = `user:${id}`;
        await redisClient.del(userKey);
        return { message: 'User deleted' };
    }
}

module.exports = User;