import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
// import http from "http";
import mongoose from "mongoose";
import crypto from "crypto";
import nodemailer from "nodemailer";
import Jwt from "jsonwebtoken";
import "dotenv/config";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 6000;

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("Mongodb connected");
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  }).catch((err) => {
    console.log({ err });
    process.exit(1);
  });