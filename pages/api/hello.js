// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const mysql = require('mysql');

var db_config = {
  host: "btdhmmrhjexdjff0nywy-mysql.services.clever-cloud.com",
  user: "u87ibkzo6cxxqyhy",
  password: "8TFOJfzUNgvgsIxWDYTA",
  database : 'btdhmmrhjexdjff0nywy'
};






export default function handler(req, res) {
  const con = mysql.createConnection(db_config);
  con.query('SELECT id FROM Users', function (err, result){
    if(err) throw new Error('Failed');
    res.send(result)
  }) 
  
}
