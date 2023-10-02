const {response} = require('express');

const getUser = (req, res = Response) => {
    const {query, name = 'No name', apikey, page = 1, limit} = req.query;
    res.status(403).json({
        msg: 'get API from controller',
        query,
        name,
        apikey,
        page,
        limit
    });
}

const putUser = (req, res = Response) => {
    const id = req.params.id;
    res.status(403).json({
        msg: 'put API from controller',
        id
    });
}

const postUser = (req, res = Response) => {
    const {name, age} = req.body;
    res.status(200).json({
        msg: 'post API from controller',
        name,
        age
    });
}

const deleteUser = (req, res = Response) => {
    res.status(403).json({
        msg: 'delete API from controller'
    });
}

const patchUser = (req, res = Response) => {
    res.status(403).json({
        msg: 'patch API from controller'
    });
}

module.exports = {
    getUser,
    putUser,
    postUser,
    deleteUser,
    patchUser
}
