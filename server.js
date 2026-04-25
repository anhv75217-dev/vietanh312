const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let keys = {};

// tạo key
app.get("/create", (req, res) => {
    let key = Math.random().toString(36).substring(2, 10).toUpperCase();

    keys[key] = {
        expire: Date.now() + 86400000
    };

    res.json({ key });
});

// check key
app.post("/check", (req, res) => {
    let { key } = req.body;

    if (!keys[key]) return res.json({ ok: false });

    if (Date.now() > keys[key].expire)
        return res.json({ ok: false });

    res.json({ ok: true });
});

app.listen(process.env.PORT || 3000);