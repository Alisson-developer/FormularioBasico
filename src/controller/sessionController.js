const User = require('../model/User')

module.exports = {
    async store(req, res){
        const { nome } = req.body
        const { sobrenome } = req.body
        const { email } = req.body
        const { senha } = req.body

        let user = await User.findOne({ email })

        if(!user){
            user = await User.create({ nome, sobrenome, email, senha })
        }

        return res.json(user)
    }
}

