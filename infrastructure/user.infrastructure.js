const { User } = require('../models/index')

async function Create(req) {

    try {

        let data = await User.create(req)

        return data

    } catch (error) {

        return error

    }

}

module.exports = {
    Create
}