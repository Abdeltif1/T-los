const mysql = require('mysql')


  
var pool = mysql.createPool(db_config);



  
 


module.exports = {
    pool
}