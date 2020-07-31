console.log("server.js");

const express = require('express');
const cors = require('cors');
const app = express();
const db_name = "petschelterdb";
const port = 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./server/config/mongoose.config')(db_name);
require('./server/routes/pet.routes')(app);

app.listen(port, () => console.log(`listening on port: ${port}`));