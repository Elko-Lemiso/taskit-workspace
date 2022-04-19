import cote from "cote";
import mongoose from "mongoose";
import { taskHandler } from "./handlers";
import { userHandler } from "./handlers/userHandler";
const mongoDB =
  "mongodb+srv://taskit-db-admin:pH1FpR2rMPJudy1k@taskit.8zgda.mongodb.net/test";
mongoose.connect(mongoDB);

const responder = new cote.Responder({
  name: "databaseClient",
  namespace: "graphql",
});
const publisher = new cote.Publisher({ name: "arbitration publisher" });

const { getTask, updateTask, getAllTasks, createTask } = taskHandler;
const { getUser, updateUser, getAllUsers, createUser } = userHandler;

// SECTION:  Task actions

responder.on("get.task", (req, cb) => {
  getTask(req.query, function (a) {
    if (a.data !== null) cb(false, true);
    cb(false, a);
  });
});

responder.on("get.tasks", (req, cb) => {
  getAllTasks(req.query, function (a) {
    if (a.data !== null) cb(false, true);
    cb(false, a);
  });
});

responder.on("create.task", (req, cb) => {
  createTask(req.query, function (a) {
    if (a.data !== null) cb(false, true);
    cb(false, a);
  });
});

responder.on("update.task", (req, cb) => {
  updateTask(req.query, function (a) {
    if (a.data !== null) cb(false, true);
    cb(false, a);
  });
});

// SECTION: User actions

responder.on("get.user", (req, cb) => {
  getUser(req.query, function (a) {
    if (a.data !== null) cb(false, true);
    cb(false, a);
  });
});

responder.on("get.users", (req, cb) => {
  getAllUsers(req.query, function (a) {
    if (a.data !== null) cb(false, true);
    cb(false, a);
  });
});

responder.on("create.user", (req, cb) => {
  createUser(req.query, function (a) {
    if (a.data !== null) cb(false, true);
    cb(false, a);
  });
});

responder.on("update.user", (req, cb) => {
  updateUser(req.query, function (a) {
    if (a.data !== null) cb(false, true);
    cb(false, a);
  });
});


publisher.publish("rate updated", "req");
