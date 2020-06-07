const faker = require('faker');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');


const makeId = () => Math.random().toString(36).substring(7);


db.serialize(function () {

    // USER 

    db.run(`CREATE TABLE users
            (
                user_uid   VARCHAR(7) PRIMARY KEY,
                first_name VARCHAR(255) NOT NULL,
                last_name  VARCHAR(255) NOT NULL
            );`);

    //    db.run(`UPDATE TABLE "users" ADD COLUMN role VARCHAR(30) USING role = 'user';`);

    db.run(`CREATE TABLE pets
            (
                pet_uid VARCHAR(7) PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                age  INT NOT NULL, 
                user_uid VARCHAR(7) REFERENCES users("id")
            );`);

    // Seed user
    var stmtUsers = db.prepare("INSERT INTO users VALUES (?,?,?)");
    var stmtInsertPets = db.prepare("INSERT INTO pets VALUES (?,?,?,?)");

    for (var i = 0; i < 10; i++) {

        const userId = makeId(); 
        stmtUsers.run([userId, faker.name.firstName(), faker.name.lastName()]);
        stmtInsertPets.run([makeId(), faker.name.firstName(), faker.random.number(50), userId]);
    }

    stmtUsers.finalize();
    stmtInsertPets.finalize();

    db.each("SELECT * FROM users", function (err, row) {
        console.log(row);
    }); 

    db.each("SELECT * FROM pets", function (err, row) {
        console.log(row);
    });


})


db.close();
