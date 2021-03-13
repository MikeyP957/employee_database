const inquirer = require('inquirer');

const viewData = () => {
    inquirer
        .prompt({
            name: 'view',
            type: 'list',
            message: 'What would you like to view: department, role or employee?',
            choices: ['Department','Role', 'Employee'] 
        })
        .then((answer) => {
            switch(answer.view){
                case 'Department':
                    viewDepartment();
                    break;

                case 'Role':
                    viewRole();
                    break;

                case 'Employee':
                    viewEmployee();
                    break;

                    default:
                        console.log(`Invalid action: ${answer.view}`);
                        break;
            }
        })
}

const viewDepartment = () => {
    console.log('you are viewing departments')
}
const viewRole = () => {
    console.log('you are viewing roles')
}
const viewEmployee = () => {
    console.log('you are viewing Employees')
}
module.exports = viewData 