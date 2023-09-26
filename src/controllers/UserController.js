// import { use } from "express/lib/application"
import User from "../models/User"

class UserController{
    async store(req, res) {
        try {
            const novoUser = await User.create(req.body);
            // const { id, nome, email } = novoUser;
            return res.json({ id: novoUser.id, nome: novoUser.nome, email: novoUser.email });
        } catch (e) {
            // console.error(error);
            return res.status(400).json({
                errors: e.errors.map(err => err.message) // Acesse a propriedade 'errors'
            });
        }
    }

    async index(req,res){
        try {            
            const users = await User.findAll({ attributes: ['id', 'nome', 'email']})
            // console.log('user id: ', req.userId ,'\n' ,'user Email: ', req.userEmail)
            return res.json(users)
        } catch (error) {
            return res.status(400).json({
                errors: error.errors.map((err) => err.message)
            })
        }
    }

    async show(req,res){
        try {
            
            const user = await User.findByPk(req.params.id)
            const { id, nome, email } = user
            return res.json({ id, nome, email })
        } catch (error) {
            return res.status(400).json({
                errors: error.errors.map((err) => err.message)
            })
        }
    }

    async update(req,res){
        try {
            const user = await User.findByPk(req.userId)
            
            if(!user){
                return res.status(400).json({
                    errors:['Usuário não existe']
                })
            }

            const novoDados = await user.update(req.body)
            return res.json(novoDados)
        } catch (error) {
            return res.status(400).json({
                errors: error.errors.map((err) => err.message)
            })
        }
    }

    async delete(req,res){
        try {
            const user = await User.findByPk(req.params.id)
            
            if(!user){
                return res.status(400).json({
                    errors:['Usuário não existe']
                })
            }

            await user.destroy()
            return res.json({msg:"deletado com sucesso"})
        } catch (error) {
            return res.status(400).json({
                errors: error.errors.map((err) => err.message)
            })
        }
    }

}

export default new UserController()