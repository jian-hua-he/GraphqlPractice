import mongoose, { Schema } from 'mongoose';

let User = mongoose.model('User', new Schema({
    name: String,
    email: String,
}));

export default User;
