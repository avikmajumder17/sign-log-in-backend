const User = require("../models/userModel");



// get all users

exports.getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();

        res.status(200).json({
            status: "success",
            result: users.length,
            data: {
                users
            }
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err
        });
    }

    next();
};

// get user

exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        res.status(200).json({
            status: "success",
            data: {
                user
            }
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err
        })
    }

    next();
};

// create user

exports.postUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);

        res.status(201).json({
            status: "success",
            data: {
                user: newUser
            }
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err
        })
    }

    next();
};

// update user

exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        res.status(200).json({
            status: "success",
            data: {
                user
            }
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err
        })
    }

    next();
};

// delete user

exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete();

        res.status(204).json({
            status: "success",
            data: null
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err
        })
    }

    next();
};