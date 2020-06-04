const faker = require('faker');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');


const makeId = () => Math.random().toString(36).substring(7);


db.serialize(function () {
    db.run(`CREATE TABLE users
            (
                user_uid   VARCHAR(255) PRIMARY KEY,
                first_name VARCHAR(255) NOT NULL,
                last_name  VARCHAR(255) NOT NULL
            );`);


    // Seed user
    var stmt = db.prepare("INSERT INTO users VALUES (?,?,?)");
    for (var i = 0; i < 10; i++) {
        stmt.run([makeId(), faker.name.firstName(), faker.name.lastName()]);
    }
    stmt.finalize();


    db.each("SELECT * FROM users", function (err, row) {
        console.log(row);
    })
})


db.close();
