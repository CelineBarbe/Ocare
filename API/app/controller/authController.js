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
            
            // Save current cabinet in locals
            request.app.locals.userCurrentCabinet = user.default_cabinet;
            request.app.locals.autologin = user;
            
            response.json({ user, userToken: jwt.sign(
                {
                    userId: user.id, 
                },
                process.env.SECRET,
                { expiresIn: '100h' }
            ) });

        } catch (error) {
            next(error);
        }

    },

    async autologin(request, response, next) {
        try {
            
            const userID = response.locals.userID;

            const user = await authDataMapper.getUserAuto(userID);

            if(!user) {
                response.locals.notFound = "Autorisation refusées";
                next();
                return;
            }
            
            response.json({ user });

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