"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = require("body-parser");
const axios_1 = __importDefault(require("axios"));
const process_1 = require("./process");
const photoHandler_1 = require("./handler/photoHandler");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, body_parser_1.json)());
const PORT = 4000;
const BASE_URL = `https://api.cloudinary.com/v1_1/${process_1.CLOUD_NAME}/resources/image`;
app.get('/photos', async (req, res) => {
    const resposne = await axios_1.default.get(BASE_URL, { auth: process_1.auth, params: { next_cursor: req.query.next_cursor } });
    return res.send((0, photoHandler_1.photoHandler)(resposne.data));
});
app.get("/", (req, res) => res.send("Hello from server!"));
app.listen(PORT, () => console.log(`⚡Server is running here 👉 https://localhost:${PORT} ${BASE_URL}`));
