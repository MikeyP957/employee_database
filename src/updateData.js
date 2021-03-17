const inquirer = require('inquirer');
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: "employee_db"
});


let departments = ['Developers', 'Managers', 'Human Resources', 'Office'];
let roles = ['Engineer', 'Accountant', 'Manager', 'Administrative Assistent'];
let employeeName = ['Malik', 'Theodore', 'Dinh', 'Mariam', 'Juana'];

const updateData = () => {
    inquirer
        .prompt({
            name: 'update',
            type: 'list',
            message: 'Would you like to update a department, role or employee?',
            choices: ['Department','Role', 'Employee'] 
        })
        .then((answer) => {
            switch(answer.update){
                case 'Department':
                    updateDepartment();
                    break;

                case 'Role':
                    updateRole();
                    break;

                case 'Employee':
                    updateEmployee();
                    break;

                    default:
                        console.log(`Invalid action: ${answer.update}`);
                        break;
            }
        })
}
const updateDepartment = () => {
    inquirer
     .prompt({
        name: 'departments',
        type: 'list',
        message: 'What department would you like to update?',
        choices: departments,
     })
     .then((answer) => {
         console.log(answer.departments , "this is who you chose")
     })
}
const updateRole = () => {
    inquirer
     .prompt({
        name: 'roles',
        type: 'list',
        message: 'What role would you like to update?',
        choices: roles,
     })
     .then((answer) => {
         console.log(answer.roles , "this is who you chose")
     })
}
const updateEmployee = () => {
    inquirer
     .prompt({
        name: 'names',
        type: 'list',
        message: 'Whose would you like to update?',
        choices: employeeName,
     })
     .then((answer) => {
         console.log(answer.names , "this is who you chose")
     })
}
module.exports = updateData 