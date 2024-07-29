import mongoose from "mongoose";

export type IWord = {
    group_id: number,
    text: string
}

const schema = new mongoose.Schema<IWord>({
    group_id: Number,
    text: String
});

const WORDS = mongoose.model("words", schema);

export default WORDS;