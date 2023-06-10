const connection = require('../data');

class Test{
    constructor(id,test){
        this.id = id,
        this.test = test
    }
    static getTets = async()=>{
        console.log('====>')
       const data = await connection.execute('SELECT * FROM sw921.new_table');
       

       return data
    }
}

module.exports = Test;