const express = require("express");
const app = express();
const {
  loadUsers,
  addUser,
  loadUser,
  depositing,
  credit,
  deleteUser,
  withdrawFunc,
  transferring,
} = require("./utils.js");
//telling express to deal with json
app.use(express.json());

app.get("/users", (req, res) => {
  try {
    res.status(200).send(loadUsers());
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});
app.get("/users/:id", (req, res) => {
  try {
    res.status(200).send(loadUser(req.params.id));
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

app.post("/users", (req, res) => {
  try {
    res.status(201).send(addUser(req.body));
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

app.put("/users/deposit/:id", (req, res) => {
  try {
    res.status(201).send(depositing(req.params.id, req.body.deposit));
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});
app.put("/users/credit/:id", (req, res) => {
  try {
    res.status(201).send(credit(req.params.id, req.body.credit));
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});
app.put("/users/withdraw/:id", (req, res) => {
  try {
    res.status(201).send(withdrawFunc(req.params.id, req.body.withdraw));
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});
app.put("/users/transferring/:id", (req, res) => {
  try {
    res
      .status(201)
      .send(transferring(req.params.id, req.body.id, req.body.transfer));
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

app.delete("/users/delete/:id", (req, res) => {
  try {
    res.status(201).send(deleteUser(req.params.id));
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`listentinig to port: ${PORT}`);
});
