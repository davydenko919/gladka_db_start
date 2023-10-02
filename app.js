const mysql = require('mysql');

const conn = mysql.createConnection(config:{
    host: "itgid.mysql.tools",
    user: "itgid_nodetest",
    database: "itgid_nodecourse";
    password: "qwerty"
});

conn.connect( option: err=> {
    if(err) {
        console.log(err);
        return err;
    }
    else{
        console.log('Datadase - work')
    }
});

