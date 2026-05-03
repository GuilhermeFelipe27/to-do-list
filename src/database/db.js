const mongoose = require("mongoose");

const connectToDb = async () => {
 await mongoose
    .connect(
      "mongodb+srv://root:admin@todolist.s1lxrzq.mongodb.net/?appName=todolist",
    //   {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    //   },
    )
    .then(() => console.log("MongoDB Atlas conectado"))
    .catch((err) => console.log(err));
};

module.exports = connectToDb;
