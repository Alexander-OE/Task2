const router = require("express").Router()
const validate = require("./validation")
const {createUser, getAllUser, updateUser, deleteUser, getUser} = require("./controller/user.controller")


router.route("/").get(getAllUser).post(validate, createUser)
router.route("/:id").put(updateUser).delete(deleteUser).get(getUser)

module.exports = router