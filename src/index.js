// import express from 'express'

import mysql from 'mysql'


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '1004',
  database : 'vplc'
});

connection.connect();


for (let i = 1; i < 11; i++)  {
 for (let k = 1; k < 241; k++)  {
       
        connection.query('insert into vshift_register_target_value(REGISTER_ID,SHIFT_ID,TARGET_VALUE) values(?,?,?)',[k,i,0], function (error, results, fields) {
       if (error) throw error;
       console.log('The result is: ', results);
      });

  }
}


// connection.end();

// const app = express();
// app.get('/N', function (req, res) {
//   return res.send('hello nalin=');
// });
// app.listen(3000, () => { console.log('listining on 3000') });
