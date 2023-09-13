const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const connection = (url) => {
  mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("DB connected"))
    .catch((err) => console.log("An Error occured:" + err));
};

module.exports = connection;
