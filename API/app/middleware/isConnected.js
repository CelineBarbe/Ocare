const isConnected = (request, response, next) => {

    if(request.session.user) {
        next();
    } else {
        response.json({
            message: 'Veuillez vous connecter pour utiliser l\'application'
        });
    }
};

module.exports = isConnected;