class Department{
    constructor(id, name){
        if(typeof id !== 'number' || isNaN(id) || id < 0){
            throw new Error('Expected parameter "id" must be a number.');
        }

        if(typeof name !== 'string' || !name.trim().length) {
            throw new Error('Expected parameter "name" must be a non-empty string.');
        }

        this.id = id;
        this.name = name;
    }
    getId(){
        return this.id;
    }

    getName(){
        return this.name;
    }
}

module.exports = Department