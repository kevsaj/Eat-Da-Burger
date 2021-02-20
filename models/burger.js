const orm = require('../config/orm');

const burger = {
    selectAll: (callback) => {
        orm.selectAll('burgers', (res) => {
            callback(res);
        });
    },

    create: (cols, vals, callback) => {
        orm.insertOne('burgers', cols, vals, (res) => {
            callback(res)
        });
    },

    update: (objColVals, condition, callback) => {
        orm.updateOne('burgers', objColVals, condition, (res) => {
            callback(res);
        })
    },

    delete: (condition, callback) => {
        orm.delete('burgers', condition, (res) => {
            callback(res);
        })
    }

}

module.exports = burger;