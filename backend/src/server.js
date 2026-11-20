import express from "express"

import path from "path"
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";

import { clerkMiddleware } from '@clerk/express'

const app = express();
app.use(clerkMiddleware());

const _dirname = path.resolve();

app.get('/api/health', (req, res) => {
  res.status(200).json({ message: 'success!'});
});


// ready for deployment
if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(_dirname, "../admin/dist")))
  app.get("/{*any}", (req,res) => {
    res.sendFile((path.join(_dirname, "../admin", "dist", "index.html")))
  })
}

const startServer = async() => {
  await connectDB();
  app.listen(ENV.PORT, () => {
    console.log("Server is up and running");
    connectDB();
  });
};

startServer();