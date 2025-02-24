const express = require('express');
const { resolve } = require('path');
const router = require("./routes/userRoute.js");
const connectDB = require("./db/db.js");
require("dotenv").config();
const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use(express.static('static'));
app.use("/api", router);

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port || 8080, async () => {
  try{
    await connectDB();
    console.log(`Example app listening at http://localhost:${port}`);
  }catch(err){
    console.error(err.message);
  }
 
});
