const inquirer = require('inquirer');

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
    console.log('you are adding a department')
}
const addRole = () => {
    console.log('you are adding a Role')
}
const addEmployee = () => {
    console.log('you are adding a Employee')
}
module.exports = addData 