class Employee{
    constructor(id, firstName, lastName, roleId, managerId){
        if(typeof id !== 'number' || isNaN(id) || id < 0){
            throw new Error('Expected parameter "id" must be a number.');
        }

        if(typeof firstName !== 'string' || !firstName.trim().length) {
            throw new Error('Expected parameter "first name" must be a non-empty string.');
        }

        if(typeof lastName !== 'string' || !lastName.trim().length) {
            throw new Error('Expected parameter "last name" must be a non-empty string.');
        }

        if(typeof roleId !== 'number' || isNaN(roleId) || roleId < 0){
            throw new Error('Expected parameter "roleId" must be a number.');
        }

        if(typeof managerId !== 'number' || isNaN(managerId) || managerId < 0){
            throw new Error('Expected parameter "managerId" must be a number.');
        }

        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.roleId = roleId;
        this.managerId = managerId;
    }
    getId(){
        return this.id;
    }
    getFirstName(){
        return this.firstName;
    }
    getLastName(){
        return this.lastName;
    }
    getRoleId(){
        return this.roleId;
    }
    getManagerId(){
        this.managerId;
    }
}

module.exports = Employee