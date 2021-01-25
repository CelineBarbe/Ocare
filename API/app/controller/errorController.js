const errorController = {

    async error404(_, response) {
        response.status(404).json({
            error: {
                code: 404,
                type: "not found",
                message: `${response.locals.notFound}`
            }
        });
    },

    async error500(error, _, response, __) {
        response.status(500).json({
            error: {
                code: 500,
                type: "fatal error",
                details: error.message
            }
        })
    }
};

module.exports = errorController;