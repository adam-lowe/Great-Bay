<<<<<<< HEAD
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "rootroot",
  database: "auctions_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
});
=======
const inquirer = require("inquirer");

function promptUser() {
    return inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?"
      },
      {
        type: "input",
        name: "location",
        message: "Where are you from?"
      },
      {
        type: "input",
        name: "hobby",
        message: "What is your favorite hobby?"
      },
      
    ]);
  }

function createItem() {
    console.log("Inserting a new item...\n");
    var query = connection.query(
      "INSERT INTO products SET ?",
      {
        
      },
      function(err, res) {
        if (err) throw err;
        console.log(res.affectedRows + " item added!\n");
        
        updateProduct();
      }
    );
  
    console.log(query.sql);
  }
>>>>>>> 4ea8f55e2a280d1ecafc559fb490e8b2118ec17d
