const mysql = require("mysql");

const db=mysql.createPool({
  host: "localhost",
  username: "root",
  password: "123456789",
  database: "nodecrud",
});

db.getConnection(()=>{
  console.log('connected to db successfully');
})

module.exports=db