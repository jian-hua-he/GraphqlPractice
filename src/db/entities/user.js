import mongoose, { Schema } from 'mongoose';

let User = mongoose.model('User', new Schema({
    id: Schema.ObjectId,
    name: String,
    email: String,
}));

export default User;
