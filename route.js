const router = require("express").Router()
const validate = require("./validation")
const {createUser, getUser, updateUser, deleteUser} = require("./controller/user.controller")


router.route("/persons").get(getUser).post(validate, createUser)
router.route("/persons/:id").put(updateUser).delete(deleteUser)

module.exports = router