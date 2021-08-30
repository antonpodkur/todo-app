import mongoose, { mongo } from 'mongoose';
const Schema = mongoose.Schema;

const Todo = new Schema(
    {
        task: {
            type: String,
            required: true,
        },
        user_id: {
            type: Schema.Types.ObjectId, ref: 'User'
        }
    }
)

export default mongoose.model('Todo', Todo);