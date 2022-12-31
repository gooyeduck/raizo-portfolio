import express from "express";
import cors from 'cors';
import { json } from 'body-parser';
import axios from 'axios';
import { CLOUD_NAME, auth } from "./process";
import { photoHandler } from "./handler/photoHandler";

const app = express();
app.use(cors());
app.use(json());
const PORT = 4000;

const BASE_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/image`;


app.get('/photos', async (req, res) => {
  const resposne = await axios.get(BASE_URL,{auth,params:{next_cursor:req.query.next_cursor}})
  return res.send(photoHandler(resposne.data))
})

app.get("/", (req, res) => res.send("Hello from server!"));

app.listen(PORT, () => console.log(`⚡Server is running here 👉 https://localhost:${PORT} ${BASE_URL}`));