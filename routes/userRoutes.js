const express = require("express");
const userController = require(`${__dirname}/../controllers/userController.js`);
const authController = require(`${__dirname}/../controllers/authController.js`);

const router = express.Router();

router.post("/sign-up", authController.signUp);

router
    .route("/")
    .get(userController.getAllUsers)
    .post(userController.postUser);

router
    .route("/:id")
    .get(userController.getUser)
    .patch(userController.updateUser)
    .delete(userController.deleteUser);

module.exports = router;