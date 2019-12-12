const connection = require("./connection.js");

var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function (table, cols, vals, cb) {
        var queryString = `INSERT INTO ${table}(${cols.toString()}) VALUES ("${vals.toString()}")`
        console.log(queryString);

        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });

    },
    updateOne: function (table, cols, vals, condition, cb) {
        var queryString = `UPDATE ${table} SET ${cols} = ${vals} WHERE ${condition};`;
        console.log(queryString);

        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;