const inquirer = require('inquirer');
const mysql = require('mysql');

// const viewDept = require('../lib/viewDept');

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
const addDepartment= () => {
    inquirer
     .prompt({
         name: 'department',
         type: 'input',
         message: 'What is the name of the department you would like to add?'
     })
     .then((answer) =>{
         console.log(answer.department);
         let query = `INSERT INTO departments (name)
         VALUES ('${answer.department}');`;
         connection.query(query, (err, res) => {
             if (err) throw err;
             console.table(res)
         }) 
     })
}
const addRole = () => {
    inquirer
     .prompt([
        {
            name: "title",
            type: "input",
            message:"What is the name of the new role?"
        },
        {
            name: 'salary',
            input: "input",
            message: "What is the salary for this role?"
        }, 
        {
            name: 'departmentChoice',
            type: 'list',
            message: `What department will this role be a part of?`,
            choices: ['Management', 'Engineers', 'Office Staff', 'Human Resources']
        }
    ])
     .then((answers) => {
         const dept_id = () => {
            deptId = ''
             switch (answers.departmentChoice){
                 case 'Management':
                     deptId = 1
                     break;
                case 'Engineers':
                    deptId = 2;
                    break;
                case 'Office Staff':
                    deptId = 3;
                    break;
                case 'Human Resources':
                    deptId = 4
                    break;
             }
            return deptId
         }        
        let query = `INSERT INTO roles (title, salary, department_id) VALUES ('${answers.title}', ${parseInt(answers.salary)}, ${dept_id()})`;
         connection.query(query, (err, res) => {
             if (err) throw err;
             console.table(res)
         }) 
     })
}

const addEmployee = () => {
    inquirer
     .prompt([
         {
             name: 'first_name',
             type: 'input',
             message: "What is the employee's frist name?"
         },
         {
            name: 'last_name',
            type: 'input',
            message: "What is the employee's last name?"
        },
        {
            name: 'role',
            type: 'list',
            message: `What role will this employee have?`,
            choices: ['Manager', 'Frontend Developer', 'Backend Developer', 'Payroll Specialist', 'Administrative Assistent', 'Office Manager'],
        },
        {
            name: 'manager',
            type: 'list',
            message: `Who is the manager for this employee?`,
            choices: ['Malik Sanders', 'Juana Ixcoy', 'No manager'],
        }
    ])
     .then((answers) => {
        let role_id = () => {
            let id = 1;
            switch(answers.role) {
                case 'Manager':
                    id = 1;
                    break;
                case 'Frontend Developer':
                    id = 2;
                    break;
                case 'Backend Developer':
                    id = 3;
                    break;
                case 'Payroll Specialist':
                    id = 4;
                    break;
                case 'Administrative Assistent':
                    id = 5;
                    break;
                case 'Office Manager':
                    id = 6;
                    break
            }
            return id;
        }
        let manager_id = () => {
            managerId = 0;
            switch(answers.manager) {
                case 'Malik Sanders':
                    managerId = 1;
                    break;
                case "Juana Ixcoy":
                    managerId = 2;
                    break;
                case "Null":
                    managerId = 'Null';
                    break; 
            }
            return managerId
        }
        let query = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${answers.first_name}', '${answers.last_name}', ${role_id()}, ${manager_id()})`;
         connection.query(query, (err, res) => {
             if (err) throw err;
             console.table(res)
         }) 
     })
}
module.exports = addData;