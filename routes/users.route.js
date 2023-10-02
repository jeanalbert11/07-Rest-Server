const {Router} = require('express');
const {
    getUser,
    putUser,
    deleteUser,
    postUser,
    patchUser
} = require("../controllers/users.controller");

const userRouter = new Router();

userRouter.get('/', getUser);
userRouter.put('/:id', putUser);
userRouter.post('/', postUser);
userRouter.delete('/', deleteUser);
userRouter.patch('/', patchUser);


module.exports = userRouter;
