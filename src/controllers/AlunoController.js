import Aluno from "../models/Aluno"
import Foto from "../models/Foto"
class AlunoController{
    async index(req,res){
        const alunos = await Aluno.findAll({
            attributes: ['id','nome','sobrenome', 'email', 'idade', 'peso', 'altura'],
            order: [['id', 'ASC'], [Foto, 'id', 'DESC']],
            include: {
                model: Foto,
                attributes: ['originalname','filename', 'url']
            }
        })
        res.json(alunos)
    }

    async store(req,res){
        try {
            const aluno = await Aluno.create(req.body)
            return res.json({id: aluno.id, nome:aluno.nome, sobrenome: aluno.sobrenome, email:aluno.email})
        } catch (error) {
            return res.status(400).json({
                errors: e.errors.map(err => err.message)
            });
        }
    }

    async show(req,res){
        try {
            const { id } = req.params 
            
            if(!id){
                return res.status(400).json({
                    errors:['Faltando Id']
                })
            }

            const aluno = await Aluno.findByPk(id, {
                attributes: ['id','nome','sobrenome', 'email', 'idade', 'peso', 'altura'],
                order: [['id', 'ASC'], [Foto, 'id', 'DESC']],
                include: {
                    model: Foto,
                    attributes: ['originalname','filename', 'url']
                }
            })

            if(!aluno){
                return res.status(400).json({
                    errors: ['Aluno não existe']
                })
            }

            const { nome, email } = aluno
            return res.json({ id, nome, email })

        } catch (error) {
            return res.status(400).json({
                errors: error.errors.map((err) => err.message)
            })
        }
    }

    async delete(req,res){
        try {
            const { id } = req.params 
            
            if(!id){
                return res.status(400).json({
                    errors:['Faltando Id']
                })
            }

            const aluno = await Aluno.findByPk(id)

            if(!aluno){
                return res.status(400).json({
                    errors: ['Aluno não existe']
                })
            }

            await aluno.destroy()
            return res.json({msg:"deletado com sucesso"})

        } catch (error) {
            return res.status(400).json({
                errors: error.errors.map((err) => err.message)
            })
        }
    }

    async update(req,res){
        try {
            const { id } = req.params 
            
            if(!id){
                return res.status(400).json({
                    errors:['Faltando Id']
                })
            }

            const aluno = await Aluno.findByPk(id)

            if(!aluno){
                return res.status(400).json({
                    errors: ['Aluno não existe']
                })
            }

            const alunoAtualizado = await aluno.update(req.body)

            const { nome, email } = alunoAtualizado
            return res.json({ id, nome, email })

        } catch (error) {
            return res.status(400).json({
                errors: error.errors.map((err) => err.message)
            })
        }
    }

}

export default new AlunoController()