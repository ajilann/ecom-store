const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const { response } = require('express');
const stripe = require("stripe")
('sk_test_51GrO7LHhaJOiKRoB10qBdx5KAjBZDHGCA8s2oGgbJtmzUumygridIsi6hVz3II55qk46MPZaNvKlp3kBZ7bgBclf001mCI2QFk');

// API 

// App config   - set the server
const app = express();

// Middlewares   - cors is the security object and origin is true. 
app.use(cors({origin: true}));
app.use(express.json());  // it will allow us to pass data into json format.

// API routes   - dummy routs, and we request and response , if its working then result . status 200 and send back message hellow world.
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Received for this amount >>>', total);
    
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,  // subunits of the currency 
        currency: "inr",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// Listen command  - we export the api which is equals cloud function https on request the app. 
exports.api = functions.https.onRequest(app);
