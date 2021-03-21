const inquirer = require('inquirer');
const mysql = require('mysql');
const startEmployeeData = require('../server')
const cTable = require('console.table');



const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: "employee_db"
});

const viewData = (init) => {
    inquirer
        .prompt({
            name: 'view',
            type: 'list',
            message: 'What would you like to view: departments, roles or employees?',
            choices: ['Departments','Roles', 'Employees'] 
        })
        .then((answer) => {
            switch(answer.view){
                case 'Departments':
                    viewDepartment(init);
                    break;

                case 'Roles':
                    viewRole(init);
                    break;

                case 'Employees':
                    viewEmployee(init);
                    break;

                    default:
                        console.log(`Invalid action: ${answer.view}`);
                        break;
            }
        })
}

const viewDepartment = (init) => {    
    connection.query(
        `SELECT name FROM departments`, 
        (err, res) => {
            if (err) throw err;
            
            console.table(res);
        }
    )
    inquirer
        .prompt([
            {
                name: 'exit',
                type: 'confirm',
                message: 'Do you want to exit?'
            } 
        ])
        .then((answer) => {
            if (answer.exit){
                connection.end;
            }
            else init();
        })
}

const viewRole = (init) => {
    connection.query(
        `SELECT roles.title, roles.salary, departments.name
        FROM roles
        INNER JOIN departments ON roles.department_id = departments.id
        ORDER BY roles.id`, 
        (err, res) => {
            if (err) throw err;
            console.table(res);
        }
    )
    inquirer
        .prompt([
            {
                name: 'exit',
                type: 'confirm',
                message: 'Do you want to exit?'
            } 
        ])
        .then((answer) => {
            if (answer.exit){
                connection.end;
            }
            else init();
        })
}
const viewEmployee = (init) => {
    connection.query(
        `SELECT employee.first_name, employee.last_name, roles.title
        FROM employee
        INNER JOIN roles ON employee.role_id = roles.id
        ORDER BY last_name asc`, 
        (err, res) => {
            if (err) throw err;
            console.table(res);
        }
    )
    inquirer
        .prompt([
            {
                name: 'exit',
                type: 'confirm',
                message: 'Do you want to exit?'
            } 
        ])
        .then((answer) => {
            if (answer.exit){
                connection.end;
            }
            else init();
        })
}
module.exports = viewData 