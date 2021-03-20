const inquirer = require('inquirer');
const mysql = require('mysql');
const init = require('../init/init');
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Bongbros#221',
    database: "employee_db"
});


const dept_id = (departmentName) => {
    deptId = (departments.indexOf(departmentName) +1)
        
    return deptId
 } 

 const role_id = (roleName) => {
     let roleId = (roles.indexOf(roleName) +1)
          
     return roleId
 };
 const employee_id = (employee) => {
    let employeeId = (employeeName.indexOf(employee) +1)
         
    return employeeId
}
let departments = ['Management', 'Engineers', 'Office Staff', 'Human Resources'];
let roles = ['Manager', 'Frontend Developer', 'Backend Developer', 'Payroll Specialist', 'Administrative Assistent', 'Office Manager'];
let employeeName = ['Malik Sanders', 'Juana Ixcoy', 'Xioaying Zhang', 'Yordanos Berhe', 'Quoc Nguyen', 'Eder Vasquez', 'Hinda Ali', 'Salma Awil', 'Gloria Simaj', 'Eduardo Rodriguez'];

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
     .prompt([
        {
            name: 'departments',
            type: 'list',
            message: 'What department would you like to update?',
            choices: departments,
         },
         {
            name: 'delete',
            type: 'confirm',
            message: 'Do you want to delete this department?'
         },
         {
             name: 'name',
             type: 'input',
             message: 'What will the new name of this department be?'
        }
     ])
     .then((answer) => {
         //If they want to delete
         if(answer.delete) {
            let query = `DELETE FROM departments 
            WHERE id = ${dept_id(answer.departments)}`;
            
            connection.query(query, (err, res) => {
                if (err) throw err;
                console.table(res)
            })
         }
         else {
            let query = `UPDATE departments SET name = '${answer.name}' WHERE id = ${dept_id(answer.departments)}`;
            
            connection.query(query, (err, res) => {
                if (err) throw err;
                console.table(res)
            })
         }
         
     })
}
const updateRole = () => {
    inquirer
     .prompt([
         {
            name: 'roles',
            type: 'list',
            message: 'What role would you like to update?',
            choices: roles,
        },
        {
            name: 'delete',
            type: 'confirm',
            message: 'Do you want to delete this role?'
        },
        {
            name:'name',
            type: 'input',
            message: 'What will the name be for this role?'
        },
        {
            name: 'salary',
            type: 'number',
            message: 'What will the new salary for this role be? Choose a number.',
            
        },
        {
            name: 'department_id',
            type: 'list',
            message: 'What department will this role be associated with?',
            choices: departments
        },
     
     ])
     .then((answer) => {
        if(answer.delete) {
            let query = `DELETE FROM roles 
            WHERE id = ${role_id(answer.roles)}`;
            
            connection.query(query, (err, res) => {
                if (err) throw err;
                console.table(res)
            })
         }
         else {
            let query = `UPDATE roles SET title = '${answer.name}', salary = ${answer.salary}, department_id = ${dept_id(answer.department_id)}  WHERE id = ${role_id(answer.roles)}`;
            
            connection.query(query, (err, res) => {
                if (err) throw err;
                console.table(res)
            })
         }

     })
}
const updateEmployee = () => {
    inquirer
     .prompt([
         {
        name: 'names',
        type: 'list',
        message: 'Whose would you like to update?',
        choices: employeeName,
        },
        {
            name: 'delete',
            type: 'confirm',
            message: 'Do you want to delete this employee from the database?'
        },
        {
            name: "first_name",
            type: 'input',
            message: "What is the employee's first name?"
        },
        {
            name: 'last_name',
            type: 'input',
            message: "What is the employee's last name?"
        },
        {
            name: 'role',
            type: 'list',
            message: "What is this employee's role?",
            choices: roles
        },
        {
            name: 'confirmManager',
            type: 'confirm',
            message: 'Do they have a manager?'
        },
        {
            name: 'manager',
            type: 'list',
            message: 'If they have a manager, who is it?',
            choices: ['Malik Sanders', 'Juana Ixcoy']
        },
    ])
     .then((answer) => {
         const managerId = () => {
             if(answer.confirmManager) {
                 let id = (employeeName.indexOf(answer.manager) +1)
                 return `, manager_id = ${id}`
             }
            else return '';
         }
        if(answer.delete) {
            let query = `DELETE FROM employee 
            WHERE id = ${employee_id(answer.roles)}`;
            
            connection.query(query, (err, res) => {
                if (err) throw err;
                console.table(res)
            })
         }
         else {
            let query = `UPDATE employee SET first_name = '${answer.first_name}', last_name = '${answer.last_name}', role_id = ${role_id(answer.role)} ${managerId()}  WHERE id = ${employee_id(answer.names)}`;
            
            connection.query(query, (err, res) => {
                if (err) throw err;
                console.table(res)
            })
         }


     })
}
module.exports = updateData 