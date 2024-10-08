const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

require("./db/conn");

const port =  3000;

const memoryRoutes = require("./routes");

app.use("/memories", memoryRoutes);

app.get('/', (req, res) => {
    return res.json("Hello word")
})


app.listen(port, () => {
    console.log(`Servidor online na porta ${port}`);
})