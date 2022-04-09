import cote from "cote";
import mongoose from "mongoose";
import { taskHandler } from "./handlers";
const mongoDB =
  "mongodb+srv://taskit-db-admin:pH1FpR2rMPJudy1k@taskit.8zgda.mongodb.net/test";
mongoose.connect(mongoDB);

const { getTask, createTask } = taskHandler;

const responder = new cote.Responder({
  name: "databaseClient",
  namespace: "graphql",
});
const publisher = new cote.Publisher({ name: "arbitration publisher" });

responder.on("get.task", (req, cb) => {
  getTask(req.query, function (a) {
    if (a.data !== null) cb(false, true);
    cb(false, false);
  });
});

responder.on("create.task", (req, cb) => {
  createTask(req, cb);
});

publisher.publish("rate updated", "req");
