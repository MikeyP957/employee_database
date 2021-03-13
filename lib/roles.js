class Roles{
    constructor(id, title, salary, departmentId){
        if(typeof id !== 'number' || isNaN(id) || id < 0){
            throw new Error('Expected parameter "id" must be a number.');
        }

        if(typeof title !== 'string' || !title.trim().length) {
            throw new Error('Expected parameter "title" must be a non-empty string.');
        }
        if(typeof salary !== 'number' || isNaN(salary) || salary < 0){
            throw new Error('Expected parameter "salary" must be a number.');
        }
        if(typeof departmentId !== 'number' || isNaN(departmentId) || departmentId < 0){
            throw new Error('Expected parameter "department Id" must be a number.');
        }

        this.id = id;
        this.title = title;
        this.salary = salary;
        this.departmentId = departmentId;
    }
    getId(){
        return this.id;
    }
    getTitle(){
        return this.title
    }
    getSalary(){
        return this.salary;
    }
    getDeptartmentId(){
        return this.departmentId;
    }
}

module.exports = Roles