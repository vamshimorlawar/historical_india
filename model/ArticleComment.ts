import mongoose, { Schema, model } from "mongoose";

interface ArticleCommentDocument extends Document {
  articleId: mongoose.Schema.Types.ObjectId;
  comments: [
    {
      commentorId: { type: String };
      commentedBy: { type: String };
      comment: { type: String };
      updatedAt: { type: Date };
    }
  ];
}

const articleCommentSchema = new Schema<ArticleCommentDocument>({
  articleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Article",
  },
  comments: [
    {
      commentorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      commentedBy: { type: String, required: true },
      comment: { type: String, required: true },
      updatedAt: { type: Date, default: Date.now },
    },
  ],
});

export default mongoose.models.ArticleComment ||
  model<ArticleCommentDocument>("ArticleComment", articleCommentSchema);
