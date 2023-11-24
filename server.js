const mongoose = require('mongoose');
const express = require('express');
const app = express();

require('dotenv').config();

const port = process.env.PORT || 3000;

uri = process.env.URI;

mongoose.connect(uri);

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    sid: { type: String, required: true },
  });

  const userModel = mongoose.model('quizexamrecords', userSchema);

app.get('/', (req, res)=>{
    const addNew = new userModel(
        { name : "Mino Wong",
            sid : "300375436"
         }
    )

    userModel.insertMany([addNew]);
    res.send(`<h1>User: ${addNew.name} is Added</h1>`)
});


  app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`)
  })
  

