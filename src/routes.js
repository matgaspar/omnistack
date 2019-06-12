const express = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload");
const PostController = require("./controllers/PostController");
const LikeController = require("./controllers/LikeController");

const routes = new express.Router();
const upload = multer(uploadConfig);

routes.get("/", (req, res) => {
    return res.send("<div style='font-family:Courier New;font-size:20px;font-weight:bold;text-align:center;margin-top:250px;'>Bem vindo a aplicação Omnistack! &#x1F61C;</div>");
});

routes.get("/posts", PostController.index);
routes.post("/posts", upload.single("image"), PostController.store);

routes.post("/posts/:id/like", LikeController.store);

module.exports = routes;