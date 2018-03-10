import mongoose, { Schema } from 'mongoose';

let Todo = mongoose.model('Todo', new Schema({
    id: Schema.ObjectId,
    userId: Schema.ObjectId,
    title: String,
    description: String,
    checked: Boolean,
}));

export default Todo;
