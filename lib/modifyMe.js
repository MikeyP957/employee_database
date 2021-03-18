class modifyMe {
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

    modifyDataBase(){
        // add(){

        // }
        // deleteData(){

        // }
    }
}