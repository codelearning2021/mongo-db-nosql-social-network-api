const { Schema, model } = require('mongoose');

// Schema to create user model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      max_length: 20,
    },
    email: {
      type: String,
      unique: true,
      validate: {
        validator: function (v) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: "Please enter a valid email"
      },
      required: [true, "Email required"]
    },
    thoughts: [{
      type: Schema.Types.ObjectId,
      ref: "Thought"
    },
    ],

    friends: [{
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);


// Creates a virtual called friendCount that retrieves the length of the user's friends array field on query

userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});


const User = model('user', userSchema);

module.exports = User;
