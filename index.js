const express = require("express");

const app = express();

const route = express.Router();

route.get("/user", (req, res) => {
  res.status(200).send({ id: 2 });
});

app.use(route);

app.listen(3000, () => {
  console.log("server listening on port 3000");
});

//argo_cd password: admin@Sourav15
