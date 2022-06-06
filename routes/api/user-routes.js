const router = require('express').Router();

const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriends,
    removeFriends
} = require('../../controllers/user-controller')

router
.route('/')
.get(getAllUser)
.post(createUser);

router
.route('/:id')
.get(getUserById)
.put(updateUser)
.delete(deleteUser);

router.route('/:userId/friends/:friendsId').post(addFriends);


router.route('/:userId/friends/:friendsId').delete(removeFriends);

module.exports = router;