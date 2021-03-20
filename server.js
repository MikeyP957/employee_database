const inquirer = require('inquirer');
const mysql = require('mysql');
const cTable = require('console.table');
// const Choice = require('inquirer/lib/objects/choice');

const init = require('./init/init');

//imported functions


const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Bongbros#221',
    database: "employee_db"
});

connection.connect((err) => {
    if(err) throw err;
     init();
})
console.log(init)




// const getAllDepartments = () => {
//     let allDepartments = connection.query(`SELECT name FROM departments`, (err, res) => {
//         if (err) throw err;
//         let allDept = [];
//         for(i = 0; i < res.length; i++){
//             allDept.push(res[i].name)
//         }
//         console.log(allDept)
//     });    
// }




