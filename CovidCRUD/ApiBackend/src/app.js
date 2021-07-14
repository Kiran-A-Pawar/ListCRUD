const express = require("express");
require("./db/patientdb")
const app = express();
app.use(express.json())
const Contact = require("./models/patient");
const router = require("./routers/Patient-rout");

const cors = require('cors');

app.use(cors({ origin: 'http://localhost:4200' }));

const port = process.env.PORT || 3000;

app.use(router)

app.listen(port,() => {
       console.log(`Connection is live at port no.${port}`);
})

app.use('/patients', router);