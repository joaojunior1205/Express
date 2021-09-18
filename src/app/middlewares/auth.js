const jwt = require('jsonwebtoken');
const authConfig = require('../../config/authConfig.json');

module.exports = (req, res, next) => {

    //Verificando se existe um token
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).send({error: 'No token provided'});
    }

    // Validando se o token tem duas partes, e se inicia com Bearer
    const parts = authHeader.split(' ');

    if (!parts.length === 2) {
        return res.status(401).send({error: 'Token error'});
    }

    const [scheme, token] = parts;
    if (!/Bearer$/i.test(scheme)) {
        return res.status(401).send({error: 'Token malformatted'});
    }

    // Validando o token de acesso.
    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if (err) return res.status(401).send({error: 'Token invalid'});

        req.userId = decoded.id;
        return next();
    });
}