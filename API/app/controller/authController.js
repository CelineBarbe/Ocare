require('dotenv').config();
const authDataMapper = require("../datamapper/authDataMapper");
const cabinetDataMapper = require("../datamapper/cabinetDataMapper");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const checkSiren = require('../services/apiSirene');

const authController = {
    async handleLoginForm(request, response, next) {
        try {
            const email = request.body.email;
            const password = request.body.password;
            
            // Find nurse by email
            const findUser = await authDataMapper.getUserByEmail(email);
            
            if(!findUser) {
                
                return response.status(404).json({
                    message: "Email et/ou password invalide"
                });
            }

            // Compare stored Password with request.body.password
            const validPwd = bcrypt.compareSync(password, findUser.password);

            if(!validPwd) {
                
                return response.status(404).json({
                    message: "Email et/ou password invalide"
                });
            }

            // If validPwd ok get
            const user = await authDataMapper.getUser(findUser.id);

            if(!user) {
                response.locals.notFound = " 3 - Email et/ou password invalide";
                next();
                return;
            }
            
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

    
    async handleSignForm(request, response, next) {
        try {
            const userInfo = request.body;

            // 0 - On vérifie si l'utilisateur est bien un infirmier en exerçice
            const isNurse = await checkSiren.checkInfos(userInfo);

            if(!isNurse) {
                return response.status(401).json({
                    type: "Unauthorized",
                    message: "Les informations communiquées ne confirment pas que vous êtes infirmier par conséquent vous ne pouvez pas utiliser notre application"
                });
            }
            
            // 1 - On récupère le password et on le hash
            const hashedPwd = bcrypt.hashSync(userInfo.password, saltRounds);
            
            // 2 - on le remplace dans le request.body
            userInfo.password = hashedPwd;
            
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

    async autologintest(request, response, next) {
        try {
            
            const userID = response.locals.userID;

            let user = await authDataMapper.getUserAutoTest(userID);

            if(!user) {
                response.locals.notFound = "Autorisation refusées";
                next();
                return;
            }

            // Obtenir les cabinets du nurse
            let cabinets = await cabinetDataMapper.getAllCabinet(userID);

            if (!cabinets) {
                cabinets = [];
            }

            // Ajout des cabinets affiliés nurse
            user.cabinets = cabinets
            
            response.json({ user });

        } catch (error) {
            next(error);
        }
    }
};


module.exports = authController;