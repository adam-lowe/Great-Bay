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