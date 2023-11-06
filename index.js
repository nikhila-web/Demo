const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes");

const app = express();
const port = 7000;

mongoose
  .connect(
    "mongodb+srv://Nikhila:Nikhila@1234@cluster0.tv95o.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true ,useFindAndModify:false}
  )
  .then((res) => console.log(`Connection Succesful `))
  .catch((err) => console.log(`Error in DB connection ${err}`));

//body-parser config;
app.use(express.json());

//body-parser config;
app.use("/api/v1/", router);

app.listen(port, () => {
  console.log(`Application is listening at port ${port}`);
});
