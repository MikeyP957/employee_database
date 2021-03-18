const inquirer = require('inquirer');
const mysql = require('mysql');
const cTable = require('console.table');
// const Choice = require('inquirer/lib/objects/choice');

//imported functions
const addData = require('./src/addData');
const updateData = require('./src/updateData');
const viewData = require('./src/viewData')

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Bongbros#221',
    database: "employee_db"
});

connection.connect((err) => {
    if(err) throw err;
    startEmployeeData();
})

const startEmployeeData = () => {
    inquirer
        .prompt({
            name: 'AddViewUpdate',
            type: 'list',
            message: 'Would you like to Add, View or Update Data or exit?',
            choices: ['Add','View', 'Update']
        })
        .then((answer) => {
            switch(answer.AddViewUpdate){
                case 'Add':
                    addData();
                    break;
                
                case 'View':
                    viewData();
                    break;

                case 'Update':
                    updateData();
                    break;

                case 'Exit':
                    connection.end();
                    break;

                default:
                    console.log(`Invalid action: ${answer.AddViewUpdate}`);
                    break;

            }
        })
}

module.exports = 

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

// getAllDepartments();