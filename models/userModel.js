const mongoose = require("mongoose");
const validator = require("validator");



const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "A user must have a name"]
    },
    email: {
        type: String,
        required: [true, "A user must have an email"],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, "Please provide a valid email"]
    },
    photo: {
        type: String
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
    password: {
        type: String,
        required: [true, "A user must have a password"],
        minLength: 8
    },
    passwordConfirm: {
        type: String,
        required: [true, "A user must confirm password"],
        validate: {
            validator: function (el) {
                return el === this.password;
            },
            message: "Passwords are not the same"
        }
    },
    gender: String,
    active: {
        type: Boolean,
        default: true,
        select: false
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;