const orm = require('../config/orm');

const burger = {
    selectAll: (callback) => {
        orm.selectAll('burgers', (res) => {
            callback(res);
        });
    }
}

module.exports = burger;