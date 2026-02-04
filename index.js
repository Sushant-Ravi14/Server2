const express = require("express");

const app = express();

const users = [
  { id: 1, name: "Arjun", role: "student" },
  { id: 2, name: "Priyesha", role: "mentor" },
  { id: 3, name: "Dev", role: "student" },
  { id: 4, name: "Aditya", role: "mentor" },
  { id: 5, name: "Ankit", role: "student" },
];

app.get("/", (req, res) => {
  res.send("4th Feb 9:50 PM");
});

app.get("/users", (req, res) => {
    console.log("this is req:",req);
  res.status(200).json(users);
});

app.get("/users/:id", (req, res) => {
  const userId = Number(req.params.id);
  const user = users.find((u) => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(user);
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
