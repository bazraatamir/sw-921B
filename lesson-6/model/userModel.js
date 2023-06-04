const fs = require('fs/promises')

const getMember =  async () =>{
    try{
        let promises =  await fs.readFile('data.json',"utf-8");
        let data = JSON.parse(promises)
        return data
    }catch(error){
        return error
    }
}
class User{
    constructor(id,name){
        this.id = id,
        this.name = name
    }
    async save(arg){
        try {
            let data = await getMember();
            data.push(arg) 
            let response =await fs.writeFile('data.json',JSON.stringify(data));
            return response
        } catch (error) {
            return error
        }
    }  
    async update(arg1,arg2){
        let data = await getMember();
        let dataIndex = data.findIndex((el,index)=>{
            return index === arg1
        })
        data[dataIndex]=arg2;
        let response =await fs.writeFile('data.json',JSON.stringify(data));
        return response
    } 
}

module.exports = {
    User,
    getMember
}
//crud create read update delete