class Databases {
    constructor(dataBase){

        this.dataBase = dataBase;

    }

    viewDataBase(dataBase){
        connection.query(
            `SELECT name FROM ${dataBase}`, 
            (err, res) => {
                if (err) throw err;
                
                console.table(res);
            }
        )
    };
    exportDataBase(dataBase){
        console.log('an array of objects that represent each element in the db')
    };
    modifyDataBase(){
        console.log("you will add or delete from a db")
    };
}

module.exports = 