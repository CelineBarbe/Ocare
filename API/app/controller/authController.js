require('dotenv').config();
const authDataMapper = require("../datamapper/authDataMapper");
const jwt = require('jsonwebtoken');

const authController = {
    async handleLoginForm(request, response, next) {
        try {
            const email = request.body.email;
            const password = request.body.password;

            const user = await authDataMapper.getUser(email, password);

            if(!user) {
                response.locals.notFound = "Email et/ou password invalide";
                next();
                return;
            }
            
            response.locals.userCurrentCabinet = user.default_cabinet;
            
            response.json({ user, userToken: jwt.sign(
                {
                    userId: user.id 
                },
                process.env.SECRET,
                { expiresIn: '24h' }
            ) });

        } catch (error) {
            next(error);
        }

    },

    async handleSignForm(request, response, next) {
        try {
            const userInfo = request.body;

            const newUser = await authDataMapper.createUser(userInfo);

            if(!newUser) {
                response.locals.notFound = "Votre compte n'est pas crée, une erreur est survenue.";
                next();
                return;
            }

            response.json({ newUser });

        } catch (error) {
            next(error);
        }
    },

    // logout(request, response, next) {

    // }
};


module.exports = authController;