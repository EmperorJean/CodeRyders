const mongoose = require('mongoose');
const {isEmail} = require("validator");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
    username: { 
        type: String, 
        required: [true, "Please enter a username"],
        unique: true 
    },

    email: { 
        type: String, 
        unique: true,
        lowercase: true,
        validate: [isEmail, "Please enter a valid email"]
    },

    password: {
        type: String,
        required: [true, "Please enter a password"],
        minlength: [8, "Minimum password length is 8 characters"]
    }
});

// hash password before storing into the db
UserSchema.pre("save", async function(next) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

module.exports = mongoose.model("User", UserSchema);