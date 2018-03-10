import mongoose, { Schema } from 'mongoose';

let Todo = mongoose.model('Todo', new Schema({
    userId: Schema.ObjectId,
    title: String,
    description: String,
    checked: Boolean,
}));

export default Todo;
