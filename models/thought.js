const { Schema, model } = require('mongoose');
const reactionSchema = require("./Reaction");
const dateFormat = require('../utils/dateFormat')

const assignmentSchema = new Schema(
  {
    thoughttext: {
      type: Schema.Types.ObjectId,
      required: true,
      maxlength: 280,
      minlength: 1,
    },
    createdAt: {
      type: Date,
      default: "timestamp",
      opts
    },

    username: {
      type: String,
      required: true,
    },
    reactions: {
      type: Date,
      default: Date.now,
    },
  },
  {
    reactions: {
      required: true,
    },
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

const thoughtSchema = new Schema(
  {
    reactionID: {
      type: Schema.Types.ObjectId,
      required: true,
      maxlength: 280,
      minlength: 1,
      default: new Schema.Types.ObjectId,
    },
    username: {
      type: String,
      required: true,
    },
    reactionBody: {
      type: String,
      Required: true,
      maxlength: 280,
    },

    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },

    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,

  });

// const opts = {
//   // Make Mongoose use Unix time (seconds since Jan 1, 1970)
//   timestamps: { currentTime: () => Math.floor(Date.now() / 1000) },
// };

// Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query
userSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});


const Thought = model('thought', thoughtSchema);

module.exports = Thought;
