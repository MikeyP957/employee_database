const inquirer = require('inquirer');
const mysql = require('mysql');

const addData = require('../src/addData');
const updateData = require('../src/updateData');
const viewData = require('../src/viewData')
// const viewDept = require('../lib/viewDept');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: "employee_db"
});

function init () {
    inquirer
        .prompt({
            name: 'AddViewUpdate',
            type: 'list',
            message: 'Would you like to Add, View or Update Data or exit?',
            choices: ['Add','View', 'Update', 'Exit']
        })
        .then((answer) => {
            switch(answer.AddViewUpdate){
                case 'Add':
                    addData(init);
                    break;
                
                case 'View':
                    viewData(init);
                    break;

                case 'Update':
                    updateData(init);
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

module.exports = init; 