// import express from 'express'

// import mysql from 'mysql'
const  mysql  =require('mysql');


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '1004',
  database : 'vplc'
});

connection.connect();

// i is for shfit_id and j is register_id
//  for creating  vshift_target value id table values 

// ! 2019 montth=12 : start 1 to 124
// ! 2020 montth=1 : start 125 to 248
// ! 2020 montth=2 : start 249 to 364
// ! 2020 montth=3 : start 365 to 488
// ! 2020 montth=4 : start 489 to 608
// ! 2020 montth=5 : start 609 to 732
// ! 2020 montth=6 : start 733 to 852
// ! 2020 montth=7 : start 853 to 976 ( shift  targets are created till july)

for (let i = 853; i <= 976; i++)  {
 for (let k = 1; k < 241; k++)  {
       
        connection.query('insert into vshift_register_target_value(REGISTER_ID,SHIFT_ID,TARGET_VALUE) values(?,?,?)',[k,i,0], function (error, results, fields) {
       if (error) throw error;
       console.log('The result is: ', results);
      });

  }
}


// for creating vshift table values 
// last shift id : 94

// ! dec 2019 shift id : from 1 to 93
// ! jan 2020 shift id : from 94 to 186
// ! feb 2020 shift id : from 187 to 273
// ! march 2020 shift id : from 274 to 366
// ! apr 2020 shift id : from 367 to 456
// ! may 2020 shift id : from 457 to 549
// ! june 2020 shift id : from 550 to 639
// ! july 2020 shift id : from 640 to 732
// ! augst 2020 shift id : from 733 to ? (augast shift is not created )
var j = 733; //shift id 
var i = 1; //day
var month = 8;

// while (i<=30)  {

//         connection.query('INSERT INTO vshift (ID,SHIFT_ID, SHIFT_NAME, SHIFT_DATE, START_TIME, END_TIME, CREATED_BY, CREATED_DATE, MODIFIED_BY, MODIFIED_DATE) VALUES (?, ?, ?, ?, ?,?,?,?,?,?)',[null,j,'shift 1',`2020-${month}-${i}`,'06:00','14:00',null,'2019-10-02',null,null], function (error, results, fields) {
//        if (error) throw error;
//        console.log('The result is: ', results);
//       });

//       let jj=j+1;

//         connection.query('INSERT INTO vshift (ID,SHIFT_ID, SHIFT_NAME, SHIFT_DATE, START_TIME, END_TIME, CREATED_BY, CREATED_DATE, MODIFIED_BY, MODIFIED_DATE) VALUES (?, ?, ?, ?, ?,?,?,?,?,?)',[null,jj,'shift 2',`2020-${month}-${i}`,'14:00','22:00',null,'2019-10-02',null,null], function (error, results, fields) {
//        if (error) throw error;
//        console.log('The result is: ', results);
//       });


//       let jjj=j+2;
//         connection.query('INSERT INTO vshift (ID,SHIFT_ID, SHIFT_NAME, SHIFT_DATE, START_TIME, END_TIME, CREATED_BY, CREATED_DATE, MODIFIED_BY, MODIFIED_DATE) VALUES (?, ?, ?, ?, ?,?,?,?,?,?)',[null,jjj,'shift 3',`2020-${month}-${i}`,'22:00','24:00',null,'2019-10-02',null,null], function (error, results, fields) {
//        if (error) throw error;
//        console.log('The result is: ', results);
//       });
        
//       connection.query('INSERT INTO vshift (ID,SHIFT_ID, SHIFT_NAME, SHIFT_DATE, START_TIME, END_TIME, CREATED_BY, CREATED_DATE, MODIFIED_BY, MODIFIED_DATE) VALUES (?, ?, ?, ?, ?,?,?,?,?,?)',[null,jjj ,'shift 3',`2020-${month}-${i}`,'00:00','06:00',null,'2019-10-02',null,null], function (error, results, fields) {
//        if (error) throw error;
//        console.log('The result is: ', results);
//       });

//       j=jjj+1;
//       i++;

//     }


console.log('end');


connection.end();
