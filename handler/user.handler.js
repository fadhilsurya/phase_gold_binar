const User = require('../service/user.service')

module.exports = {


    Create: async (req, res, next) => {

        let user = new User()

        let data = await user.createUser(req.body)

        res.status(data.status).json(data)
        return
    }



}