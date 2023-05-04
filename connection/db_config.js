var mysql = require('mysql'); 
var connection = mysql.createConnection({
  host : 'localhost',
  user: 'root',
  password : '',
}); 

var sql = "CREATE DATABASE form_rizkdev";

connection.connect(function(error){
  if(error) throw error; 
  console.log("Connected!");
}); 

module.exports = connection;