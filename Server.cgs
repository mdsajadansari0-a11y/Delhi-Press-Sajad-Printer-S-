const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const CASHFREE_APP_ID = process.env.CASHFREE_APP_ID;
const CASHFREE_SECRET_KEY = process.env.CASHFREE_SECRET_KEY;

app.post("/create-order", async (req, res) => {

  const orderId = "ORD_" + Date.now();

  const body = {
    order_id: orderId,
    order_amount: req.body.amount,
    order_currency: "INR",
    customer_details: {
      customer_id: "CUS_" + Date.now(),
      customer_name: req.body.name || "Customer",
      customer_email: req.body.email || "customer@example.com",
      customer_phone: req.body.phone || "9999999999"
    },
    order_meta: {
      return_url:
        "https://delhi-press-sajad-printer-s.onrender.com/success.html?order_id={order_id}"
    }
  };

  try {

    const response = await fetch(
      "https://api.cashfree.com/pg/orders",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-client-id": CASHFREE_APP_ID,
          "x-client-secret": CASHFREE_SECRET_KEY,
          "x-api-version": "2023-08-01"
        },
        body: JSON.stringify(body)
      }
    );

    const data = await response.json();

    res.json({
      payment_session_id: data.payment_session_id,
      order_id: data.order_id
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: "Payment Session Failed"
    });
  }

});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server Started");
});
