const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require('cors');


const app = express();


const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

app.use(cors(corsOptions));
app.use(fileUpload());

// Upload endpoint
app.post("/upload", (req, res) => {

  if (req.files === null) {
    return res.status(400).json({ msg: "No file was uploaded" });
  }
 
  const file = req.files.file;

  const filepath = req.body.filepath;

  console.log(filepath);

  // file.mv(`${__dirname}/public/uploads/${file.name}`, (err) => {
  //   if (err) {
  //     console.error(err);
  //     return res.status(500).send(err);
  //   }

  //   res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  // });

});

app.listen(5000, () => console.log("Server started..."));
