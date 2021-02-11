require('dotenv').config();
const jwt = require('jsonwebtoken');
const authDataMapper = require('../datamapper/authDataMapper');

module.exports = async (request, response, next) => {
  try {
    const token = request.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.SECRET);
    const userId = decodedToken.userId;
    if (request.body.userId && request.body.userId !== userId) {
      throw 'Invalid user ID';
    } else {
        // Save User in locals
        response.locals.userID = userId;

        const { default_cabinet } = await authDataMapper.getUser(userId);

        // Save default_cabinet in locals
        response.locals.default_cabinet = default_cabinet;

      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};