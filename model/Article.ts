import mongoose, { Document, model } from "mongoose";

interface ArticleDocument extends Document {
  createdBy: String;
  creatorId: mongoose.Schema.Types.ObjectId;
  title: String;
  tagline: String;
  category: String;
  editCount: Number;
  content: String;
}

const ArticleSchema = new mongoose.Schema(
  {
    createdBy: { type: String },
    creatorId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    title: { type: String, unique: true },
    tagline: { type: String },
    category: { type: String },
    editCount: { type: Number, default: 0 },
    content: { type: String, default: "" },
  },
  { timestamps: true }
);

export default mongoose.models.Article ||
  model<ArticleDocument>("Article", ArticleSchema);
