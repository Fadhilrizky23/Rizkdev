var con = require("./db_config.js"); 


const sql = "CREATE DATABASE form_rizkdev";
con.query(sql,function(error,result){
  if(error) throw error;
  console.log("database created!");
}); 




