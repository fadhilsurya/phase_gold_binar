const { User, Order } = require('../models/index')



// Create
async function Create(req) {
    try {
        let data = await User.create(req)

        return data

    } catch (error) {

        return error
    }
}

// Read / Get
async function GetAll(req) {
    try {
        let data = await User.findAll({
            include: {
                model: Order,
                as: 'order',
                required: true
            },
            attributes: {
                exclude: [
                    'id',
                    'password',
                    'updatedAt',
                    'deletedAt'
                ]
            }
        })

        return data

    } catch (error) {

        return error
    }
}

async function GetById(id) {
    try {
        let data = await User.findOne({
            where: {
                id
            },
            attributes: {
                exclude: [
                    'id',
                    'password',
                    'updatedAt',
                    'deletedAt'
                ]
            }

        })
        return data

    } catch (error) {
        return error
    }
}

async function Update(id, isActive) {
    try {
        let data = await User.update({ is_active: isActive }, {
            where: {
                id
            }
        })
        return data

    } catch (error) {
        return error
    }
}

async function Delete(id) {
    try {
        let data = await User.update({ deletedAt: new Date() }, {
            where: {
                id
            }
        })

        return data

    } catch (error) {
        return error
    }
}






module.exports = {
    Create,
    GetAll,
    GetById,
    Update,
    Delete
}