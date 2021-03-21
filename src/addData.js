const inquirer = require('inquirer');
const mysql = require('mysql');


// const viewDept = require('../lib/viewDept');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: "employee_db"
});

const addData = (init) => {
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
                    addDepartment(init);
                    break;

                case 'Role':
                    addRole(init);
                    break;

                case 'Employee':
                    addEmployee(init);
                    break;

                    default:
                        console.log(`Invalid action: ${answer.add}`);
                        break;
            }
        })
}
const addDepartment = (init) => {
    inquirer
     .prompt([
        {
         name: 'department',
         type: 'input',
         message: 'What is the name of the department you would like to add?'
        },
        {
            name: 'exit',
            type: 'confirm',
            message: 'Do you want to exit?'
        }
    ])
     .then((answers) =>{
         console.log(answers.department);
         let query = `INSERT INTO departments (name)
         VALUES ('${answers.department}');`;
         connection.query(query, (err, res) => {
             if (err) throw err;
             console.log(`You added ${answers.department} to the department table.`)
         }) 
         if (answers.exit){
            connection.end;
        }
        else init();
     })
}
const addRole = (init) => {
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
        },
        {
            name: 'exit',
            type: 'confirm',
            message: 'Do you want to exit?'
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
             
         })
         if (answers.exit){
            connection.end;
            console.log(`You added ${answers.title} to the table, with salary: ${answers.salary} in the ${answers.departmentChoice} department.`)
        }
        else init();
     })
     
}

const addEmployee = (init) => {
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
        },
        {
            name: 'exit',
            type: 'confirm',
            message: 'Do you want to exit?'
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
             console.log(`You added ${answers.first_name} ${answers.last_name} to the table, as a ${answers.role} with ${answers.manager} as a manager.`)
         })
         if (answers.exit){
            connection.end;
        }
        else init();
    }) 
     
    
 
}
module.exports = addData;