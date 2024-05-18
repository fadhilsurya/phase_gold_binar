const { Create, GetAll, GetById } = require('../infrastructure/user.infrastructure')
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

            if (req.gender !== 'male' || req.gender !== 'female') {
                let err = new Error('bad request').message

                resp.data = null
                resp.status = 400
                resp.error = err
                resp.message = err

                return resp

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

    async getUser(req) {

        let now = new Date()
        let resp = {}

        console.log(req)

        try {
            let data = await GetAll()

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

    async getUser(req) {

        let now = new Date()
        let resp = {}

        console.log(req)

        try {
            let data = await GetAll()

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


    async getById(id) {
        let resp = {}
        try {
            let data = await GetById(id)

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