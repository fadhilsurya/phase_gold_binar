
const moment = require('moment')


module.exports = {
    StringtoDate: (t) => {
        try {
            let resp = moment(t, 'YYYY-MM-DD')
            return resp
        } catch (error) {
            return error
        }
    },

    GenerateTime: () => {
        try {
            return moment().format('YYYY-MM-DD')
        } catch (error) {
            return error
        }
    }

}
