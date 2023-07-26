const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.status(200).send("hello world");
});

app.get("/user/:id", (req, res) => {
    res.status(200).send(req.params.id);
})

app.listen(3000, () => {
    console.log("start listening");
});

const errorMiddleware = (req, res, next) => {
    next(new Error("ミドルウェアからのエラー"));
}

app.get("/err", errorMiddleware, (req, res) => {
        console.log("err ルート");
        res.status(200).send("err ルート");
});

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send("Internal Server Error");
});

