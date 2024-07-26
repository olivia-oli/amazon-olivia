
const functions = require("firebase-functions");
const logger = require("firebase-functions/logger");
const express =require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51Pg57MAsGfRwVPYZLWaAVsAw2FdZyLS4CZzeTrNvphfoQRxJec4D" + 
    "dgznZ9GLf3uIIJxTFFIaS6DeM5RjRzxW3LuQ00cuhcBjnc"
);

const app = express();
app.use(cors({origin: true}));
app.use(express.json());
app.get("/", (req, res) => res.status(200).send("Backend Running"));
app.post("/payments/create", async (req, res) => {
    const total = req.query.total;
    console.log("Payment request received for this amount >>>", total);

    const paymentIntent = await stripe.paymentIntent.create({
        amount: total,
        currency: "usd",
    })
    res.status(201).send({clientSecret: paymentIntent.clientSecret});
})

exports.api = functions.https.onRequest(app);