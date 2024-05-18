const { Create } = require('../infrastructure/user.infrastructure')
class User {

    async createUser(req) {

        let now = new Date()
        let resp = {}

        console.log(req)

        try {

            let obj = {
                full_name: req.full_name,
                email: req.email,
                address: req.address,
                phone_number: req.phone_number,
                gender: req.gender,
                password: req.password,
                is_active: false,
                createdAt: now
            }

            let data = await Create(obj)

            resp.data = data
            resp.status = 200
            resp.error = null
            resp.message = 'successful'

            return resp


        } catch (error) {

            resp.data = null
            resp.status = 500
            resp.error = error
            resp.message = error.message
            return resp

        }

    }
}



module.exports = User