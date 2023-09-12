const router = require("express").Router()
const validate = require("./validation")
const {createUser, getUser, updateUser, deleteUser} = require("./controller/user.controller")


router.route("").get(getUser).post(validate, createUser)
router.route("/:id").put(updateUser).delete(deleteUser)

module.exports = router