import Aluno from "../models/Aluno"

class HomeController{
    async index(req,res){
        const novoAluno = await Aluno.create({
            nome:"zezo",
            sobrenome:"bala",
            email:"zezobala@gmail.com",
            idade:45,
            peso:67.5,
            altura:2.05,
        })
        res.json(novoAluno)
    }
}

export default new HomeController()