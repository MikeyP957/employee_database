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

module.exports = viewData 