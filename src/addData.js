const inquirer = require('inquirer');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Bongbros#221',
    database: "employee_db"
});


const addData = () => {
    inquirer
        .prompt({
            name: 'add',
            type: 'list',
            message: 'Would you like to add a new, department, role or employee?',
            choices: ['Department','Role', 'Employee'] 
        })
        .then((answer) => {
            switch(answer.add){
                case 'Department':
                    addDepartment();
                    break;

                case 'Role':
                    addRole();
                    break;

                case 'Employee':
                    addEmployee();
                    break;

                    default:
                        console.log(`Invalid action: ${answer.add}`);
                        break;
            }
        })
}
const addDepartment = () => {
    inquirer
     .prompt({
         name: 'department',
         type: 'input',
         message: 'What is the name of the department you would like to add?'
     })
     .then((answer) =>{
         console.log(answer.department);
         let query = `INSERT INTO departments ( name)
         VALUES ('${answer.department}');`;
         connection.query(query, (err, res) => {
             if (err) throw err;
             console.table(res)
         }) 
     })
}
const addRole = () => {

    console.log()
}
const addEmployee = () => {
    console.log('you are adding a Employee')
}
module.exports = addData 