const inquirer = require('inquirer');
const mysql = require('mysql');
const startEmployeeData = require('../server')

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Bongbros#221',
    database: "employee_db"
});

const viewData = () => {
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
                    viewDepartment();
                    break;

                case 'Roles':
                    viewRole();
                    break;

                case 'Employees':
                    viewEmployee();
                    break;

                    default:
                        console.log(`Invalid action: ${answer.view}`);
                        break;
            }
        })
}

const viewDepartment = () => {
    
}
const viewRole = () => {
    console.log('you are viewing roles')
}
const viewEmployee = () => {
    connection.query(
        `SELECT employee.first_name, employee.last_name, roles.title
        FROM employee
        INNER JOIN roles ON employee.role_id = roles.id
        ORDER BY last_name asc`, 
        (err, res) => {
            if (err) throw err;
            console.log(res)
        }
    )
}
module.exports = viewData 