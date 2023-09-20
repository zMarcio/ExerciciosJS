import Aluno from "../models/Aluno"

class HomeController{
    async index(req,res){
        const novoAluno = await Aluno.create({
            nome:"zez2",
            sobrenome:"bala",
            email:"zezobala@gmail.com",
            idade:45,
            peso:60.5,
            altura:2.00,
        })
        res.json(novoAluno)
    }
}

export default new HomeController()