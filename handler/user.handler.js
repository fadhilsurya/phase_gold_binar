
module.exports = {

    TestUserHealth: (req, res) => {
        try {
            res.status(200).json({
                message: 'successfully entering test user handler part'
            })

            return

        } catch (error) {
            res.status(500).json({
                message: 'server busy'
            })
            return


        }

    }



}