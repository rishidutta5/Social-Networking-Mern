require('dotenv').config();
module.exports = {
  mongoURI: process.env.MONGO_URI
};
app.use("/api/chat", chat);
app.use("/api/posts", posts);
