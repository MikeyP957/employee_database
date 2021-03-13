const inquirer = require('inquirer');

const updateData = () => {
    inquirer
        .prompt({
            name: 'update',
            type: 'list',
            message: 'Would you like to update a department, role or employee?',
            choices: ['Department','Role', 'Employee'] 
        })
        .then((answer) => {
            switch(answer.add){
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

module.exports = updateData 