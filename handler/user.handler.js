
module.exports = {

    TestUserHealth: (req, res) => {
        try {

            // test we gonna see the response in the param
            // console.log(`this is what we get from the params in education ${req.query.education}`)

            res.status(200).json({
                message: 'successfully entering test user handler part',
                data: [
                    {
                        name: "fadhil",
                        occupation: "software engineer - backend",
                        location: "jakarta"
                    },
                    {
                        name: "dije",
                        occupation: "student / teacher",
                        location: "jakarta"
                    }
                ]
            })

            return

        } catch (error) {
            res.status(500).json({
                message: 'server busy',
                data: null,
                err: error.message
            })
            return
        }

    }



}