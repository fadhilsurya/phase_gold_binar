const User = require('../service/user.service')

module.exports = {


    Create: async (req, res, next) => {

        let user = new User()

        let data = await user.createUser(req.body)

        res.status(data.status).json(data)
        return
    },
    Get: async (req, res, next) => {

        let user = new User()

        let data = await user.getUser()

        res.status(data.status).json(data)
        return
    },
    GetById: async (req, res, next) => {

        let user = new User()

        let data = await user.getById(req.params.id)

        res.status(data.status).json(data)
        return
    },
    Update: async (req, res, next) => {

        let user = new User()

        let data = await user.update(req.params.id, req.body)

        res.status(data.status).json(data)
        return
    },
    Delete: async (req, res, next) => {

        let user = new User()

        let data = await user.deleteRecords(req.params.id)

        res.status(data.status).json(data)
        return
    }


}