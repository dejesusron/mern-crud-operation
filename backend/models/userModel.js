import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please add a text value"]
        },
        email: {
            type: String,
            required: [true, "Please add a text value"],
            unique: true
        },
        age: {
            type: Number,
            required: [true, "Please add a text value"]
        }
    }, {
        timestamps: true
    }
);

const User = mongoose.model("User", userSchema);

export default User;