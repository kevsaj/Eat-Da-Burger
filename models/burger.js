const orm = require('../config/orm');

const burger = {
    all: (callback) => {
        orm.selectAll('burgers', (res) => {
            callback(res);
        });
    }
}

module.exports = burger;