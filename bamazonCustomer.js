var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    user: "root",

    password: "",
    database: "bamazon_db"
});

connection.connect(function(err) {
    if (err) throw err;
    for (var i = 0; i < results.length; i++) {
        console.log("id: " + results[i].position + "|| Product Name: " + results[i].Product_name + "|| Price: " + results[i].Price);
    }
});

connection.connect(function(err) {
    if (err) throw err;
    runSearch();
});

var runSearch = function() {
    inquirer.prompt({
        name: "action",
        type: "rawlist",
        message: "please type the id of the item you would like to buy."
    }).then(function(answer) {
        console.log("You have selected " + this.Product_nam);
    })
}