const conn = require('../connection');

module.exports = {
    async index(req,res){
        const user = await "user";

        return(user);
    },
    async create(req,res){
        const userCreate = req.body;
        console.log(userCreate);

        return(res.send(userCreate));
    },
    async update(req,res){

    }, 
    async delete(req,res){

    },
}