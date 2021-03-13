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
    password: '',
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
            message: 'Would you like to Add, View or Update Data?',
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

                default:
                    console.log(`Invalid action: ${answer.AddViewUpdate}`);
                    break;

            }
        })
}

// startEmployeeData();