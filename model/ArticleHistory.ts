import mongoose, { Schema, model } from "mongoose";

interface ArticleHistoryDocument extends Document {
  articleId: mongoose.Schema.Types.ObjectId;
  edits: [
    {
      editorId: { type: String };
      editedBy: { type: String };
      oldContent: { type: String };
      newContent: { type: String };
      message: { type: String };
      updatedAt: { type: Date };
    }
  ];
}

const articleHistorySchema = new Schema<ArticleHistoryDocument>({
  articleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Article",
  },
  edits: [
    {
      editorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      editedBy: { type: String, required: true },
      oldContent: { type: String, required: true },
      newContent: { type: String, required: true },
      message: { type: String, required: true },
      updatedAt: { type: Date, default: Date.now },
    },
  ],
});

export default mongoose.models.ArticleHistory ||
  model<ArticleHistoryDocument>("ArticleHistory", articleHistorySchema);
